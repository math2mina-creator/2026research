import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm';

/* =========================================================
   공통
   ========================================================= */
const CFG = window.APP_CONFIG || {};
const app = document.getElementById('app');
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clone = o => JSON.parse(JSON.stringify(o));

const BUCKET = 'submissions';
const MAX_MB = 25;
const ACCEPT = '.pdf,.hwp,.hwpx,.doc,.docx,.ppt,.pptx,.xlsx,.zip,.png,.jpg,.jpeg';
const STAGES = [
  { key: 'plan', label: '연구계획서', full: '연구계획서', due: 'plan_due', group: 'plan' },
  { key: 'intro', label: '서론', full: '최종보고서 1. 서론', desc: '연구 주제 선정 이유, 연구 주제와 관련된 연구 동향 분석', due: 'report_due', group: 'report' },
  { key: 'body', label: '본론', full: '최종보고서 2. 본론', desc: '연구 내용 설명', due: 'report_due', group: 'report' },
  { key: 'conclusion', label: '결론', full: '최종보고서 3. 결론', desc: '보고서 결론', due: 'report_due', group: 'report' },
  { key: 'extra', label: '개인연구', full: '개인연구보고서', desc: '실험 대상 학생 추가 제출', due: 'extra_due', group: 'extra' }
];
/* 개인연구보고서는 '제출 대상'으로 표시된 학생에게만 해당 */
const applies = (s, g) => g.group !== 'extra' || !!(s && s.extra_required);
const stagesFor = s => STAGES.filter(g => applies(s, g));
const EXTRA = STAGES.find(g => g.key === 'extra');
const PARTS = STAGES.filter(g => g.group === 'report');
const stageMap = () => Object.fromEntries(STAGES.map(g => [g.key, '']));
const evMap = () => Object.fromEntries(STAGES.map(g => [g.key, []]));
const DUES = [{ key: 'plan_due', label: '연구계획서' }, { key: 'report_due', label: '최종보고서' }, { key: 'extra_due', label: '개인연구보고서', extra: true }];
const ST = {
  none: { label: '미제출', color: 'var(--none)' },
  waiting: { label: '피드백 대기', color: 'var(--blue)' },
  revise: { label: '보완 요청', color: 'var(--amber)' },
  done: { label: '확인 완료', color: 'var(--stamp)' }
};
const ORDER = ['waiting', 'revise', 'done', 'none'];
/* 동의서 내용을 바꾸면 이 값을 올리세요. 학생 전원이 다시 동의하게 됩니다. */
const CONSENT_VERSION = '2026-1';
const hasConsent = s => !!(s && s.consent_at && s.consent_version === CONSENT_VERSION);

const todayStr = () => new Date().toLocaleDateString('sv-SE');
const dateOf = ts => ts ? new Date(ts).toLocaleDateString('sv-SE') : '';
function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso.length === 10 ? iso + 'T00:00:00' : iso);
  return isNaN(d) ? '' : (d.getMonth() + 1) + '월 ' + d.getDate() + '일';
}
function fmtDT(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return fmtDate(iso) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
function rel(iso) {
  if (!iso) return '—';
  const diff = Math.floor((new Date(todayStr() + 'T00:00:00') - new Date(dateOf(iso) + 'T00:00:00')) / 86400000);
  if (diff <= 0) return '오늘';
  if (diff === 1) return '어제';
  if (diff < 7) return diff + '일 전';
  return fmtDate(iso);
}
function dday(due) {
  if (!due) return null;
  return Math.round((new Date(due + 'T00:00:00') - new Date(todayStr() + 'T00:00:00')) / 86400000);
}
const isPast = due => { const d = dday(due); return d !== null && d < 0; };
function ddayTag(due) {
  const d = dday(due);
  if (d === null) return '';
  const cls = d < 0 ? 'past' : d <= 3 ? 'soon' : '';
  return `<span class="dday ${cls}">${d === 0 ? 'D-day' : d > 0 ? 'D-' + d : '마감'}</span>`;
}
function toast(t) {
  const el = $('toast');
  el.textContent = t;
  el.classList.add('on');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('on'), 2800);
}
const clsFromSid = sid => /^\d{5}$/.test(String(sid || '').trim()) ? String(parseInt(String(sid).trim().slice(1, 3), 10)) : '';
function dbMsg(error) {
  if (!error) return '';
  if (error.code === '23505') return '같은 학번이나 이메일을 쓰는 학생이 이미 있습니다.';
  if (error.code === '42501') return '권한이 없습니다. 다시 로그인해 주세요.';
  return error.message || '요청을 처리하지 못했습니다.';
}
function topBar(email) {
  return `<div class="bar-top"><span>${esc(email)}</span><button class="linkbtn" id="logout">로그아웃</button></div>`;
}
function bindLogout() {
  const b = $('logout');
  if (b) b.onclick = async () => { await sb.auth.signOut(); };
}

/* 서명된 주소로 파일 열기 (팝업 차단을 피하려고 창을 먼저 연다) */
async function openFile(path) {
  const w = window.open('', '_blank');
  const { data, error } = await sb.storage.from(BUCKET).createSignedUrl(path, 120);
  if (error || !data) { if (w) w.close(); toast('파일을 열 수 없습니다.'); return; }
  if (w) w.location = data.signedUrl; else location.href = data.signedUrl;
}

/* ----- 제출 파일을 화면 안에서 보기 ----- */
const extOf = name => (String(name || '').split('.').pop() || '').toLowerCase();
let hwpLibPromise = null;
function loadHwpLib() {
  if (window.HWPjs) return Promise.resolve(window.HWPjs);
  if (!hwpLibPromise) {
    hwpLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/hwp-viewer.min.js';
      s.onload = () => window.HWPjs ? resolve(window.HWPjs) : reject(new Error('viewer'));
      s.onerror = () => { hwpLibPromise = null; reject(new Error('viewer')); };
      document.head.appendChild(s);
    });
  }
  return hwpLibPromise;
}
async function downloadBlob(path) {
  const { data, error } = await sb.storage.from(BUCKET).download(path);
  if (error || !data) throw error || new Error('download');
  return data;
}
function saveBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name || 'submission';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
/* el 안에 문서를 그린다. 정리 함수를 돌려준다. */
async function renderDoc(el, path, name) {
  const urls = [];
  const fallback = (msg) => {
    el.innerHTML = `<div class="rv-msg"><p>${msg}</p><button class="btn" data-dl>내려받아 열기</button></div>`;
    el.querySelector('[data-dl]').onclick = async () => {
      try { saveBlob(await downloadBlob(path), name); } catch (e) { toast('파일을 내려받지 못했습니다.'); }
    };
  };
  el.innerHTML = '<div class="rv-msg"><p>파일을 불러오는 중입니다.</p></div>';
  let blob;
  try { blob = await downloadBlob(path); }
  catch (e) {
    if (e && e.demo) { el.innerHTML = `<div class="rv-msg"><p>${esc(e.message)}</p></div>`; return () => {}; }
    fallback('파일을 불러오지 못했습니다. 잠시 후 다시 열어 보세요.');
    return () => {};
  }
  const ext = extOf(name);
  try {
    if (ext === 'hwp') {
      const lib = await loadHwpLib();
      const buf = new Uint8Array(await blob.arrayBuffer());
      el.innerHTML = '';
      const host = document.createElement('div');
      host.className = 'hwp-host';
      el.appendChild(host);
      new lib.Viewer(host, buf, { type: 'array' });
    } else if (ext === 'pdf') {
      const u = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      urls.push(u);
      el.innerHTML = `<iframe class="rv-frame" src="${u}" title="${esc(name)}"></iframe>`;
    } else if (['png', 'jpg', 'jpeg'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-img"><img src="${u}" alt="${esc(name)}"></div>`;
    } else {
      const label = ext === 'hwpx' ? '한글 HWPX 파일은' : `.${esc(ext)} 파일은`;
      fallback(`${label} 화면에서 바로 볼 수 없습니다. 내려받아 프로그램에서 열어 보세요. 학생에게 .hwp나 PDF로 내 달라고 하면 여기서 바로 볼 수 있습니다.`);
    }
  } catch (e) {
    fallback('이 한글 파일은 화면에서 열지 못했습니다. 배포용 문서이거나 암호가 걸린 파일일 수 있습니다. 내려받아 한글에서 열어 보세요.');
  }
  return () => urls.forEach(u => URL.revokeObjectURL(u));
}

/* =========================================================
   시작과 로그인
   ========================================================= */
if (!CFG.SUPABASE_URL || CFG.SUPABASE_URL.startsWith('YOUR') || !CFG.SUPABASE_ANON_KEY || CFG.SUPABASE_ANON_KEY.startsWith('YOUR')) {
  app.innerHTML = `<div class="login"><h1>설정이 필요합니다</h1><p>config.js 파일에 Supabase 주소와 키를 넣은 뒤 다시 올려 주세요.</p></div>`;
  throw new Error('config.js not set');
}

const sb = createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true, flowType: 'pkce' }
});

let currentUid = undefined;

async function route(session) {
  const uid = session?.user?.id || null;
  if (uid === currentUid) return;
  currentUid = uid;
  if (!session) { renderLogin(); return; }

  app.innerHTML = '<p class="loading">계정을 확인하는 중입니다.</p>';
  const email = (session.user.email || '').toLowerCase();

  const { data: isTeacher, error } = await sb.rpc('is_teacher');
  if (error) { renderMessage(email, '서버에 연결하지 못했습니다.', '잠시 후 새로고침해 주세요. 계속 안 되면 Supabase 프로젝트가 일시 정지되지 않았는지 확인하세요.'); return; }
  if (isTeacher) { await Teacher.start(email); return; }

  const { data: me } = await sb.from('students').select('*').maybeSingle();
  if (me) { await Student.start(email, me); return; }

  const dom = CFG.SCHOOL_DOMAIN;
  if (dom && !email.endsWith('@' + dom.toLowerCase())) {
    renderMessage(email, '학교 계정으로 로그인해 주세요.', `@${esc(dom)} 계정으로 다시 로그인하면 됩니다.`);
  } else {
    renderMessage(email, '등록되지 않은 계정입니다.', '선생님께 이 이메일 주소를 알려 드리고 명단에 등록해 달라고 요청하세요.');
  }
}

function renderLogin() {
  app.innerHTML = `<div class="login">
    <h1>개인연구 제출·피드백</h1>
    <p>학교 구글 계정으로 로그인하면 연구계획서와 최종보고서를 제출하고 선생님의 피드백을 확인할 수 있습니다.</p>
    <button class="gbtn" id="glogin">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
      학교 구글 계정으로 로그인
    </button>
    ${CFG.SCHOOL_DOMAIN ? `<p class="fine">@${esc(CFG.SCHOOL_DOMAIN)} 계정을 사용하세요.</p>` : ''}
  </div>`;
  $('glogin').onclick = async () => {
    const queryParams = { prompt: 'select_account' };
    if (CFG.SCHOOL_DOMAIN) queryParams.hd = CFG.SCHOOL_DOMAIN;
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: location.origin + location.pathname, queryParams }
    });
    if (error) toast('로그인을 시작하지 못했습니다.');
  };
}

function renderMessage(email, title, body) {
  app.innerHTML = `${topBar(email)}<div class="login"><h1>${esc(title)}</h1><p>${body}</p>
    <button class="btn" id="relogin">다른 계정으로 로그인</button></div>`;
  bindLogout();
  $('relogin').onclick = async () => { await sb.auth.signOut(); };
}

sb.auth.getSession().then(({ data }) => route(data.session));
sb.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') setTimeout(() => route(session), 0);
});

/* =========================================================
   선생님 화면
   ========================================================= */
const Teacher = {
  email: '', settings: {}, students: new Map(),
  openId: null, isNew: false, draft: null, orig: null, fb: stageMap(), delEvents: new Set(), dirty: false, justStamped: null,

  blank() { return { status: 'none', submitted_at: null, link: '', file_path: null, file_name: null }; },

  async start(email) {
    this.email = email;
    app.innerHTML = '<p class="loading">명단을 불러오는 중입니다.</p>';
    try { await this.load(); }
    catch (e) { renderMessage(email, '명단을 불러오지 못했습니다.', esc(dbMsg(e))); return; }
    this.shell();
    this.renderAll();
  },

  async load() {
    const res = await Promise.all([
      sb.from('students').select('*'),
      sb.from('submissions').select('*'),
      sb.from('events').select('*').order('created_at', { ascending: false }),
      sb.from('teacher_notes').select('*'),
      sb.from('settings').select('*').eq('id', 1).maybeSingle()
    ]);
    const bad = res.find(r => r.error);
    if (bad) throw bad.error;
    const [st, sub, ev, notes, set] = res.map(r => r.data);
    this.settings = set || {};
    const m = new Map();
    for (const s of st) m.set(s.id, { ...s, field: s.field || '', topic: s.topic || '', email: s.email || '', sid: s.sid || '', cls: s.cls || '', memo: '', ...Object.fromEntries(STAGES.map(g => [g.key, this.blank()])), ev: evMap() });
    for (const n of notes) if (m.has(n.student_id)) m.get(n.student_id).memo = n.memo || '';
    for (const x of sub) if (m.has(x.student_id) && STAGES.some(g => g.key === x.stage)) m.get(x.student_id)[x.stage] = { ...this.blank(), ...x, link: x.link || '' };
    for (const e of ev) if (m.has(e.student_id) && m.get(e.student_id).ev[e.stage]) m.get(e.student_id).ev[e.stage].push(e);
    this.students = m;
  },

  lastActivity(s) {
    let t = s.updated_at || '';
    for (const g of STAGES) for (const e of s.ev[g.key]) if (e.created_at > t) t = e.created_at;
    return t;
  },

  shell() {
    app.innerHTML = `${topBar(this.email)}
    <header class="top">
      <div><h1 id="title"></h1><p class="sub">고등학교 1학년 개인연구 프로그램 · 교사용</p></div>
      <div class="dues" id="dues"></div>
    </header>
    <section class="summary" id="summary" aria-label="제출 현황"></section>
    <div class="tools">
      <input class="search" id="q" type="search" placeholder="이름, 학번, 연구 주제로 찾기" aria-label="검색">
      <select class="f" id="fcls" aria-label="반"></select>
      <select class="f" id="fstatus" aria-label="상태">
        <option value="">전체 상태</option>
        <option value="wait">피드백 대기</option>
        <option value="revise">보완 요청 중</option>
        <option value="plan-none">계획서 미제출</option>
        <option value="report-none">보고서 미제출 부분 있음</option>
        <option value="late">마감 지남 미제출</option>
        <option value="alldone">모두 확인 완료</option>
        <option value="nomail">이메일 미등록</option>
        <option value="noconsent">개인정보 동의 전</option>
        <option value="extra">개인연구보고서 대상</option>
      </select>
      <select class="f" id="fsort" aria-label="정렬">
        <option value="sid">학번순</option><option value="name">이름순</option><option value="recent">최근 활동순</option>
      </select>
      <span class="spacer"></span>
      <button class="btn" id="bReload">새로고침</button>
      <button class="btn" id="bBulk">명단 붙여넣기</button>
      <button class="btn" id="bCsv">CSV 내보내기</button>
      <button class="btn primary" id="bAdd">학생 추가</button>
    </div>
    <p class="count" id="count"></p>
    <div class="tablebox">
      <table><thead><tr><th>학번·이름</th><th>연구 주제</th><th>연구계획서</th><th>최종보고서</th><th>최근 활동</th></tr></thead><tbody id="rows"></tbody></table>
      <div id="empty"></div>
    </div>

    <div class="scrim" id="scrim"></div>
    <aside class="drawer" id="drawer" aria-label="학생 상세" aria-hidden="true">
      <div class="dhead"><h2 id="dTitle"></h2><button class="x" id="dClose" aria-label="닫기">×</button></div>
      <div class="guard" id="guard"><span style="flex:1">저장하지 않은 변경이 있습니다.</span>
        <button class="btn" id="gKeep">계속 편집</button><button class="btn danger armed" id="gDrop">버리고 닫기</button></div>
      <div class="dbody" id="dBody"></div>
      <div class="dfoot"><button class="btn danger" id="dDel">학생 삭제</button><span class="msg" id="dMsg"></span><button class="btn primary" id="dSave">저장</button></div>
    </aside>

    <div class="modal" id="mBulk" role="dialog" aria-modal="true" aria-labelledby="mBulkT"><div class="mbox">
      <h2 id="mBulkT">명단 붙여넣기</h2>
      <p>한 줄에 한 명씩 학번, 이름, 학교 구글 이메일, 연구 주제 순서로 넣으세요. 엑셀에서 칸을 복사해 붙여넣어도 됩니다. 이미 있는 학번이면 새로 만들지 않고 이메일이나 주제처럼 적은 칸만 채웁니다.</p>
      <code class="ex">10109	김지호	jiho@school.example	과도한 일반화의 오류
10206	김서율	seoyul@school.example
10222	jinhyuk@school.example</code>
      <p class="hint">세 번째 줄처럼 학번과 이메일만 적으면 이미 등록된 학생에게 이메일만 연결됩니다.</p>
      <textarea class="in" id="bulkText" rows="9" aria-label="명단"></textarea>
      <div class="mfoot"><span class="msg" id="bulkMsg"></span><button class="btn" data-close="mBulk">취소</button><button class="btn primary" id="bulkGo">반영</button></div>
    </div></div>

    <div class="modal" id="mSet" role="dialog" aria-modal="true" aria-labelledby="mSetT"><div class="mbox">
      <h2 id="mSetT">프로그램 설정</h2>
      <div class="field"><label class="l" for="sName">프로그램 이름</label><input class="in" id="sName"></div>
      <div class="row2">
        <div class="field"><label class="l" for="sPlan">계획서 마감일</label><input class="in" id="sPlan" type="date"></div>
        <div class="field"><label class="l" for="sReport">최종보고서 마감일</label><input class="in" id="sReport" type="date"></div>
      </div>
      <div class="row2">
        <div class="field"><label class="l" for="sExtra">개인연구보고서 마감일</label><input class="in" id="sExtra" type="date"></div>
      </div>
      <div class="mfoot"><button class="btn" data-close="mSet">취소</button><button class="btn primary" id="setGo">설정 저장</button></div>
    </div></div>

    <div class="review" id="review" role="dialog" aria-modal="true" aria-label="제출물 보면서 피드백 쓰기" aria-hidden="true">
      <div class="rv-head">
        <div class="rv-title"><b id="rvName"></b><span id="rvMeta"></span></div>
        <span class="rv-pos" id="rvPos"></span>
        <button class="btn sm" id="rvPrev">이전</button>
        <button class="btn sm" id="rvNext">다음</button>
        <button class="x" id="rvClose" aria-label="검토 닫기">×</button>
      </div>
      <div class="rv-body">
        <div class="rv-doc">
          <div class="rv-tools">
            <span class="fn" id="rvFile"></span>
            <button class="btn sm" data-zoom="-1" aria-label="축소">−</button>
            <button class="btn sm" data-zoom="0">폭 맞춤</button>
            <button class="btn sm" data-zoom="1" aria-label="확대">+</button>
            <button class="btn sm" id="rvDl">내려받기</button>
          </div>
          <div class="rv-view" id="rvView"></div>
        </div>
        <div class="rv-side" id="rvSide"></div>
      </div>
    </div>`;

    bindLogout();
    ['q', 'fcls', 'fstatus', 'fsort'].forEach(id => $(id).addEventListener('input', () => this.renderRows()));
    $('bAdd').onclick = () => this.openDrawer(null);
    $('bBulk').onclick = () => this.openModal('mBulk');
    $('bCsv').onclick = () => this.exportCsv();
    $('bReload').onclick = async () => { try { await this.load(); this.renderAll(); toast('새로 불러왔습니다.'); } catch (e) { toast(dbMsg(e)); } };
    $('dClose').onclick = () => this.closeDrawer();
    $('scrim').onclick = () => this.closeDrawer();
    $('dSave').onclick = () => this.save();
    $('dDel').onclick = () => this.remove();
    $('gKeep').onclick = () => $('guard').classList.remove('on');
    $('gDrop').onclick = () => this.closeDrawer(true);
    $('bulkText').oninput = () => { const n = this.parseBulk($('bulkText').value).length; $('bulkMsg').textContent = n ? `${n}줄 인식됨` : ''; };
    $('bulkGo').onclick = () => this.applyBulk();
    $('setGo').onclick = () => this.saveSettings();
    app.querySelectorAll('[data-close]').forEach(b => b.onclick = () => this.closeModal(b.dataset.close));
    app.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) this.closeModal(m.id); }));
    $('rvClose').onclick = () => this.closeReview();
    $('rvPrev').onclick = () => this.reviewGo(-1);
    $('rvNext').onclick = () => this.reviewGo(1);
    $('rvDl').onclick = async () => {
      const it = this.rvItem();
      if (!it) return;
      try { saveBlob(await downloadBlob(it.path), it.name); } catch (e) { toast(e && e.demo ? e.message : '파일을 내려받지 못했습니다.'); }
    };
    app.querySelectorAll('[data-zoom]').forEach(b => b.onclick = () => this.zoom(+b.dataset.zoom));
    document.onkeydown = e => {
      if (e.key === 'Escape' && $('review').classList.contains('on')) { this.closeReview(); return; }
      if (e.key === 'Escape') {
        const m = app.querySelector('.modal.on');
        if (m) { this.closeModal(m.id); return; }
        if ($('drawer').classList.contains('on')) this.closeDrawer();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's' && $('drawer').classList.contains('on')) {
        e.preventDefault();
        if (this.dirty) this.save();
      }
    };
  },

  renderAll() { this.renderHeader(); this.renderSummary(); this.renderClassFilter(); this.renderRows(); },

  renderHeader() {
    const c = this.settings;
    $('title').textContent = c.program_name || '개인연구 제출·피드백 관리';
    document.title = $('title').textContent;
    const anyExtra = [...this.students.values()].some(s => s.extra_required);
    $('dues').innerHTML = DUES.filter(g => !g.extra || anyExtra).map(g => c[g.key]
      ? `<span>${g.label} 마감 <b>${fmtDate(c[g.key])}</b>${ddayTag(c[g.key])}</span>`
      : `<span>${g.label} 마감 <b>미정</b></span>`).join('') + '<button class="linkbtn" id="bSet">마감일 설정</button>';
    $('bSet').onclick = () => this.openSettings();
  },

  renderSummary() {
    const list = [...this.students.values()];
    const n = list.length;
    const count = key => { const c = { none: 0, waiting: 0, revise: 0, done: 0 }; list.forEach(s => c[s[key].status || 'none']++); return c; };
    const bar = (cnt, thin) => `<div class="bar${thin ? ' thin' : ''}">${ORDER.filter(k => k !== 'none').map(k => n && cnt[k] ? `<span style="width:${cnt[k] / n * 100}%;background:${ST[k].color}" title="${ST[k].label} ${cnt[k]}명"></span>` : '').join('')}</div>`;
    const legend = cnt => `<div class="legend">${ORDER.map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label} ${cnt[k]}</span>`).join('')}</div>`;
    const pc = count('plan');
    let html = `<div class="sum"><h2>연구계획서</h2><div class="big">${n - pc.none}<small>/ ${n}명 제출</small></div>${bar(pc)}${legend(pc)}</div>`;
    const allIn = list.filter(s => PARTS.every(g => s[g.key].status !== 'none')).length;
    html += `<div class="sum"><h2>최종보고서</h2><div class="big">${allIn}<small>/ ${n}명 세 부분 모두 제출</small></div>
      <div class="parts">${PARTS.map(g => { const c = count(g.key); return `<div class="part-row"><span class="pl">${g.label}</span>${bar(c, true)}<span class="pn">${n - c.none}/${n}</span></div>`; }).join('')}</div>
      ${(() => { const ex = list.filter(s => s.extra_required); if (!ex.length) return ''; const c = { none: 0, waiting: 0, revise: 0, done: 0 }; ex.forEach(s => c[s.extra.status || 'none']++); const m = ex.length;
        return `<div class="part-row extra-row"><span class="pl">개인연구보고서</span><div class="bar thin">${ORDER.filter(k => k !== 'none').map(k => c[k] ? `<span style="width:${c[k] / m * 100}%;background:${ST[k].color}"></span>` : '').join('')}</div><span class="pn">${m - c.none}/${m}</span></div>`; })()}
      <div class="legend">${ORDER.filter(k => k !== 'none').map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label}</span>`).join('')}</div></div>`;
    const wait = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'waiting').length, 0);
    const rev = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'revise').length, 0);
    const late = list.filter(s => stagesFor(s).some(g => s[g.key].status === 'none' && isPast(this.settings[g.due]))).length;
    const nomail = list.filter(s => !s.email).length;
    const noconsent = list.filter(s => s.email && !hasConsent(s)).length;
    html += `<div class="sum"><h2>지금 할 일</h2><div class="todo-list">
      <button class="todo wait" data-f="wait"><span>피드백을 기다리는 제출물</span><span class="n">${wait}</span></button>
      <button class="todo rev" data-f="revise"><span>보완 요청 후 재제출 대기</span><span class="n">${rev}</span></button>
      <button class="todo late" data-f="late"><span>마감 지나고 미제출한 학생</span><span class="n">${late}</span></button>
      ${nomail ? `<button class="todo mail" data-f="nomail"><span>이메일 미등록 (로그인 불가)</span><span class="n">${nomail}</span></button>` : ''}
      ${noconsent ? `<button class="todo mail" data-f="noconsent"><span>개인정보 동의 전</span><span class="n">${noconsent}</span></button>` : ''}
      ${wait ? `<button class="btn primary" id="rvStart">대기 중인 제출물 차례로 검토하기</button>` : ''}
    </div></div>`;
    $('summary').innerHTML = html;
    $('summary').querySelectorAll('.todo').forEach(b => b.onclick = () => { $('fstatus').value = b.dataset.f; this.renderRows(); });
    const rs = $('rvStart');
    if (rs) rs.onclick = () => this.openReview(this.waitingQueue(), 0);
  },

  renderClassFilter() {
    const sel = $('fcls');
    const cur = sel.value;
    const classes = [...new Set([...this.students.values()].map(s => s.cls).filter(Boolean))]
      .sort((a, b) => (+a || 0) - (+b || 0) || String(a).localeCompare(b));
    sel.innerHTML = '<option value="">전체 반</option>' + classes.map(c => `<option value="${esc(c)}">${esc(c)}반</option>`).join('');
    if (classes.includes(cur)) sel.value = cur;
  },

  matches(s) {
    const q = $('q').value.trim().toLowerCase();
    if (q && !(s.name + ' ' + s.sid + ' ' + s.topic + ' ' + s.field + ' ' + s.email).toLowerCase().includes(q)) return false;
    const c = $('fcls').value;
    if (c && String(s.cls) !== c) return false;
    const f = $('fstatus').value;
    if (f === 'wait') return stagesFor(s).some(g => s[g.key].status === 'waiting');
    if (f === 'revise') return stagesFor(s).some(g => s[g.key].status === 'revise');
    if (f === 'extra') return !!s.extra_required;
    if (f === 'plan-none') return s.plan.status === 'none';
    if (f === 'report-none') return PARTS.some(g => s[g.key].status === 'none');
    if (f === 'late') return stagesFor(s).some(g => s[g.key].status === 'none' && isPast(this.settings[g.due]));
    if (f === 'alldone') return stagesFor(s).every(g => s[g.key].status === 'done');
    if (f === 'nomail') return !s.email;
    if (f === 'noconsent') return !!s.email && !hasConsent(s);
    return true;
  },

  partsCell(s) {
    const due = this.settings.report_due;
    const chips = PARTS.map(g => {
      const k = s[g.key].status || 'none';
      return `<span class="chip ${k}${this.justStamped === s.id + g.key ? ' pressed' : ''}" title="${g.full}: ${ST[k].label}">${k === 'done' ? '✓ ' : ''}${g.label}</span>`;
    }).join('');
    const ek = s.extra_required ? (s.extra.status || 'none') : null;
    const extraChip = ek ? `<span class="chip ${ek} extra${this.justStamped === s.id + 'extra' ? ' pressed' : ''}" title="개인연구보고서: ${ST[ek].label}">${ek === 'done' ? '✓ ' : ''}개인연구</span>` : '';
    const missing = PARTS.filter(g => s[g.key].status === 'none').length;
    const meta = missing && isPast(due) ? '<div class="meta warn">마감 지남</div>'
      : [...PARTS, ...(s.extra_required ? [EXTRA] : [])].some(g => s[g.key].status === 'waiting') ? '<div class="meta">피드백 대기 있음</div>' : '';
    return `<div class="chips">${chips}${extraChip}</div>${meta}`;
  },

  stageCell(s, g) {
    const st = s[g.key];
    const k = st.status || 'none';
    const due = this.settings[g.due];
    let meta = '';
    if (k === 'none') { if (isPast(due)) meta = '<div class="meta warn">마감 지남</div>'; }
    else if (st.submitted_at) {
      const late = due && dateOf(st.submitted_at) > due;
      meta = `<div class="meta${late ? ' warn' : ''}">${fmtDate(st.submitted_at)} 제출${late ? ' (지각)' : ''}</div>`;
    }
    const stamp = k === 'done' ? `<span class="stamp${this.justStamped === s.id + g.key ? ' pressed' : ''}" aria-hidden="true">확인</span>` : '';
    return `<div class="cell">${stamp}<div><span class="pill ${k}">${ST[k].label}</span>${meta}</div></div>`;
  },

  renderRows() {
    const sort = $('fsort').value;
    const list = [...this.students.values()].filter(s => this.matches(s));
    list.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name, 'ko');
      if (sort === 'recent') return this.lastActivity(b).localeCompare(this.lastActivity(a));
      return (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }) || a.name.localeCompare(b.name, 'ko');
    });
    $('rows').innerHTML = list.map(s => `<tr data-id="${esc(s.id)}" tabindex="0">
      <td class="c-who"><span class="sid">${esc(s.sid) || '—'}</span> <span class="nm">${esc(s.name)}</span>${!s.email ? '<span class="nomail">이메일 없음</span>' : hasConsent(s) ? '' : '<span class="nomail">동의 전</span>'}</td>
      <td class="c-topic"><div class="topic${s.topic ? '' : ' empty'}" title="${esc(s.topic)}">${esc(s.topic) || '주제 미정'}</div></td>
      <td class="c-plan">${this.stageCell(s, STAGES[0])}</td>
      <td class="c-report">${this.partsCell(s)}</td>
      <td class="c-recent"><span class="recent">${rel(this.lastActivity(s))}</span></td></tr>`).join('');
    this.justStamped = null;
    $('rows').querySelectorAll('tr').forEach(tr => {
      tr.onclick = () => this.openDrawer(tr.dataset.id);
      tr.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.openDrawer(tr.dataset.id); } };
    });
    const total = this.students.size;
    $('count').textContent = total ? (list.length === total ? `학생 ${total}명` : `학생 ${total}명 중 ${list.length}명 표시`) : '';
    let empty = '';
    if (!total) empty = '<div class="empty-state"><p>아직 등록된 학생이 없습니다. 반 명단을 붙여넣으면 한 번에 등록됩니다.</p><button class="btn primary" id="emptyBulk">명단 붙여넣기</button></div>';
    else if (!list.length) empty = '<div class="empty-state"><p>조건에 맞는 학생이 없습니다. 검색어나 필터를 바꿔 보세요.</p></div>';
    $('empty').innerHTML = empty;
    const eb = $('emptyBulk');
    if (eb) eb.onclick = () => this.openModal('mBulk');
  },

  /* ----- 상세 창 ----- */
  openDrawer(id) {
    const src = id ? this.students.get(id) : null;
    if (id && !src) return;
    this.isNew = !id;
    this.openId = id || null;
    const base = src ? clone(src) : { id: null, sid: '', name: '', cls: '', email: '', field: '', topic: '', memo: '', ...Object.fromEntries(STAGES.map(g => [g.key, this.blank()])), ev: evMap() };
    for (const g of STAGES) base[g.key].date = dateOf(base[g.key].submitted_at);
    this.draft = base;
    this.orig = clone(base);
    this.fb = stageMap();
    this.delEvents = new Set();
    this.dirty = false;
    this.renderDrawer();
    $('drawer').classList.add('on');
    $('scrim').classList.add('on');
    $('drawer').setAttribute('aria-hidden', 'false');
    $('guard').classList.remove('on');
    setTimeout(() => { const f = this.isNew ? $('f-sid') : $('dClose'); if (f) f.focus(); }, 60);
  },

  closeDrawer(force) {
    if (this.dirty && !force) { $('guard').classList.add('on'); $('gKeep').focus(); return; }
    $('drawer').classList.remove('on');
    $('scrim').classList.remove('on');
    $('drawer').setAttribute('aria-hidden', 'true');
    $('guard').classList.remove('on');
    const prev = this.openId;
    this.openId = null; this.draft = null; this.dirty = false; this.isNew = false;
    if (prev) { const tr = $('rows').querySelector(`tr[data-id="${CSS.escape(prev)}"]`); if (tr) tr.focus(); }
  },

  setDirty() { this.dirty = true; this.updateFoot(); },
  updateFoot() {
    const m = $('dMsg');
    if (this.dirty) { m.textContent = '저장하지 않은 변경 있음'; m.className = 'msg dirty'; }
    else { m.textContent = this.draft?.updated_at ? '마지막 저장 ' + fmtDT(this.draft.updated_at) : ''; m.className = 'msg'; }
    $('dSave').disabled = !this.dirty;
    $('dDel').hidden = this.isNew;
    $('dDel').classList.remove('armed');
    $('dDel').textContent = '학생 삭제';
  },
  keepFb() { $('dBody').querySelectorAll('[data-fb]').forEach(t => this.fb[t.dataset.fb] = t.value); },

  stageHTML(g) {
    const st = this.draft[g.key];
    const k = st.status;
    const evs = this.draft.ev[g.key].filter(e => !this.delEvents.has(e.id));
    const evHTML = evs.map(e => {
      let body = '';
      if (e.kind === 'submit') body = `<div class="note">학생이 파일을 제출했습니다: ${e.file_path ? `<button class="linkbtn" data-open="${esc(e.file_path)}">${esc(e.file_name || '파일')}</button>` : esc(e.file_name || '')}</div>`;
      else if (e.note) body = `<div class="note">${esc(e.note)}</div>`;
      const who = e.kind === 'submit' ? '학생 제출' : e.kind === 'feedback' ? '피드백' : '상태 변경';
      const seen = e.kind === 'feedback' ? (e.seen_at ? `<span class="seen">학생 읽음 ${fmtDT(e.seen_at)}</span>` : '<span class="unseen">학생 아직 안 읽음</span>') : '';
      return `<li class="k-${e.kind}"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>${who}</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${seen}
        ${e.kind !== 'submit' ? `<button class="del" data-del="${esc(e.id)}" aria-label="이 기록 삭제">삭제</button>` : ''}</div>${body}</li>`;
    }).join('');
    return `<section class="stage" data-stage="${g.key}">
      ${g.key === PARTS[0].key ? '<h3 class="group-h">최종보고서</h3>' : ''}${g.key === 'extra' ? '<h3 class="group-h">개인연구보고서</h3>' : ''}
      <div class="stage-h"><h3>${g.group === 'report' ? g.full.replace('최종보고서 ', '') : g.group === 'extra' ? '제출물' : g.label}${g.desc ? `<small class="desc">${g.desc}</small>` : ''}</h3>${k === 'done' ? '<span class="stamp lg" aria-hidden="true">확인</span>' : ''}</div>
      ${st.file_path ? `<div class="filebox"><span class="fn">📄 ${esc(st.file_name || '제출 파일')}</span><button class="btn sm primary" data-review="${g.key}">보면서 피드백 쓰기</button></div>` : ''}
      <div class="seg" role="radiogroup" aria-label="${g.label} 상태">
        ${['none', 'waiting', 'revise', 'done'].map(s => `<label class="${k === s ? 'sel-' + s : ''}"><input type="radio" name="st-${g.key}" value="${s}" ${k === s ? 'checked' : ''}><span>${ST[s].label}</span></label>`).join('')}
      </div>
      <div class="row2">
        <div class="field"><label class="l">제출일</label><input class="in" type="date" data-sk="date" value="${esc(st.date)}"></div>
        <div class="field"><label class="l">추가 링크 (선택)</label><input class="in" type="url" data-sk="link" placeholder="구글 문서 등 외부 링크" value="${esc(st.link)}">
          ${/^https?:\/\//.test(st.link || '') ? `<a class="hint" href="${esc(st.link)}" target="_blank" rel="noopener noreferrer">링크 열기</a>` : ''}</div>
      </div>
      <div class="field"><label class="l">새 피드백</label><textarea class="in" data-fb="${g.key}" placeholder="학생에게 보일 피드백을 적으세요. 저장하면 학생 화면에 바로 나타납니다.">${esc(this.fb[g.key])}</textarea>
        <p class="hint">상태를 바꾸고 피드백을 함께 저장하면 그 상태와 함께 기록됩니다.</p></div>
      ${evHTML ? `<ul class="hist">${evHTML}</ul>` : '<p class="hint">아직 기록이 없습니다.</p>'}
    </section>`;
  },

  renderDrawer() {
    const d = this.draft;
    $('dTitle').textContent = this.isNew ? '새 학생' : ((d.sid ? d.sid + ' ' : '') + (d.name || ''));
    $('dBody').innerHTML = `
      <div class="grid2">
        <div class="field"><label class="l" for="f-sid">학번</label><input class="in" id="f-sid" data-k="sid" inputmode="numeric" value="${esc(d.sid)}"></div>
        <div class="field"><label class="l" for="f-name">이름</label><input class="in" id="f-name" data-k="name" value="${esc(d.name)}"></div>
        <div class="field"><label class="l" for="f-cls">반</label><input class="in" id="f-cls" data-k="cls" placeholder="학번에서 자동" value="${esc(d.cls)}"></div>
        <div class="field"><label class="l" for="f-field">연구 분야</label><input class="in" id="f-field" data-k="field" placeholder="예: 건축, 수학" value="${esc(d.field)}"></div>
      </div>
      <div class="field"><label class="l" for="f-email">학교 구글 이메일 (학생 로그인용)</label><input class="in" id="f-email" data-k="email" type="email" autocomplete="off" value="${esc(d.email)}"></div>
      <div class="field"><label class="l" for="f-topic">연구 주제</label><input class="in" id="f-topic" data-k="topic" value="${esc(d.topic)}"></div>
      <label class="agree small"><input type="checkbox" id="f-extra" ${d.extra_required ? 'checked' : ''}> <span>실험 대상 학생 (개인연구보고서 추가 제출)</span></label>
      ${this.isNew ? '' : `<p class="hint" style="margin:-4px 0 12px">개인정보 수집·이용 동의: ${hasConsent(d) ? fmtDT(d.consent_at) + ' 동의함' + (/^data:image\/png;base64,/.test(d.consent_signature || '') ? `<br><img class="sig" src="${d.consent_signature}" alt="${esc(d.name)} 학생 서명">` : '') : '<span class="warn">아직 동의하지 않음</span> (학생이 처음 로그인할 때 동의 화면이 나옵니다)'}</p>`}
      <div class="field"><label class="l" for="f-memo">지도 메모 (학생에게 보이지 않음)</label><textarea class="in" id="f-memo" data-k="memo" rows="3">${esc(d.memo)}</textarea></div>
      ${stagesFor(d).map(g => this.stageHTML(g)).join('')}`;
    this.bindDrawer();
    $('f-extra').onchange = () => { this.keepFb(); this.draft.extra_required = $('f-extra').checked; this.setDirty(); this.renderDrawer(); };
    this.updateFoot();
  },

  bindDrawer() {
    const body = $('dBody');
    body.querySelectorAll('[data-k]').forEach(el => el.oninput = () => {
      this.draft[el.dataset.k] = el.value;
      if (el.dataset.k === 'sid') {
        const c = clsFromSid(el.value);
        if (c && (!this.draft.cls || this.draft.cls === clsFromSid(this.orig.sid) || $('f-cls').dataset.auto)) {
          this.draft.cls = c; $('f-cls').value = c; $('f-cls').dataset.auto = '1';
        }
      }
      if (el.dataset.k === 'cls') delete el.dataset.auto;
      this.setDirty();
    });
    body.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openFile(b.dataset.open));
    body.querySelectorAll('[data-review]').forEach(b => b.onclick = () => {
      if (this.dirty) { toast('먼저 저장하거나 변경을 취소하세요.'); return; }
      const id = this.openId;
      this.closeDrawer(true);
      this.openReview([{ id, stage: b.dataset.review }], 0);
    });
    body.querySelectorAll('.stage').forEach(sec => {
      const key = sec.dataset.stage;
      sec.querySelectorAll('input[type=radio]').forEach(r => r.onchange = () => {
        this.draft[key].status = r.value;
        if (r.value !== 'none' && !this.draft[key].date) this.draft[key].date = todayStr();
        this.keepFb(); this.setDirty(); this.renderDrawer();
        const again = $('dBody').querySelector(`input[name="st-${key}"][value="${r.value}"]`);
        if (again) again.focus();
      });
      sec.querySelectorAll('[data-sk]').forEach(el => el.oninput = () => { this.draft[key][el.dataset.sk] = el.value; this.setDirty(); });
      const fb = sec.querySelector('[data-fb]');
      if (fb) fb.oninput = () => { this.fb[key] = fb.value; this.setDirty(); };
    });
    body.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      if (b.dataset.armed) { this.delEvents.add(b.dataset.del); this.keepFb(); this.setDirty(); this.renderDrawer(); }
      else { b.dataset.armed = '1'; b.textContent = '한 번 더 눌러 삭제'; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = '삭제'; } }, 3000); }
    });
  },

  async save() {
    this.keepFb();
    const d = this.draft, o = this.orig;
    const row = {
      sid: d.sid.trim() || null,
      name: d.name.trim(),
      cls: String(d.cls || '').trim().replace(/반$/, '') || null,
      email: d.email.trim().toLowerCase() || null,
      field: d.field.trim(),
      topic: d.topic.trim(),
      extra_required: !!d.extra_required
    };
    if (!row.name) { toast('이름을 입력하세요.'); $('f-name').focus(); return; }
    if (row.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) { toast('이메일 형식을 확인하세요.'); $('f-email').focus(); return; }

    $('dSave').disabled = true;
    $('dMsg').textContent = '저장 중입니다.';
    const now = new Date().toISOString();
    let stamped = null;
    try {
      let id = this.openId;
      if (this.isNew) {
        const { data, error } = await sb.from('students').insert({ ...row, updated_at: now }).select().single();
        if (error) throw error;
        id = data.id;
      } else {
        const changed = ['sid', 'name', 'cls', 'email', 'field', 'topic'].some(k => (row[k] || '') !== (o[k] || '')) || row.extra_required !== !!o.extra_required;
        if (changed) {
          const { error } = await sb.from('students').update({ ...row, updated_at: now }).eq('id', id);
          if (error) throw error;
        }
      }
      if ((d.memo || '') !== (o.memo || '')) {
        const { error } = await sb.from('teacher_notes').upsert({ student_id: id, memo: d.memo, updated_at: now });
        if (error) throw error;
      }
      for (const g of STAGES) {
        const a = d[g.key], b = o[g.key];
        const statusChanged = a.status !== b.status;
        if (statusChanged || a.date !== b.date || (a.link || '') !== (b.link || '')) {
          const payload = { student_id: id, stage: g.key, status: a.status, link: (a.link || '').trim() || null, updated_at: now };
          if (a.date !== b.date) payload.submitted_at = a.date ? new Date(a.date + 'T12:00:00').toISOString() : null;
          const { error } = await sb.from('submissions').upsert(payload, { onConflict: 'student_id,stage' });
          if (error) throw error;
        }
        const note = (this.fb[g.key] || '').trim();
        if (note || statusChanged) {
          const { error } = await sb.from('events').insert({ student_id: id, stage: g.key, kind: note ? 'feedback' : 'status', status: a.status, note });
          if (error) throw error;
        }
        if (statusChanged && a.status === 'done') stamped = id + g.key;
      }
      if (this.delEvents.size) {
        const { error } = await sb.from('events').delete().in('id', [...this.delEvents]);
        if (error) throw error;
      }
      await this.load();
      this.justStamped = stamped;
      this.renderAll();
      this.dirty = false;
      this.openDrawer(id);
      toast('저장했습니다.');
    } catch (e) {
      toast(dbMsg(e));
      $('dSave').disabled = false;
      this.updateFoot();
    }
  },

  async remove() {
    const b = $('dDel');
    if (!b.classList.contains('armed')) {
      b.classList.add('armed'); b.textContent = '정말 삭제';
      setTimeout(() => { b.classList.remove('armed'); b.textContent = '학생 삭제'; }, 3500);
      return;
    }
    const { error } = await sb.from('students').delete().eq('id', this.openId);
    if (error) { toast(dbMsg(error)); return; }
    this.students.delete(this.openId);
    this.dirty = false;
    this.closeDrawer(true);
    this.renderAll();
    toast('학생을 삭제했습니다.');
  },

  /* ----- 보면서 피드백 쓰기 ----- */
  rv: null,

  waitingQueue() {
    const q = [];
    for (const s of this.students.values()) {
      for (const g of STAGES) {
        if (s[g.key].status === 'waiting' && s[g.key].file_path) q.push({ id: s.id, stage: g.key, at: s[g.key].submitted_at || '' });
      }
    }
    return q.sort((a, b) => a.at.localeCompare(b.at));
  },

  rvItem() {
    if (!this.rv) return null;
    const q = this.rv.queue[this.rv.idx];
    const s = q && this.students.get(q.id);
    if (!s) return null;
    const st = s[q.stage];
    return { s, stage: q.stage, g: STAGES.find(x => x.key === q.stage), st, path: st.file_path, name: st.file_name || '제출 파일' };
  },

  openReview(queue, idx) {
    if (!queue.length) { toast('검토할 제출물이 없습니다.'); return; }
    this.rv = { queue, idx, status: null, fb: '', dirty: false, cleanup: null, token: 0, zoom: 1, armed: false };
    $('review').classList.add('on');
    $('review').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.renderReview(true);
  },

  confirmLeave(msg) {
    const rv = this.rv;
    if (!rv.dirty || rv.armed) return true;
    rv.armed = true;
    toast(msg);
    setTimeout(() => { if (this.rv) this.rv.armed = false; }, 3000);
    return false;
  },

  closeReview(force) {
    if (!this.rv) return;
    if (!force && !this.confirmLeave('저장하지 않은 피드백이 있습니다. 한 번 더 누르면 버리고 닫습니다.')) return;
    if (this.rv.cleanup) this.rv.cleanup();
    $('rvView').innerHTML = '';
    $('review').classList.remove('on');
    $('review').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.rv = null;
    this.renderAll();
  },

  reviewGo(step, force) {
    const rv = this.rv;
    if (!rv) return;
    const n = rv.idx + step;
    if (n < 0 || n >= rv.queue.length) return;
    if (!force && !this.confirmLeave('저장하지 않은 피드백이 있습니다. 한 번 더 누르면 버리고 이동합니다.')) return;
    rv.idx = n;
    rv.armed = false;
    this.renderReview(true);
  },

  async renderReview(loadDoc) {
    const rv = this.rv;
    const it = this.rvItem();
    if (!it) { this.closeReview(true); return; }
    if (loadDoc) { rv.status = it.st.status; rv.fb = ''; rv.dirty = false; }
    $('rvName').textContent = `${it.s.sid ? it.s.sid + ' ' : ''}${it.s.name}`;
    $('rvMeta').textContent = ` ${it.g.full}${it.st.submitted_at ? ' · ' + fmtDT(it.st.submitted_at) + ' 제출' : ''}`;
    $('rvPos').textContent = rv.queue.length > 1 ? `${rv.idx + 1} / ${rv.queue.length}` : '';
    $('rvPrev').hidden = $('rvNext').hidden = rv.queue.length < 2;
    $('rvPrev').disabled = rv.idx === 0;
    $('rvNext').disabled = rv.idx >= rv.queue.length - 1;
    $('rvFile').textContent = '📄 ' + it.name;
    this.renderReviewSide();
    if (!loadDoc) return;
    if (rv.cleanup) rv.cleanup();
    rv.cleanup = null;
    const token = ++rv.token;
    const box = document.createElement('div');
    box.className = 'rv-box';
    $('rvView').replaceChildren(box);
    const cleanup = await renderDoc(box, it.path, it.name);
    if (!this.rv || this.rv.token !== token) { cleanup(); return; }
    rv.cleanup = cleanup;
    rv.zoom = 1;
    requestAnimationFrame(() => this.zoom(0));
  },

  zoom(step) {
    const rv = this.rv;
    if (!rv) return;
    const view = $('rvView');
    const pages = [...view.querySelectorAll('div[data-page-number]:not(.hwpjs-observer)')];
    if (!pages.length) return;
    if (step === 0) {
      pages.forEach(p => p.style.zoom = 1);
      const w = pages[0].offsetWidth;
      const avail = view.clientWidth - 40;
      rv.zoom = w ? Math.min(1.4, Math.max(0.4, avail / w)) : 1;
    } else {
      rv.zoom = Math.min(2, Math.max(0.4, rv.zoom + step * 0.15));
    }
    pages.forEach(p => p.style.zoom = rv.zoom);
  },

  renderReviewSide() {
    const rv = this.rv;
    const it = this.rvItem();
    const fbs = it.s.ev[it.stage].filter(e => e.kind === 'feedback');
    const hist = fbs.map(e => `<li class="k-feedback"><div class="hmeta"><span>${fmtDT(e.created_at)}</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${e.seen_at ? '<span class="seen">학생 읽음</span>' : '<span class="unseen">학생 안 읽음</span>'}</div><div class="note">${esc(e.note)}</div></li>`).join('');
    const last = rv.idx >= rv.queue.length - 1;
    $('rvSide').innerHTML = `
      <p class="rv-topic">${it.s.topic ? esc(it.s.topic) : '연구 주제 미정'}</p>
      ${it.s.memo ? `<p class="rv-memo">지도 메모: ${esc(it.s.memo)}</p>` : ''}
      <label class="l">상태</label>
      <div class="seg" role="radiogroup" aria-label="상태">
        ${['none', 'waiting', 'revise', 'done'].map(s => `<label class="${rv.status === s ? 'sel-' + s : ''}"><input type="radio" name="rv-st" value="${s}" ${rv.status === s ? 'checked' : ''}><span>${ST[s].label}</span></label>`).join('')}
      </div>
      <label class="l" for="rvFb">학생에게 보낼 피드백</label>
      <textarea class="in rv-fb" id="rvFb" placeholder="문서를 보면서 바로 적으세요. 저장하면 이 학생의 화면에만 나타납니다.">${esc(rv.fb)}</textarea>
      <div class="rv-actions">
        <span class="hint" id="rvState">${rv.dirty ? '저장하지 않은 변경 있음' : ''}</span>
        <button class="btn" id="rvSave">저장</button>
        <button class="btn primary" id="rvSaveGo">${last ? '저장하고 닫기' : '저장하고 다음'}</button>
      </div>
      ${hist ? `<h3 class="rv-h">이 단계에서 보낸 피드백</h3><ul class="hist">${hist}</ul>` : ''}`;
    const side = $('rvSide');
    side.querySelectorAll('input[name="rv-st"]').forEach(r => r.onchange = () => {
      rv.status = r.value;
      rv.dirty = true;
      this.renderReviewSide();
      const again = side.querySelector(`input[name="rv-st"][value="${r.value}"]`);
      if (again) again.focus();
    });
    const ta = $('rvFb');
    ta.oninput = () => { rv.fb = ta.value; rv.dirty = true; $('rvState').textContent = '저장하지 않은 변경 있음'; };
    $('rvSave').onclick = async () => { if (await this.saveReview()) this.renderReviewSide(); };
    $('rvSaveGo').onclick = async () => {
      if (!(await this.saveReview())) return;
      if (last) this.closeReview(true); else this.reviewGo(1, true);
    };
  },

  async saveReview() {
    const rv = this.rv;
    const it = this.rvItem();
    const note = rv.fb.trim();
    const statusChanged = rv.status !== it.st.status;
    if (!note && !statusChanged) return true;
    ['rvSave', 'rvSaveGo'].forEach(id => $(id).disabled = true);
    try {
      if (statusChanged) {
        const { error } = await sb.from('submissions').upsert({ student_id: it.s.id, stage: it.stage, status: rv.status, updated_at: new Date().toISOString() }, { onConflict: 'student_id,stage' });
        if (error) throw error;
      }
      const { error } = await sb.from('events').insert({ student_id: it.s.id, stage: it.stage, kind: note ? 'feedback' : 'status', status: rv.status, note });
      if (error) throw error;
      if (statusChanged && rv.status === 'done') this.justStamped = it.s.id + it.stage;
      await this.load();
      rv.dirty = false;
      rv.fb = '';
      rv.status = this.students.get(it.s.id)[it.stage].status;
      toast(note ? '저장했습니다. 학생 화면에 바로 나타납니다.' : '상태를 바꿨습니다.');
      return true;
    } catch (e) {
      toast(dbMsg(e));
      ['rvSave', 'rvSaveGo'].forEach(id => { if ($(id)) $(id).disabled = false; });
      return false;
    }
  },

  /* ----- 명단 붙여넣기 ----- */
  parseBulk(text) {
    const out = [];
    for (let line of text.split(/\r?\n/)) {
      line = line.trim();
      if (!line) continue;
      const cells = line.includes('\t') ? line.split('\t').map(s => s.trim()).filter(Boolean) : line.split(/\s+/);
      let sid = '', email = '';
      const rest = [];
      for (const c of cells) {
        if (!sid && !rest.length && /^\d{3,10}$/.test(c)) sid = c;
        else if (!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)) email = c.toLowerCase();
        else rest.push(c);
      }
      const name = rest.shift() || '';
      const topic = rest.join(' ').trim();
      if (sid || name) out.push({ sid, name, email, topic });
    }
    return out;
  },

  async applyBulk() {
    const rows = this.parseBulk($('bulkText').value);
    if (!rows.length) { toast('붙여넣은 명단이 없습니다.'); return; }
    const bySid = new Map([...this.students.values()].filter(s => s.sid).map(s => [s.sid, s]));
    const inserts = [], updates = [], problems = [];
    for (const r of rows) {
      const ex = r.sid && bySid.get(r.sid);
      if (ex) {
        const patch = {};
        if (r.email && r.email !== ex.email) patch.email = r.email;
        if (r.name && r.name !== ex.name) patch.name = r.name;
        if (r.topic && r.topic !== ex.topic) patch.topic = r.topic;
        if (Object.keys(patch).length) updates.push({ id: ex.id, patch, label: r.sid });
      } else if (r.name) {
        inserts.push({ sid: r.sid || null, name: r.name, email: r.email || null, topic: r.topic, cls: clsFromSid(r.sid) || null });
      } else problems.push(r.sid);
    }
    const btn = $('bulkGo');
    btn.disabled = true;
    let ok = 0;
    const now = new Date().toISOString();
    if (inserts.length) {
      const { error } = await sb.from('students').insert(inserts.map(x => ({ ...x, updated_at: now })));
      if (error) { toast('새 학생을 등록하지 못했습니다: ' + dbMsg(error)); btn.disabled = false; return; }
      ok += inserts.length;
    }
    for (const u of updates) {
      const { error } = await sb.from('students').update({ ...u.patch, updated_at: now }).eq('id', u.id);
      if (error) problems.push(u.label); else ok++;
      $('bulkMsg').textContent = `${ok}명 반영 중`;
    }
    btn.disabled = false;
    await this.load();
    this.renderAll();
    if (problems.length) {
      $('bulkMsg').textContent = `반영하지 못한 학번: ${problems.filter(Boolean).join(', ') || '이름 없는 줄'}`;
      toast(`${ok}명 반영, ${problems.length}줄은 확인이 필요합니다.`);
    } else {
      this.closeModal('mBulk');
      $('bulkText').value = '';
      $('bulkMsg').textContent = '';
      toast(`${ok}명 반영했습니다.`);
    }
  },

  /* ----- 설정, 모달, CSV ----- */
  openModal(id) { $(id).classList.add('on'); const f = $(id).querySelector('textarea,input'); if (f) setTimeout(() => f.focus(), 30); },
  closeModal(id) { $(id).classList.remove('on'); },
  openSettings() {
    $('sName').value = this.settings.program_name || '';
    $('sPlan').value = this.settings.plan_due || '';
    $('sReport').value = this.settings.report_due || '';
    $('sExtra').value = this.settings.extra_due || '';
    this.openModal('mSet');
  },
  async saveSettings() {
    const c = { program_name: $('sName').value.trim() || null, plan_due: $('sPlan').value || null, report_due: $('sReport').value || null, extra_due: $('sExtra').value || null };
    const { error } = await sb.from('settings').update(c).eq('id', 1);
    if (error) { toast(dbMsg(error)); return; }
    this.settings = { ...this.settings, ...c };
    this.closeModal('mSet');
    this.renderAll();
    toast('설정을 저장했습니다.');
  },
  exportCsv() {
    const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    const lastNote = arr => (arr.find(e => e.kind === 'feedback' && e.note) || {}).note || '';
    const head = ['학번', '이름', '반', '이메일', '연구 분야', '연구 주제', ...STAGES.flatMap(g => [g.full + ' 상태', g.full + ' 제출일', g.full + ' 최근 피드백']), '개인정보 동의일', '지도 메모'];
    const list = [...this.students.values()].sort((a, b) => (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }));
    const lines = [head.map(q).join(',')].concat(list.map(s => [
      s.sid, s.name, s.cls, s.email, s.field, s.topic,
      ...STAGES.flatMap(g => applies(s, g) ? [ST[s[g.key].status].label, dateOf(s[g.key].submitted_at), lastNote(s.ev[g.key])] : ['해당 없음', '', '']), hasConsent(s) ? dateOf(s.consent_at) : '', s.memo
    ].map(q).join(',')));
    const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `개인연구_제출현황_${todayStr()}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
};

/* =========================================================
   학생 화면
   ========================================================= */
const Student = {
  email: '', me: null, settings: {}, subs: {}, events: [], busy: false,

  async start(email, me) {
    this.email = email;
    this.me = me;
    try { await this.load(); }
    catch (e) { renderMessage(email, '정보를 불러오지 못했습니다.', esc(dbMsg(e))); return; }
    if (!hasConsent(this.me)) { this.renderConsent(); return; }
    this.render();
    this.markSeen();
  },

  /* 손글씨 서명란: 흰 종이 위 검은 펜 */
  signaturePad(canvas, onChange) {
    const ctx = canvas.getContext('2d');
    let drawing = false, last = null, ink = 0;
    const size = () => {
      const r = window.devicePixelRatio || 1;
      canvas.width = Math.round(canvas.clientWidth * r);
      canvas.height = Math.round(canvas.clientHeight * r);
      ctx.setTransform(r, 0, 0, r, 0, 0);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#111';
      ink = 0;
    };
    size();
    const pt = e => { const b = canvas.getBoundingClientRect(); return { x: e.clientX - b.left, y: e.clientY - b.top }; };
    canvas.addEventListener('pointerdown', e => { e.preventDefault(); canvas.setPointerCapture(e.pointerId); drawing = true; last = pt(e); ctx.beginPath(); ctx.arc(last.x, last.y, 1.1, 0, Math.PI * 2); ctx.fillStyle = '#111'; ctx.fill(); });
    canvas.addEventListener('pointermove', e => {
      if (!drawing) return;
      const p = pt(e);
      ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      ink += Math.hypot(p.x - last.x, p.y - last.y);
      last = p;
    });
    const end = () => { if (drawing) { drawing = false; onChange(); } };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    return {
      signed: () => ink > 40,
      clear: () => size(),
      toDataURL: () => {
        /* 저장 용량을 줄이려고 가로 600px 이하로 줄여서 저장 */
        const w = Math.min(600, canvas.clientWidth), h = Math.round(w * canvas.clientHeight / canvas.clientWidth);
        const out = document.createElement('canvas'); out.width = w; out.height = h;
        out.getContext('2d').drawImage(canvas, 0, 0, w, h);
        return out.toDataURL('image/png');
      }
    };
  },

  renderConsent() {
    const me = this.me;
    const prog = esc(this.settings.program_name || '개인연구 프로그램');
    app.innerHTML = `${topBar(this.email)}
      <div class="consent">
        <h1>개인정보 수집·이용 동의</h1>
        <p class="sub">${esc(me.name)} 학생, ${prog} 제출 사이트를 처음 사용하기 전에 아래 내용을 읽고 동의해 주세요.</p>
        <div class="consent-box">
          <table class="ctable">
            <tr><th scope="row">수집 목적</th><td>개인연구 계획서·최종보고서 제출 확인, 담당 교사의 피드백 전달, 제출 현황 관리</td></tr>
            <tr><th scope="row">수집 항목 (필수)</th><td>학번, 이름, 반, 학교 구글 계정 이메일, 연구 주제, 제출한 파일과 제출 일시, 피드백 기록과 확인 일시</td></tr>
            <tr><th scope="row">보유 기간</th><td>해당 학년도 프로그램이 끝날 때까지 보관하고, 학년도 종료 후 담당 교사가 삭제합니다. 요청하면 그 전에도 삭제합니다.</td></tr>
            <tr><th scope="row">열람 범위</th><td>학생 본인은 자기 자료만, 전체 자료는 담당 교사만 볼 수 있습니다. 다른 학생에게 공개되지 않습니다.</td></tr>
            <tr><th scope="row">처리 위탁</th><td>Supabase(자료 보관, 대한민국 서울 데이터센터), Google(로그인 인증). 그 밖의 제3자에게 제공하지 않습니다.</td></tr>
            <tr><th scope="row">동의 거부 권리</th><td>동의하지 않을 수 있습니다. 동의하지 않아도 불이익은 없으며, 이 경우 담당 교사와 상의해 다른 방법(이메일, 출력물 등)으로 제출할 수 있습니다.</td></tr>
          </table>
          <p class="hint">자세한 내용은 <a href="privacy.html" target="_blank" rel="noopener">개인정보처리방침</a>에서 볼 수 있습니다. 동의를 철회하거나 삭제를 원하면 담당 교사에게 말씀해 주세요.</p>
        </div>
        <label class="agree"><input type="checkbox" id="cAgree"> <span>위 내용을 읽었으며, 개인정보 수집·이용에 동의합니다. (필수)</span></label>
        <div class="sign">
          <div class="sign-h"><span>서명 (필수)</span><span class="hint">${esc(me.name)} 학생 본인이 마우스나 손가락으로 서명해 주세요.</span><button class="linkbtn" id="sClear" type="button">지우기</button></div>
          <canvas class="sign-pad" id="sPad" role="img" aria-label="서명란"></canvas>
          <div class="sign-foot"><span>${todayStr().replace(/-/g, '. ')}.</span><span>성명 ${esc(me.name)} (서명)</span></div>
        </div>
        <div class="consent-actions">
          <button class="btn" id="cNo">동의하지 않음</button>
          <button class="btn primary" id="cYes" disabled>동의하고 시작하기</button>
        </div>
      </div>`;
    bindLogout();
    const pad = this.signaturePad($('sPad'), () => update());
    const update = () => { $('cYes').disabled = !($('cAgree').checked && pad.signed()); };
    $('cAgree').onchange = update;
    $('sClear').onclick = () => { pad.clear(); update(); };
    $('cNo').onclick = () => {
      app.querySelector('.consent').innerHTML = `<h1>동의하지 않았습니다</h1>
        <p class="sub">동의하지 않으면 이 사이트를 사용할 수 없지만, 불이익은 없습니다. 담당 선생님께 말씀드리고 다른 방법으로 제출하세요.</p>
        <p class="sub">마음이 바뀌면 이 페이지를 새로고침해서 다시 동의할 수 있습니다.</p>
        <button class="btn" id="cBack">동의서 다시 보기</button>`;
      $('cBack').onclick = () => this.renderConsent();
    };
    $('cYes').onclick = async () => {
      $('cYes').disabled = true;
      $('cYes').textContent = '저장 중입니다';
      const { error } = await sb.rpc('give_consent', { p_version: CONSENT_VERSION, p_signature: pad.toDataURL() });
      if (error) { toast('동의를 저장하지 못했습니다. 다시 눌러 주세요.'); $('cYes').disabled = false; $('cYes').textContent = '동의하고 시작하기'; return; }
      try { await this.load(); } catch (e) { /* 아래에서 화면만 다시 그림 */ }
      this.me.consent_at = this.me.consent_at || new Date().toISOString();
      this.me.consent_version = CONSENT_VERSION;
      this.render();
      this.markSeen();
      toast('동의했습니다. 이제 제출할 수 있습니다.');
    };
  },

  async load() {
    const res = await Promise.all([
      sb.from('students').select('*').eq('id', this.me.id).maybeSingle(),
      sb.from('submissions').select('*').eq('student_id', this.me.id),
      sb.from('events').select('*').eq('student_id', this.me.id).order('created_at', { ascending: false }),
      sb.from('settings').select('*').eq('id', 1).maybeSingle()
    ]);
    const bad = res.find(r => r.error);
    if (bad) throw bad.error;
    const [me, subs, events, set] = res.map(r => r.data);
    if (me) this.me = me;
    this.subs = {};
    for (const s of subs) this.subs[s.stage] = s;
    this.events = events;
    this.settings = set || {};
    this.unseen = new Set(events.filter(e => e.kind === 'feedback' && !e.seen_at).map(e => e.id));
  },

  markSeen() {
    if (!this.unseen || !this.unseen.size) return;
    sb.rpc('mark_feedback_seen').then(({ error }) => { if (error) console.warn(error); });
  },

  card(g) {
    const sub = this.subs[g.key] || { status: 'none' };
    const k = sub.status || 'none';
    const due = this.settings[g.due];
    const evs = this.events.filter(e => e.stage === g.key);
    const canSubmit = k !== 'done';
    const guide = {
      none: '아직 제출하지 않았습니다.',
      waiting: '제출했습니다. 선생님이 확인하고 있어요.',
      revise: '보완할 점이 있습니다. 아래 피드백을 보고 수정해서 다시 제출하세요.',
      done: '선생님이 확인을 마쳤습니다.'
    }[k];
    const timeline = evs.map(e => {
      if (e.kind === 'submit') return `<li class="k-submit"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>내가 제출</span></div>
        <div class="note">${e.file_path ? `<button class="linkbtn" data-open="${esc(e.file_path)}">${esc(e.file_name || '제출 파일')}</button>` : esc(e.file_name || '')}</div></li>`;
      if (e.kind === 'feedback') return `<li class="k-feedback"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>선생님 피드백</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}${this.unseen.has(e.id) ? '<span class="newb">새 피드백</span>' : ''}</div>
        <div class="fbnote">${esc(e.note)}</div></li>`;
      return `<li class="k-status"><div class="hmeta"><span>${fmtDT(e.created_at)}</span><span>상태가 바뀌었습니다</span>${e.status ? `<span class="pill ${e.status}">${ST[e.status].label}</span>` : ''}</div></li>`;
    }).join('');
    return `<section class="card" data-stage="${g.key}">
      <div class="card-h"><h2>${g.group === 'report' ? g.full.replace('최종보고서 ', '') : g.full}</h2>${k === 'done' ? '<span class="stamp lg" aria-hidden="true">확인</span>' : ''}</div>
      <p class="due">${g.desc && g.group === 'report' ? `<b>${g.desc}</b><br>` : ''}${due ? `마감 ${fmtDate(due)}${ddayTag(due)}` : '마감일 미정'}</p>
      <div class="status-line"><span class="pill ${k}">${ST[k].label}</span>${sub.submitted_at ? `<span class="hint">${fmtDT(sub.submitted_at)} 제출</span>` : ''}</div>
      <p class="hint" style="margin-bottom:12px">${guide}</p>
      ${sub.file_path ? `<div class="filebox"><span class="fn">📄 ${esc(sub.file_name || '제출 파일')}</span><button class="btn sm" data-open="${esc(sub.file_path)}">열기</button></div>` : ''}
      ${canSubmit ? `<div class="upload" data-drop="${g.key}">
          <button class="btn primary" data-pick="${g.key}">${sub.file_path ? '수정본 제출하기' : '파일 선택해서 제출하기'}</button>
          <input type="file" accept="${ACCEPT}" data-file="${g.key}">
          <p>한글(.hwp) 또는 PDF로 내면 선생님이 화면에서 바로 읽고 피드백을 줄 수 있어요. 최대 ${MAX_MB}MB, 파일을 여기로 끌어다 놓아도 됩니다.</p>
        </div>` : ''}
      ${timeline ? `<ul class="hist">${timeline}</ul>` : ''}
    </section>`;
  },

  render() {
    const me = this.me;
    app.innerHTML = `${topBar(this.email)}
      <header class="top"><div>
        <h1>${esc(me.name)}</h1>
        <p class="sub">${esc(me.sid || '')}${me.cls ? ` · ${esc(me.cls)}반` : ''} · ${esc(this.settings.program_name || '개인연구')}</p>
        <p class="me-topic">${me.topic ? '연구 주제: ' + esc(me.topic) : '연구 주제가 아직 등록되지 않았습니다.'}</p>
      </div></header>
      <div class="cards one">${this.card(STAGES[0])}</div>
      <h2 class="group-title">최종보고서 <span>세 부분을 각각 한글 파일로 올리세요${this.settings.report_due ? ` · 마감 ${fmtDate(this.settings.report_due)}` : ''}</span></h2>
      <div class="cards three">${PARTS.map(g => this.card(g)).join('')}</div>
      ${me.extra_required ? `<h2 class="group-title">개인연구보고서 <span>실험 대상 학생은 개인연구보고서도 한글 파일로 제출하세요</span></h2>
      <div class="cards one">${this.card(EXTRA)}</div>` : ''}`;
    bindLogout();
    app.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openFile(b.dataset.open));
    app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => app.querySelector(`[data-file="${b.dataset.pick}"]`).click());
    app.querySelectorAll('[data-file]').forEach(inp => inp.onchange = () => { if (inp.files[0]) this.upload(inp.dataset.file, inp.files[0]); });
    app.querySelectorAll('[data-drop]').forEach(z => {
      z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('drag'); });
      z.addEventListener('dragleave', () => z.classList.remove('drag'));
      z.addEventListener('drop', e => { e.preventDefault(); z.classList.remove('drag'); const f = e.dataTransfer.files[0]; if (f) this.upload(z.dataset.drop, f); });
    });
  },

  async upload(stage, file) {
    if (this.busy) return;
    if (file.size > MAX_MB * 1024 * 1024) { toast(`파일이 ${MAX_MB}MB보다 큽니다. 용량을 줄여서 다시 올려 주세요.`); return; }
    const ext = (file.name.includes('.') ? file.name.split('.').pop() : 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'bin';
    const allowed = ACCEPT.split(',').map(x => x.slice(1));
    if (!allowed.includes(ext)) { toast('올릴 수 없는 파일 형식입니다. 한글, PDF, 워드, 파워포인트로 올려 주세요.'); return; }
    this.busy = true;
    const btn = app.querySelector(`[data-pick="${stage}"]`);
    if (btn) { btn.disabled = true; btn.textContent = '올리는 중입니다'; }
    const path = `${this.me.id}/${stage}/${Date.now()}.${ext}`;
    try {
      const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type || 'application/octet-stream' });
      if (upErr) throw upErr;
      const { error } = await sb.rpc('submit_work', { p_stage: stage, p_file_path: path, p_file_name: file.name });
      if (error) throw error;
      await this.load();
      this.render();
      this.markSeen();
      toast(['hwp', 'pdf'].includes(ext) ? '제출했습니다. 선생님 피드백은 이 화면에 표시됩니다.' : '제출했습니다. 다만 이 형식은 선생님 화면에서 바로 열리지 않을 수 있어요. 가능하면 .hwp나 PDF로 다시 내 주세요.');
    } catch (e) {
      toast(e.message || '제출하지 못했습니다. 잠시 후 다시 시도하세요.');
      if (btn) { btn.disabled = false; btn.textContent = '파일 선택해서 제출하기'; }
    } finally {
      this.busy = false;
    }
  }
};
