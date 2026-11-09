import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm';
/* ===== HWPX 미리보기 (내장) 시작 ===== */
/*! HWPX viewer v4 for 개인연구 사이트 | fflate (c) Arjun Barrett, MIT */
var HWPXjs=(()=>{var it=Object.defineProperty;var Mt=Object.getOwnPropertyDescriptor;var St=Object.getOwnPropertyNames;var Tt=Object.prototype.hasOwnProperty;var It=(t,e)=>{for(var r in e)it(t,r,{get:e[r],enumerable:!0})},Et=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of St(e))!Tt.call(t,o)&&o!==r&&it(t,o,{get:()=>e[o],enumerable:!(n=Mt(e,o))||n.enumerable});return t};var Ut=t=>Et(it({},"__esModule",{value:!0}),t);var Vt={};It(Vt,{extractText:()=>Yt,render:()=>Xt});var R=Uint8Array,X=Uint16Array,Dt=Int32Array,yt=new R([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xt=new R([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ft=new R([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wt=function(t,e){for(var r=new X(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Dt(r[30]),n=1;n<30;++n)for(var p=r[n];p<r[n+1];++p)o[p]=p-r[n]<<5|n;return{b:r,r:o}},dt=wt(yt,2),zt=dt.b,Nt=dt.r;zt[28]=258,Nt[258]=28;var bt=wt(xt,0),Bt=bt.b,Kt=bt.r,lt=new X(32768);for(g=0;g<32768;++g)$=(g&43690)>>1|(g&21845)<<1,$=($&52428)>>2|($&13107)<<2,$=($&61680)>>4|($&3855)<<4,lt[g]=(($&65280)>>8|($&255)<<8)>>1;var $,g,Q=function(t,e,r){for(var n=t.length,o=0,p=new X(e);o<n;++o)t[o]&&++p[t[o]-1];var C=new X(e);for(o=1;o<e;++o)C[o]=C[o-1]+p[o-1]<<1;var w;if(r){w=new X(1<<e);var M=15-e;for(o=0;o<n;++o)if(t[o])for(var F=o<<4|t[o],h=e-t[o],i=C[t[o]-1]++<<h,u=i|(1<<h)-1;i<=u;++i)w[lt[i]>>M]=F}else for(w=new X(n),o=0;o<n;++o)t[o]&&(w[o]=lt[C[t[o]-1]++]>>15-t[o]);return w},_=new R(288);for(g=0;g<144;++g)_[g]=8;var g;for(g=144;g<256;++g)_[g]=9;var g;for(g=256;g<280;++g)_[g]=7;var g;for(g=280;g<288;++g)_[g]=8;var g,At=new R(32);for(g=0;g<32;++g)At[g]=5;var g;var Pt=Q(_,9,1);var Lt=Q(At,5,1),at=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Z=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},ot=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Ot=function(t){return(t+7)/8|0},ht=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new R(t.subarray(e,r))};var Rt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=function(t,e,r){var n=new Error(e||Rt[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,k),!r)throw n;return n},kt=function(t,e,r,n){var o=t.length,p=n?n.length:0;if(!o||e.f&&!e.l)return r||new R(0);var C=!r,w=C||e.i!=2,M=e.i;C&&(r=new R(o*3));var F=function(pt){var gt=r.length;if(pt>gt){var mt=new R(Math.max(gt*2,pt));mt.set(r),r=mt}},h=e.f||0,i=e.p||0,u=e.b||0,b=e.l,T=e.d,L=e.m,d=e.n,q=o*8;do{if(!b){h=Z(t,i,1);var Y=Z(t,i+1,3);if(i+=3,Y)if(Y==1)b=Pt,T=Lt,L=9,d=5;else if(Y==2){var J=Z(t,i,31)+257,K=Z(t,i+10,15)+4,W=J+Z(t,i+5,31)+1;i+=14;for(var s=new R(W),l=new R(19),a=0;a<K;++a)l[Ft[a]]=Z(t,i+a*3,7);i+=K*3;for(var O=at(l),A=(1<<O)-1,S=Q(l,O,1),a=0;a<W;){var c=S[Z(t,i,A)];i+=c&15;var B=c>>4;if(B<16)s[a++]=B;else{var E=0,y=0;for(B==16?(y=3+Z(t,i,3),i+=2,E=s[a-1]):B==17?(y=3+Z(t,i,7),i+=3):B==18&&(y=11+Z(t,i,127),i+=7);y--;)s[a++]=E}}var m=s.subarray(0,J),f=s.subarray(J);L=at(m),d=at(f),b=Q(m,L,1),T=Q(f,d,1)}else k(1);else{var B=Ot(i)+4,V=t[B-4]|t[B-3]<<8,H=B+V;if(H>o){M&&k(0);break}w&&F(u+V),r.set(t.subarray(B,H),u),e.b=u+=V,e.p=i=H*8,e.f=h;continue}if(i>q){M&&k(0);break}}w&&F(u+131072);for(var v=(1<<L)-1,x=(1<<d)-1,U=i;;U=i){var E=b[ot(t,i)&v],D=E>>4;if(i+=E&15,i>q){M&&k(0);break}if(E||k(2),D<256)r[u++]=D;else if(D==256){U=i,b=null;break}else{var I=D-254;if(D>264){var a=D-257,N=yt[a];I=Z(t,i,(1<<N)-1)+zt[a],i+=N}var rt=T[ot(t,i)&x],nt=rt>>4;rt||k(3),i+=rt&15;var f=Bt[nt];if(nt>3){var N=xt[nt];f+=ot(t,i)&(1<<N)-1,i+=N}if(i>q){M&&k(0);break}w&&F(u+131072);var ct=u+I;if(u<f){var vt=p-f,Ct=Math.min(f,ct);for(vt+u<0&&k(3);u<Ct;++u)r[u]=n[vt+u]}for(;u<ct;++u)r[u]=r[u-f]}}e.l=b,e.p=U,e.b=u,e.f=h,b&&(h=1,e.m=L,e.d=T,e.n=d)}while(!h);return u!=r.length&&C?ht(r,0,u):r.subarray(0,u)};var Zt=new R(0);var G=function(t,e){return t[e]|t[e+1]<<8},j=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},st=function(t,e){return j(t,e)+j(t,e+4)*4294967296};function jt(t,e){return kt(t,{i:2},e&&e.out,e&&e.dictionary)}var ft=typeof TextDecoder<"u"&&new TextDecoder,qt=0;try{ft.decode(Zt,{stream:!0}),qt=1}catch{}var Gt=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:ht(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};function et(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(ft)return ft.decode(t);var o=Gt(t),p=o.s,r=o.r;return r.length&&k(8),p}}var $t=function(t,e){return e+30+G(t,e+26)+G(t,e+28)},Ht=function(t,e,r){var n=G(t,e+28),o=et(t.subarray(e+46,e+46+n),!(G(t,e+8)&2048)),p=e+46+n,C=j(t,e+20),w=r&&C==4294967295?Wt(t,p):[C,j(t,e+24),j(t,e+42)],M=w[0],F=w[1],h=w[2];return[G(t,e+10),M,F,o,p+G(t,e+30)+G(t,e+32),h]},Wt=function(t,e){for(;G(t,e)!=1;e+=4+G(t,e+2));return[st(t,e+12),st(t,e+4),st(t,e+20)]};function ut(t,e){for(var r={},n=t.length-22;j(t,n)!=101010256;--n)(!n||t.length-n>65558)&&k(13);var o=G(t,n+8);if(!o)return{};var p=j(t,n+16),C=p==4294967295||o==65535;if(C){var w=j(t,n-12);C=j(t,w)==101075792,C&&(o=j(t,w+32),p=j(t,w+48))}for(var M=e&&e.filter,F=0;F<o;++F){var h=Ht(t,p,C),i=h[0],u=h[1],b=h[2],T=h[3],L=h[4],d=h[5],q=$t(t,d);p=L,(!M||M({name:T,size:u,originalSize:b,compression:i}))&&(i?i==8?r[T]=jt(t.subarray(q,q+u),{out:new R(b)}):k(14,"unknown compression type "+i):r[T]=ht(t,q,q+u))}return r}var z=(t,e)=>Array.from(t?t.children:[]).filter(r=>!e||r.localName===e),tt=(t,e)=>Array.from(t.getElementsByTagNameNS("*",e)),P=(t,e)=>tt(t,e)[0]||null;function Xt(t,e,r={}){let n=ut(e instanceof Uint8Array?e:new Uint8Array(e)),o=s=>n[s]?et(n[s]):null,p=s=>new DOMParser().parseFromString(s,"application/xml"),C=[],w={},M=[],F=o("Contents/content.hpf");if(F){let s=p(F);tt(s,"item").forEach(l=>{w[l.getAttribute("id")]={href:l.getAttribute("href")||"",type:l.getAttribute("media-type")||""}}),M=tt(s,"itemref").map(l=>(w[l.getAttribute("idref")]||{}).href).filter(l=>l&&/section\d*\.xml$/i.test(l))}if(M.length||(M=Object.keys(n).filter(s=>/^Contents\/section\d+\.xml$/i.test(s)).sort((s,l)=>parseInt(s.match(/\d+/))-parseInt(l.match(/\d+/)))),M=M.map(s=>n[s]?s:n["Contents/"+s]?"Contents/"+s:s),!M.some(s=>n[s]))throw new Error("HWPX 본문을 찾지 못했습니다.");let h={},i={},u=o("Contents/header.xml");if(u){let s=p(u);tt(s,"charPr").forEach(l=>{let a=P(l,"underline");h[l.getAttribute("id")]={size:parseInt(l.getAttribute("height")||"1000",10)/100,color:l.getAttribute("textColor"),bold:!!P(l,"bold"),italic:!!P(l,"italic"),underline:!!(a&&a.getAttribute("type")&&a.getAttribute("type")!=="NONE")}}),tt(s,"paraPr").forEach(l=>{let a=P(l,"align");i[l.getAttribute("id")]={align:a?(a.getAttribute("horizontal")||"").toUpperCase():""}})}let b=s=>{let l=w[s],a=l&&(n[l.href]?l.href:n["Contents/"+l.href]?"Contents/"+l.href:null);if(a||(a=Object.keys(n).find(c=>c.startsWith("BinData/")&&c.split("/").pop().split(".")[0]===s)),!a)return null;let O=a.split(".").pop().toLowerCase(),A=l&&l.type||{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp"}[O]||"application/octet-stream";if(!/^image\//.test(A))return null;let S=URL.createObjectURL(new Blob([n[a]],{type:A}));return C.push(S),S},T=96/7200,L=t.ownerDocument,d=(s,l)=>{let a=L.createElement(s);return l&&(a.className=l),a},q=(s,l)=>{let a=h[l];a&&(a.size&&Math.abs(a.size-10)>.01&&(s.style.fontSize=(a.size*4/3).toFixed(1)+"px"),a.bold&&(s.style.fontWeight="700"),a.italic&&(s.style.fontStyle="italic"),a.underline&&(s.style.textDecoration="underline"),a.color&&/^#[0-9a-f]{6}$/i.test(a.color)&&a.color.toLowerCase()!=="#000000"&&(s.style.color=a.color))},Y=(s,l)=>{s.childNodes.forEach(a=>{a.nodeType===3?l.appendChild(L.createTextNode(a.nodeValue)):a.nodeType===1&&(a.localName==="lineBreak"?l.appendChild(d("br")):a.localName==="tab"?l.appendChild(L.createTextNode(" ")):a.localName==="nbSpace"||a.localName==="fwSpace"?l.appendChild(L.createTextNode(" ")):a.textContent&&l.appendChild(L.createTextNode(a.textContent)))})},B=(s,l)=>{z(s,"p").forEach(a=>V(a,l))},V=(s,l)=>{let a=i[s.getAttribute("paraPrIDRef")]||{},O={CENTER:"center",RIGHT:"right",JUSTIFY:"justify",DISTRIBUTE:"justify"}[a.align]||"",A=null,S=()=>(A||(A=d("p","hx-p"),O&&(A.style.textAlign=O),l.appendChild(A)),A);if(z(s,"run").forEach(c=>{let E=c.getAttribute("charPrIDRef");z(c).forEach(y=>{let m=y.localName;if(m==="t"){let f=d("span");q(f,E),Y(y,f),S().appendChild(f)}else if(m==="tbl")A=null,l.appendChild(J(y));else if(m==="pic"){let f=P(y,"img"),v=f&&b(f.getAttribute("binaryItemIDRef"));if(v){let x=d("img","hx-img");x.src=v,x.alt="";let U=P(y,"curSz")||P(y,"sz"),D=U&&parseInt(U.getAttribute("width"),10);D&&(x.style.width=Math.round(D*T)+"px"),S().appendChild(x)}}else if(m==="equation"){let f=P(y,"script"),v=d("span","hx-eq");v.textContent=f?f.textContent:"[수식]",S().appendChild(v)}else if(["rect","ellipse","polygon","container","textart"].includes(m)){let f=P(y,"drawText")||y,v=P(f,"subList");if(v){A=null;let x=d("div","hx-box");B(v,x),l.appendChild(x)}}})}),!A&&!z(s,"run").some(c=>z(c).some(E=>["tbl","rect","ellipse","polygon","container","textart"].includes(E.localName)))){let c=d("p","hx-p");c.innerHTML="&nbsp;",l.appendChild(c)}},H=642,J=s=>{let l=d("div","hx-tblwrap"),a=d("table","hx-tbl"),O=z(s,"sz")[0],A=O?parseInt(O.getAttribute("width"),10)*T:0,S=[];z(s,"tr").forEach(m=>z(m,"tc").forEach(f=>{let v=z(f,"cellAddr")[0],x=z(f,"cellSpan")[0],U=z(f,"cellSz")[0];S.push({col:v?parseInt(v.getAttribute("colAddr")||"0",10):-1,span:x?Math.max(1,parseInt(x.getAttribute("colSpan")||"1",10)):1,w:U?parseInt(U.getAttribute("width")||"0",10):0})}));let c=null;if(S.length&&S.every(m=>m.col>=0)){let m=Math.max(...S.map(f=>f.col+f.span));c=new Array(m).fill(0),S.filter(f=>f.span===1&&f.w).forEach(f=>{c[f.col]=Math.max(c[f.col],f.w)});for(let f=0;f<3;f++)S.filter(v=>v.span>1&&v.w).forEach(v=>{let x=Array.from({length:v.span},(I,N)=>v.col+N),U=x.filter(I=>c[I]).reduce((I,N)=>I+c[N],0),D=x.filter(I=>!c[I]);D.length&&v.w>U&&D.forEach(I=>{c[I]=(v.w-U)/D.length})});if(c.some(f=>!f)){let f=c.reduce((v,x)=>v+x,0)/Math.max(1,c.filter(Boolean).length)||1;c=c.map(v=>v||f)}}let E=c?c.reduce((m,f)=>m+f,0):0,y=Math.min(A||E*T||H,H);if(a.style.width=Math.round(y)+"px",c&&E){a.style.tableLayout="fixed";let m=d("colgroup");c.forEach(f=>{let v=d("col");v.style.width=(f/E*100).toFixed(3)+"%",m.appendChild(v)}),a.appendChild(m)}return z(s,"tr").forEach(m=>{let f=d("tr");z(m,"tc").forEach(v=>{let x=d("td"),U=z(v,"cellSpan")[0];if(U){let I=parseInt(U.getAttribute("colSpan")||"1",10),N=parseInt(U.getAttribute("rowSpan")||"1",10);I>1&&(x.colSpan=I),N>1&&(x.rowSpan=N)}if(!c){let I=z(v,"cellSz")[0],N=I&&parseInt(I.getAttribute("width"),10);N&&A&&(x.style.width=Math.min(100,N*T/A*100).toFixed(2)+"%")}let D=z(v,"subList")[0];D&&B(D,x),f.appendChild(x)}),a.appendChild(f)}),l.appendChild(a),l},K=d("style");K.textContent=`
    .hx-scroll{height:100%;overflow:auto;background:#e8eaed;padding:20px 12px;box-sizing:border-box}
    .hx-page{overflow-x:auto;background:#fff;color:#111;width:794px;max-width:none;margin:0 auto 20px;padding:72px 76px;box-sizing:border-box;box-shadow:0 1px 4px rgba(0,0,0,.18);font-family:"함초롬바탕","HCR Batang","Batang","바탕","Malgun Gothic","IBM Plex Sans KR",serif;font-size:13.3px;line-height:1.6;word-break:keep-all;overflow-wrap:anywhere}
    .hx-p{margin:0;min-height:1.2em;white-space:pre-wrap}
    .hx-tblwrap{margin:6px 0;max-width:100%}
    .hx-tbl{border-collapse:collapse;margin:0 auto;max-width:100%}
    .hx-tbl td{border:1px solid #555;padding:3px 6px;vertical-align:middle;box-sizing:border-box;word-break:keep-all;overflow-wrap:anywhere}
    .hx-tbl td .hx-p{white-space:pre-wrap}
    .hx-tbl td .hx-img{max-width:100%}
    .hx-img{max-width:100%;height:auto;vertical-align:middle}
    .hx-box{border:1px dashed #bbb;padding:6px 10px;margin:6px 0}
    .hx-eq{font-family:serif;font-style:italic;background:#f3f3f3;padding:0 4px;border-radius:3px}
    .hx-note{font:13px system-ui,sans-serif;color:#555;text-align:center;margin:0 0 12px}`;let W=d("div","hx-scroll");if(W.appendChild(K),r.note!==!1){let s=d("p","hx-note");s.textContent="HWPX 미리보기 v4 · 글, 표, 그림 위주로 보여 줍니다. 쪽 나눔과 세부 서식은 원본과 다를 수 있어요.",W.appendChild(s)}return M.filter(s=>n[s]).forEach((s,l)=>{let O=p(o(s)).documentElement,A=d("div","hx-page");A.setAttribute("data-page-number",String(l+1));let S=P(O,"pagePr");if(S){let c=parseInt(S.getAttribute("width")||"0",10),E=parseInt(S.getAttribute("height")||"0",10);(S.getAttribute("landscape")||"").toUpperCase()==="NARROWLY"&&c<E&&([c,E]=[E,c]);let y=P(S,"margin"),m=I=>Math.round(parseInt(I||"0",10)*T),f=m(c)||794,v=y?m(y.getAttribute("left")):76,x=y?m(y.getAttribute("right")):76,U=y?m(y.getAttribute("top"))+m(y.getAttribute("header")):72,D=y?m(y.getAttribute("bottom"))+m(y.getAttribute("footer")):72;A.style.width=f+"px",A.style.padding=`${Math.max(24,Math.min(U,160))}px ${x}px ${Math.max(24,Math.min(D,160))}px ${v}px`,H=Math.max(200,f-v-x)}else H=642;B(O,A),W.appendChild(A)}),t.innerHTML="",t.appendChild(W),()=>C.forEach(s=>URL.revokeObjectURL(s))}function Yt(t){let e=ut(t instanceof Uint8Array?t:new Uint8Array(t)),r=h=>e[h]?et(e[h]):null,n=h=>new DOMParser().parseFromString(h,"application/xml"),o=Object.keys(e).filter(h=>/^Contents\/section\d+\.xml$/i.test(h)).sort((h,i)=>parseInt(h.match(/\d+/))-parseInt(i.match(/\d+/))),p=[],C=h=>Array.from(h.childNodes).map(i=>i.nodeType===3?i.nodeValue:i.localName==="lineBreak"?`
`:i.localName==="tab"?" ":i.textContent||"").join(""),w=h=>{let i="";z(h,"run").forEach(u=>z(u).forEach(b=>{if(b.localName==="t")i+=C(b);else if(b.localName==="tbl")i.trim()&&p.push(i.trim()),i="",F(b);else if(b.localName==="pic")i+=" [그림] ";else if(b.localName==="equation"){let T=P(b,"script");i+=T?` [수식: ${T.textContent}] `:" [수식] "}else if(["rect","ellipse","polygon","container","textart"].includes(b.localName)){let T=P(b,"subList");T&&(i.trim()&&p.push(i.trim()),i="",z(T,"p").forEach(w))}})),i.trim()&&p.push(i.trim())},M=h=>{let i=p.length,u=z(h,"subList")[0];return u&&z(u,"p").forEach(w),p.splice(i).join(" ").replace(/\s+/g," ").trim()},F=h=>{p.push("[표]"),z(h,"tr").forEach(i=>{let u=z(i,"tc").map(M).filter(Boolean);u.length&&p.push("| "+u.join(" | ")+" |")}),p.push("[/표]")};return o.forEach(h=>{let i=n(r(h)).documentElement;z(i,"p").forEach(w)}),p.join(`
`)}return Ut(Vt);})();
window.HWPXjs = HWPXjs;
/* ===== HWPX 미리보기 (내장) 끝 ===== */

/* =========================================================
   공통
   ========================================================= */
const CFG = window.APP_CONFIG || {};
const app = document.getElementById('app');
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clone = o => JSON.parse(JSON.stringify(o));

/* 사이트 파일을 바꿀 때마다 올리면 브라우저가 예전 파일 대신 새 파일을 받습니다 */
const APP_VERSION = '2026-11-09c';
const BUCKET = 'submissions';
const MAX_MB = 25;
const ACCEPT = '.pdf,.hwp,.hwpx,.doc,.docx,.ppt,.pptx,.xlsx,.zip,.png,.jpg,.jpeg';
const ACCEPT_OUTPUT = ACCEPT + ',.gif,.webp,.mp4,.mov,.m4a,.mp3,.txt,.csv';
const acceptFor = g => g.key === 'output' ? ACCEPT_OUTPUT : ACCEPT;
const STAGES = [
  { key: 'plan', label: '계획서', full: '연구계획서', due: 'plan_due', group: 'plan' },
  { key: 'intro', label: '서론', full: '최종보고서 1. 서론', desc: '연구 주제 선정 이유, 연구 주제와 관련된 연구 동향 분석', due: 'intro_due', group: 'report' },
  { key: 'body', label: '본론', full: '최종보고서 2. 본론', desc: '연구 내용 설명', due: 'body_due', group: 'report' },
  { key: 'conclusion', label: '결론', full: '최종보고서 3. 결론', desc: '보고서 결론', due: 'conclusion_due', group: 'report' },
  { key: 'extra', label: '개인연구', full: '개인연구보고서', desc: '실험 대상 학생 추가 제출', due: 'extra_due', group: 'extra' },
  { key: 'output', label: '산출물', full: '산출물', desc: '연구 과정에서 만든 결과물 (사진, 발표자료, 모형·작품 사진, 영상 등)', due: 'output_due', group: 'output' }
];
const OUTPUT = STAGES.find(g => g.key === 'output');
const PLAN = STAGES.find(g => g.key === 'plan');
/* 양식을 보여 줄 위치 */
const TPL_PLACES = [
  ['all', '모든 학생 공통 (학생 화면 맨 위)'], ['plan', '연구계획서'], ['report', '최종보고서'],
  ['extra', '개인연구보고서 (대상 학생만)'], ['output', '산출물']
];
const tplPlace = k => (TPL_PLACES.find(x => x[0] === k) || [k, ({ intro: '서론', body: '본론', conclusion: '결론' })[k] + ' (이전 위치, 학생에게 안 보임)'])[1];
async function downloadTemplate(t) {
  try { saveBlob(await downloadBlob(t.file_path), t.file_name); }
  catch (e) { toast(e && e.demo ? e.message : '양식을 내려받지 못했습니다.'); }
}
/* 개인연구보고서는 '제출 대상'으로 표시된 학생에게만 해당 */
const applies = (s, g) => g.group !== 'extra' || !!(s && s.extra_required);
const stagesFor = s => STAGES.filter(g => applies(s, g));
const EXTRA = STAGES.find(g => g.key === 'extra');
const PARTS = STAGES.filter(g => g.group === 'report');
const stageMap = () => Object.fromEntries(STAGES.map(g => [g.key, '']));
const evMap = () => Object.fromEntries(STAGES.map(g => [g.key, []]));
const DUES = [{ key: 'plan_due', label: '계획서' }, { key: 'intro_due', label: '서론' }, { key: 'body_due', label: '본론' }, { key: 'conclusion_due', label: '결론' }, { key: 'extra_due', label: '개인연구보고서', extra: true }, { key: 'output_due', label: '산출물' }];
/* 마감일: 부분별 마감일이 없으면 예전 '최종보고서 마감일'을 씁니다. */
const dueFrom = (settings, key) => (settings && (settings[key] || (['intro_due', 'body_due', 'conclusion_due'].includes(key) ? settings.report_due : null))) || null;
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
  if (error.code === '23505') return '같은 학번이나 이메일을 쓰는 학생이 이미 있습니다. 다른 선생님 담당일 수 있으니 관리자에게 확인하세요.';
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
      s.src = 'vendor/hwp-viewer.min.js?v=' + APP_VERSION;
      s.onload = () => window.HWPjs ? resolve(window.HWPjs) : reject(new Error('viewer'));
      s.onerror = () => { hwpLibPromise = null; reject(new Error('viewer')); };
      document.head.appendChild(s);
    });
  }
  return hwpLibPromise;
}
let hwpxLibPromise = null;
function loadHwpxLib() {
  if (window.HWPXjs) return Promise.resolve(window.HWPXjs);
  if (!hwpxLibPromise) {
    hwpxLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/hwpx-viewer.min.js?v=' + APP_VERSION;
      s.onload = () => window.HWPXjs ? resolve(window.HWPXjs) : reject(new Error('viewer'));
      s.onerror = () => { hwpxLibPromise = null; reject(new Error('viewer')); };
      document.head.appendChild(s);
    });
  }
  return hwpxLibPromise;
}
let zipLibPromise = null;
function loadZipLib() {
  if (window.ZIPjs) return Promise.resolve(window.ZIPjs);
  if (!zipLibPromise) {
    zipLibPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/zip.min.js?v=' + APP_VERSION;
      s.onload = () => window.ZIPjs ? resolve(window.ZIPjs) : reject(new Error('zip'));
      s.onerror = () => { zipLibPromise = null; reject(new Error('zip')); };
      document.head.appendChild(s);
    });
  }
  return zipLibPromise;
}
const safeName = s => String(s || '').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 120) || '파일';
/* ----- AI 요약용 내용 뽑기 ----- */
function hwpDocText(doc) {
  const lines = [];
  const pText = p => {
    let t = '';
    for (const c of p.content || []) {
      if (c.type === 0) { if (typeof c.value === 'string') t += c.value; else if (c.value === 10) t += '\n'; else if (c.value === 9) t += ' '; }
    }
    return t;
  };
  const walk = (paras, sink) => {
    for (const p of paras || []) {
      const t = pText(p).trim();
      if (t) sink.push(t);
      for (const ctl of p.controls || []) {
        if (Array.isArray(ctl.content) && ctl.content.length && ctl.content[0] && 'items' in ctl.content[0]) {
          const cells = ctl.content.map(cell => { const sub = []; walk(cell.items, sub); return sub.join(' ').replace(/\s+/g, ' ').trim(); }).filter(Boolean);
          if (cells.length) sink.push('[표] ' + cells.join(' | ') + ' [/표]');
        }
      }
    }
  };
  (doc.sections || []).forEach(sec => walk(sec.content, lines));
  return lines.join('\n');
}
const blobToBase64 = blob => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(',')[1] || '');
  r.onerror = () => rej(new Error('read'));
  r.readAsDataURL(blob);
});
/* 파일 하나를 AI에 보낼 형태로 바꿉니다: {text} 또는 {media_type, data} 또는 {skip} */
async function extractForAI(path, name) {
  const ext = extOf(name);
  const blob = await downloadBlob(path);
  if (ext === 'hwpx') return { text: window.HWPXjs.extractText(new Uint8Array(await blob.arrayBuffer())) };
  if (ext === 'hwp') { const lib = await loadHwpLib(); return { text: hwpDocText(lib.parse(new Uint8Array(await blob.arrayBuffer()), { type: 'array' })) }; }
  if (['txt', 'csv', 'md'].includes(ext)) return { text: await blob.text() };
  if (ext === 'pdf') { if (blob.size > 8 * 1048576) return { skip: 'PDF가 8MB보다 큼' }; return { media_type: 'application/pdf', data: await blobToBase64(blob) }; }
  const img = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp' }[ext];
  if (img) { if (blob.size > 3.5 * 1048576) return { skip: '사진이 3.5MB보다 큼' }; return { media_type: img, data: await blobToBase64(blob) }; }
  return { skip: `.${ext} 형식은 읽을 수 없음` };
}
const neisBytes = t => [...String(t || '')].reduce((a, ch) => a + (ch === '\n' ? 2 : ch.charCodeAt(0) > 127 ? 3 : 1), 0);

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
    } else if (ext === 'hwpx') {
      const lib = await loadHwpxLib();
      const buf = new Uint8Array(await blob.arrayBuffer());
      const host = document.createElement('div');
      host.className = 'hwp-host';
      el.innerHTML = '';
      el.appendChild(host);
      const done = lib.render(host, buf);
      return () => { done(); urls.forEach(u => URL.revokeObjectURL(u)); };
    } else if (ext === 'pdf') {
      const u = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      urls.push(u);
      el.innerHTML = `<iframe class="rv-frame" src="${u}" title="${esc(name)}"></iframe>`;
    } else if (['mp4', 'mov', 'webm'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-img"><video src="${u}" controls playsinline style="max-width:100%;max-height:100%"></video></div>`;
    } else if (['mp3', 'm4a'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-msg"><audio src="${u}" controls></audio></div>`;
    } else if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) {
      const u = URL.createObjectURL(blob);
      urls.push(u);
      el.innerHTML = `<div class="rv-img"><img src="${u}" alt="${esc(name)}"></div>`;
    } else {
      fallback(`.${esc(ext)} 파일은 화면에서 바로 볼 수 없습니다. 내려받아 프로그램에서 열어 보세요. 한글(.hwp, .hwpx), PDF, 사진은 여기서 바로 보입니다.`);
    }
  } catch (e) {
    fallback(ext === 'hwpx' ? '이 HWPX 파일은 화면에서 열지 못했습니다. 손상되었거나 암호가 걸린 파일일 수 있습니다. 내려받아 한글에서 열어 보세요.' : '이 한글 파일은 화면에서 열지 못했습니다. 배포용 문서이거나 암호가 걸린 파일일 수 있습니다. 내려받아 한글에서 열어 보세요.');
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
  if (isTeacher) { await Teacher.start(email, session); return; }

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

  teachers: [], isAdmin: false,
  tName(email) {
    if (!email) return '';
    const t = this.teachers.find(x => x.email === email);
    return (t && t.name) || email.split('@')[0];
  },

  async start(email, session) {
    this.email = email;
    app.innerHTML = '<p class="loading">명단을 불러오는 중입니다.</p>';
    try { await this.load(); }
    catch (e) { renderMessage(email, '명단을 불러오지 못했습니다.', esc(dbMsg(e))); return; }
    /* 이름이 비어 있으면 구글 계정의 이름으로 채웁니다 (선생님 계정에서 언제든 고칠 수 있음) */
    const meT = this.teachers.find(t => t.email === email);
    const gName = session && session.user && session.user.user_metadata && (session.user.user_metadata.full_name || session.user.user_metadata.name);
    if (meT && !meT.name && gName) {
      const { error } = await sb.rpc('claim_my_teacher_name', { p_name: gName });
      if (!error) meT.name = String(gName).trim().slice(0, 40);
    }
    this.shell();
    this.renderAll();
  },

  async load() {
    const tr = await sb.from('teachers').select('*').order('email');
    if (tr.error) throw tr.error;
    this.teachers = tr.data || [];
    const meT = this.teachers.find(t => t.email === this.email);
    /* is_admin 칸이 아직 없으면(업데이트 전) 모든 선생님을 관리자로 봅니다 */
    this.isAdmin = !meT || meT.is_admin === undefined ? true : !!meT.is_admin;
    const res = await Promise.all([
      sb.from('students').select('*'),
      sb.from('submissions').select('*'),
      sb.from('events').select('*').order('created_at', { ascending: false }),
      sb.from('teacher_notes').select('*'),
      sb.from('settings').select('*').eq('id', 1).maybeSingle(),
      sb.from('templates').select('*').order('created_at', { ascending: true })
    ]);
    const bad = res.slice(0, -1).find(r => r.error);
    if (bad) throw bad.error;
    const [st, sub, ev, notes, set, tpls] = res.map(r => r.data);
    this.settings = set || {};
    this.templates = tpls || [];
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
      <div><h1 id="title"></h1><p class="sub" id="roleLine"></p></div>
      <div class="dues" id="dues"></div>
    </header>
    <section class="summary" id="summary" aria-label="제출 현황"></section>
    <div class="tools">
      <input class="search" id="q" type="search" placeholder="이름, 학번, 연구 주제로 찾기" aria-label="검색">
      <select class="f" id="fcls" aria-label="반"></select>
      <select class="f" id="fteacher" aria-label="담당 교사" hidden></select>
      <select class="f" id="fstatus" aria-label="상태">
        <option value="">전체 상태</option>
        <option value="wait">피드백 대기</option>
        <option value="revise">보완 요청 중</option>
        <option value="plan-none">계획서 미제출</option>
        <option value="report-none">보고서 미제출 부분 있음</option>
        <option value="output-none">산출물 미제출</option>
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
      <button class="btn" id="bAnn">공지사항</button>
      <button class="btn admin-only" id="bAssign">담당 배정</button>
      <button class="btn admin-only" id="bTpl">양식 관리</button>
      <button class="btn" id="bBulk">명단 붙여넣기</button>
      <button class="btn" id="bCsv">CSV 내보내기</button>
      <button class="btn" id="bZip">전체 내려받기</button>
      <button class="btn primary" id="bAdd">학생 추가</button>
    </div>
    <p class="count" id="count"></p>
    <div class="tablebox">
      <table><thead><tr><th>학번·이름</th><th>연구 주제</th><th>제출 현황</th><th>최근 활동</th></tr></thead><tbody id="rows"></tbody></table>
      <div id="empty"></div>
    </div>

    <div class="scrim" id="scrim"></div>
    <aside class="drawer" id="drawer" aria-label="학생 상세" aria-hidden="true">
      <div class="dhead"><h2 id="dTitle"></h2><button class="x" id="dClose" aria-label="닫기">×</button></div>
      <div class="guard" id="guard"><span style="flex:1">저장하지 않은 변경이 있습니다.</span>
        <button class="btn" id="gKeep">계속 편집</button><button class="btn danger armed" id="gDrop">버리고 닫기</button></div>
      <div class="dbody" id="dBody"></div>
      <div class="dfoot"><button class="btn danger" id="dDel">학생 삭제</button><button class="btn sm" id="dZip">이 학생 파일 받기</button><span class="msg" id="dMsg"></span><button class="btn primary" id="dSave">저장</button></div>
    </aside>

    <div class="modal" id="mBulk" role="dialog" aria-modal="true" aria-labelledby="mBulkT"><div class="mbox">
      <h2 id="mBulkT">명단 붙여넣기</h2>
      <p>한 줄에 한 명씩 학번, 이름, 학교 구글 이메일, 연구 주제 순서로 넣으세요. 엑셀에서 칸을 복사해 붙여넣어도 됩니다. 이미 있는 학번이면 새로 만들지 않고 이메일이나 주제처럼 적은 칸만 채웁니다.</p>
      <code class="ex">10109	김지호	jiho@school.example	과도한 일반화의 오류
10206	김서율	seoyul@school.example
10222	jinhyuk@school.example</code>
      <p class="hint">세 번째 줄처럼 학번과 이메일만 적으면 이미 등록된 학생에게 이메일만 연결됩니다.</p>
      <p class="hint" id="bulkNote" style="color:var(--blue)"></p>
      <textarea class="in" id="bulkText" rows="9" aria-label="명단"></textarea>
      <div class="mfoot"><span class="msg" id="bulkMsg"></span><button class="btn" data-close="mBulk">취소</button><button class="btn primary" id="bulkGo">반영</button></div>
    </div></div>

    <div class="modal" id="mSet" role="dialog" aria-modal="true" aria-labelledby="mSetT"><div class="mbox">
      <h2 id="mSetT">프로그램 설정</h2>
      <div class="field"><label class="l" for="sName">프로그램 이름</label><input class="in" id="sName"></div>
      <div class="row2 eq">
        <div class="field"><label class="l" for="sPlan">연구계획서 마감일</label><input class="in" id="sPlan" type="date"></div>
      </div>
      <p class="hint" style="margin:4px 0 10px">최종보고서</p>
      <div class="row3">
        <div class="field"><label class="l" for="sIntro">1. 서론 마감일</label><input class="in" id="sIntro" type="date"></div>
        <div class="field"><label class="l" for="sBody">2. 본론 마감일</label><input class="in" id="sBody" type="date"></div>
        <div class="field"><label class="l" for="sConclusion">3. 결론 마감일</label><input class="in" id="sConclusion" type="date"></div>
      </div>
      <div class="row2 eq">
        <div class="field"><label class="l" for="sExtra">개인연구보고서 마감일</label><input class="in" id="sExtra" type="date"></div>
        <div class="field"><label class="l" for="sOutput">산출물 마감일</label><input class="in" id="sOutput" type="date"></div>
      </div>
      <div class="mfoot"><button class="btn" data-close="mSet">취소</button><button class="btn primary" id="setGo">설정 저장</button></div>
    </div></div>

    <div class="modal" id="mTpl" role="dialog" aria-modal="true" aria-labelledby="mTplT"><div class="mbox">
      <h2 id="mTplT">양식 관리</h2>
      <p>여기에 올린 양식은 학생 화면의 해당 칸에 ‘양식 내려받기’로 나타납니다. 같은 칸에 여러 개를 올릴 수 있어요.</p>
      <div class="tpl-form">
        <div class="row2 eq">
          <div class="field"><label class="l" for="tStage">어느 칸에 보일까요</label>
            <select class="in" id="tStage">${TPL_PLACES.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></div>
          <div class="field"><label class="l" for="tTitle">양식 이름 (선택)</label><input class="in" id="tTitle" placeholder="비우면 파일 이름이 쓰입니다"></div>
        </div>
        <div class="tpl-pick">
          <label class="btn" for="tFile">파일 고르기</label><input type="file" id="tFile" hidden>
          <span class="hint" id="tPicked"></span>
          <span class="spacer"></span>
          <button class="btn primary" id="tGo">양식 올리기</button>
        </div>
      </div>
      <h3 class="rv-h" style="margin-top:18px">올린 양식</h3>
      <ul class="tpl-list" id="tList"></ul>
      <div class="mfoot"><button class="btn" data-close="mTpl">닫기</button></div>
    </div></div>

    <div class="modal" id="mTeach" role="dialog" aria-modal="true" aria-labelledby="mTeachT"><div class="mbox">
      <h2 id="mTeachT">선생님 계정</h2>
      <p><b>관리자</b>는 모든 학생과 설정을 관리하고, <b>담당 교사</b>는 배정받은 학생만 보고 피드백할 수 있습니다. 추가한 뒤 ‘담당 배정’에서 학생을 나눠 주세요.</p>
      <div class="tpl-pick">
        <input class="in" id="teachName" placeholder="이름 (예: 김민수)" autocomplete="off" style="flex:0 1 150px">
        <input class="in" id="teachEmail" type="email" placeholder="선생님 학교 구글 이메일" autocomplete="off" style="flex:1;min-width:200px">
        <button class="btn primary" id="teachAdd">추가</button>
      </div>
      <ul class="tpl-list" id="teachList"></ul>
      <p class="hint">본인 계정은 여기서 지우거나 관리자 해제할 수 없습니다. 선생님을 지우면 그 선생님의 담당 학생은 ‘미배정’이 됩니다.</p>
      <div class="mfoot"><button class="btn" data-close="mTeach">닫기</button></div>
    </div></div>

    <div class="modal" id="mAssign" role="dialog" aria-modal="true" aria-labelledby="mAssignT"><div class="mbox">
      <h2 id="mAssignT">담당 배정</h2>
      <p>선생님을 고르고 담당할 학생을 체크한 뒤 저장하세요. 다른 선생님 담당인 학생을 체크하면 이 선생님으로 옮겨집니다.</p>
      <div class="tpl-pick"><select class="in" id="asTeacher" style="flex:1"></select><button class="btn sm" id="asUn">미배정 학생만 체크</button></div>
      <ul class="assign-list" id="asList"></ul>
      <div class="mfoot"><span class="msg" id="asMsg"></span><button class="btn" data-close="mAssign">취소</button><button class="btn primary" id="asGo">저장</button></div>
    </div></div>

    <div class="modal" id="mZip" role="dialog" aria-modal="true" aria-labelledby="mZipT"><div class="mbox">
      <h2 id="mZipT">전체 내려받기</h2>
      <p>학생들이 낸 파일을 zip 하나로 받습니다. 명단·제출 현황과 피드백 기록도 엑셀로 열 수 있는 CSV로 함께 들어갑니다. 서버 장애에 대비해 마감일마다 받아서 학교 드라이브나 컴퓨터에 보관해 두세요.</p>
      <div class="field"><label class="l">받을 학생</label>
        <div class="tpl-pick"><label class="agree small" style="margin:0"><input type="radio" name="zScope" value="all" checked> <span id="zAllLabel">전체</span></label>
        <label class="agree small" style="margin:0"><input type="radio" name="zScope" value="shown"> <span id="zShownLabel">지금 목록에 보이는 학생</span></label></div></div>
      <div class="field"><label class="l">받을 항목</label><div class="zip-stages" id="zStages"></div></div>
      <div class="field"><label class="l">폴더 정리</label>
        <div class="tpl-pick"><label class="agree small" style="margin:0"><input type="radio" name="zLayout" value="student" checked> <span>학생별 폴더</span></label>
        <label class="agree small" style="margin:0"><input type="radio" name="zLayout" value="stage"> <span>항목별 폴더 (서론끼리, 본론끼리)</span></label></div></div>
      <label class="agree small"><input type="checkbox" id="zOld"> <span>보완 전에 냈던 이전 파일도 함께 받기</span></label>
      <div class="zip-progress" id="zProg" hidden><div class="bar"><span id="zBar" style="width:0;background:var(--blue)"></span></div><span class="hint" id="zMsg"></span></div>
      <div class="mfoot"><span class="msg" id="zCount"></span><button class="btn" data-close="mZip">닫기</button><button class="btn primary" id="zGo">내려받기</button></div>
    </div></div>

    <div class="modal" id="mAnn" role="dialog" aria-modal="true" aria-labelledby="mAnnT"><div class="mbox wide">
      <h2 id="mAnnT">공지사항</h2>
      <p id="annIntro"></p>
      <div class="ann-form">
        <div class="field"><label class="l" for="annTitle">제목</label><input class="in" id="annTitle" maxlength="200" placeholder="예: 서론 제출 마감 안내"></div>
        <div class="field"><label class="l" for="annBody">내용</label><textarea class="in" id="annBody" rows="5" maxlength="5000" placeholder="학생들에게 전할 내용을 적으세요."></textarea></div>
        <div class="tpl-pick">
          <select class="in" id="annAud" style="flex:0 1 200px"><option value="mine">내 담당 학생에게</option><option value="all">전체 학생에게</option></select>
          <label class="agree small" style="margin:0"><input type="checkbox" id="annPin"> <span>맨 위에 고정</span></label>
          <span class="spacer"></span>
          <button class="btn" id="annCancel" hidden>수정 취소</button>
          <button class="btn primary" id="annGo">게시</button>
        </div>
      </div>
      <h3 class="rv-h" style="margin-top:18px" id="annListT">게시한 공지</h3>
      <ul class="ann-list" id="annList"></ul>
      <div class="mfoot"><button class="btn" data-close="mAnn">닫기</button></div>
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
    $('bTpl').onclick = () => { this.renderTemplates(); this.openModal('mTpl'); };
    $('tFile').onchange = () => { const f = $('tFile').files[0]; $('tPicked').textContent = f ? f.name : ''; };
    $('tGo').onclick = () => this.uploadTemplate();
    $('teachAdd').onclick = () => this.addTeacher();
    $('bAssign').onclick = () => this.openAssign();
    $('bAnn').onclick = () => this.openAnn();
    $('annGo').onclick = () => this.saveAnn();
    $('annCancel').onclick = () => this.resetAnnForm();
    $('bBulk').addEventListener('click', () => {
      const note = $('bulkNote');
      if (note) note.textContent = this.isAdmin ? '' : '여기서 등록한 학생은 자동으로 선생님 담당 학생이 됩니다.';
    });
    $('asTeacher').onchange = () => this.renderAssign();
    $('asUn').onclick = () => {
      $('asList').querySelectorAll('input[data-st]').forEach(c => { if (!c.dataset.cur) c.checked = true; });
      $('asMsg').textContent = `${$('asList').querySelectorAll('input:checked').length}명 선택`;
    };
    $('asGo').onclick = () => this.saveAssign();
    $('fteacher').addEventListener('input', () => this.renderRows());
    $('teachEmail').onkeydown = e => { if (e.key === 'Enter') this.addTeacher(); };
    $('bCsv').onclick = () => this.exportCsv();
    $('bZip').onclick = () => this.openZip();
    $('zGo').onclick = () => this.runZip();
    $('dZip').onclick = () => {
      if (this.isNew || !this.openId) return;
      this.runZip({ ids: [this.openId], stages: STAGES.map(g => g.key), layout: 'student', old: true });
    };
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
    $('roleLine').innerHTML = this.isAdmin
      ? `고등학교 1학년 개인연구 프로그램 · <b>관리자</b> (전체 학생 ${this.students.size}명)`
      : `고등학교 1학년 개인연구 프로그램 · <b>${esc(this.tName(this.email))}</b> 선생님 담당 학생 ${this.students.size}명`;
    $('dues').innerHTML = DUES.filter(g => !g.extra || anyExtra).map(g => { const v = dueFrom(c, g.key); return v
      ? `<span>${g.label} <b>${fmtDate(v)}</b>${ddayTag(v)}</span>`
      : `<span>${g.label} <b>미정</b></span>`; }).join('') + (this.isAdmin ? '<button class="linkbtn" id="bSet">마감일 설정</button><button class="linkbtn" id="bTeachers">선생님 계정</button>' : '');
    if (this.isAdmin) {
      $('bSet').onclick = () => this.openSettings();
      $('bTeachers').onclick = () => this.openTeachers();
    }
    app.querySelectorAll('.admin-only').forEach(b => b.hidden = !this.isAdmin);
    $('bAdd').hidden = false;
    const ft = $('fteacher');
    ft.hidden = !this.isAdmin;
    if (this.isAdmin) {
      const cur = ft.value;
      ft.innerHTML = '<option value="">전체 담당 교사</option><option value="__none">미배정</option>' +
        this.teachers.map(t => `<option value="${esc(t.email)}">${esc(this.tName(t.email))} 선생님</option>`).join('');
      ft.value = [...ft.options].some(o => o.value === cur) ? cur : '';
    }
  },

  renderSummary() {
    const list = [...this.students.values()];
    const n = list.length;
    const count = key => { const c = { none: 0, waiting: 0, revise: 0, done: 0 }; list.forEach(s => c[s[key].status || 'none']++); return c; };
    const bar = (cnt, thin) => `<div class="bar${thin ? ' thin' : ''}">${ORDER.filter(k => k !== 'none').map(k => n && cnt[k] ? `<span style="width:${cnt[k] / n * 100}%;background:${ST[k].color}" title="${ST[k].label} ${cnt[k]}명"></span>` : '').join('')}</div>`;
    const legend = cnt => `<div class="legend">${ORDER.map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label} ${cnt[k]}</span>`).join('')}</div>`;
    let html = '';
    const allIn = list.filter(s => PARTS.every(g => s[g.key].status !== 'none')).length;
    const pc = count('plan');
    html += `<div class="sum"><h2>제출 현황</h2><div class="big">${allIn}<small>/ ${n}명 최종보고서 세 부분 모두 제출</small></div>
      <div class="parts"><div class="part-row plan-row"><span class="pl">계획서</span>${bar(pc, true)}<span class="pn">${n - pc.none}/${n}</span></div>${PARTS.map(g => { const c = count(g.key); return `<div class="part-row"><span class="pl">${g.label}</span>${bar(c, true)}<span class="pn">${n - c.none}/${n}</span></div>`; }).join('')}</div>
      ${(() => { const ex = list.filter(s => s.extra_required); if (!ex.length) return ''; const c = { none: 0, waiting: 0, revise: 0, done: 0 }; ex.forEach(s => c[s.extra.status || 'none']++); const m = ex.length;
        return `<div class="part-row extra-row"><span class="pl">개인연구보고서</span><div class="bar thin">${ORDER.filter(k => k !== 'none').map(k => c[k] ? `<span style="width:${c[k] / m * 100}%;background:${ST[k].color}"></span>` : '').join('')}</div><span class="pn">${m - c.none}/${m}</span></div>`; })()}
      ${(() => { const c = count('output'); return `<div class="part-row extra-row"><span class="pl">산출물</span>${bar(c, true)}<span class="pn">${n - c.none}/${n}</span></div>`; })()}
      <div class="legend">${ORDER.filter(k => k !== 'none').map(k => `<span><i style="background:${ST[k].color}"></i>${ST[k].label}</span>`).join('')}</div></div>`;
    const wait = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'waiting').length, 0);
    const rev = list.reduce((a, s) => a + stagesFor(s).filter(g => s[g.key].status === 'revise').length, 0);
    const late = list.filter(s => stagesFor(s).some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)))).length;
    const nomail = list.filter(s => !s.email).length;
    const noconsent = list.filter(s => s.email && !hasConsent(s)).length;
    html += `<div class="sum"><h2>지금 할 일</h2><div class="todo-list">
      <button class="todo wait" data-f="wait"><span>피드백을 기다리는 제출물</span><span class="n">${wait}</span></button>
      <button class="todo rev" data-f="revise"><span>보완 요청 후 재제출 대기</span><span class="n">${rev}</span></button>
      <button class="todo late" data-f="late"><span>마감 지나고 미제출한 학생</span><span class="n">${late}</span></button>
      ${nomail ? `<button class="todo mail" data-f="nomail"><span>이메일 미등록 (로그인 불가)</span><span class="n">${nomail}</span></button>` : ''}
      ${this.isAdmin && this.teachers.some(t => !t.name) ? `<button class="todo mail" data-open-teachers="1"><span>이름이 없는 선생님 계정</span><span class="n">${this.teachers.filter(t => !t.name).length}</span></button>` : ''}
      ${this.isAdmin && list.some(s => !s.teacher_email) ? `<button class="todo mail" data-tf="__none"><span>담당 교사 미배정</span><span class="n">${list.filter(s => !s.teacher_email).length}</span></button>` : ''}
      ${noconsent ? `<button class="todo mail" data-f="noconsent"><span>개인정보 동의 전</span><span class="n">${noconsent}</span></button>` : ''}
      ${wait ? `<button class="btn primary" id="rvStart">대기 중인 제출물 차례로 검토하기</button>` : ''}
    </div></div>`;
    $('summary').innerHTML = html;
    $('summary').querySelectorAll('.todo').forEach(b => b.onclick = () => {
      if (b.dataset.openTeachers) { this.openTeachers(); return; }
      if (b.dataset.tf) { $('fteacher').value = b.dataset.tf; $('fstatus').value = ''; }
      else $('fstatus').value = b.dataset.f;
      this.renderRows();
    });
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
    const ft = this.isAdmin ? $('fteacher').value : '';
    if (ft === '__none' && s.teacher_email) return false;
    if (ft && ft !== '__none' && s.teacher_email !== ft) return false;
    const f = $('fstatus').value;
    if (f === 'wait') return stagesFor(s).some(g => s[g.key].status === 'waiting');
    if (f === 'revise') return stagesFor(s).some(g => s[g.key].status === 'revise');
    if (f === 'extra') return !!s.extra_required;
    if (f === 'output-none') return s.output.status === 'none';
    if (f === 'plan-none') return s.plan.status === 'none';
    if (f === 'report-none') return PARTS.some(g => s[g.key].status === 'none');
    if (f === 'late') return stagesFor(s).some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)));
    if (f === 'alldone') return stagesFor(s).every(g => s[g.key].status === 'done');
    if (f === 'nomail') return !s.email;
    if (f === 'noconsent') return !!s.email && !hasConsent(s);
    return true;
  },

  partsCell(s) {
    const pk = s.plan.status || 'none';
    const planChip = `<span class="chip ${pk} plan${this.justStamped === s.id + 'plan' ? ' pressed' : ''}" title="연구계획서: ${ST[pk].label}">${pk === 'done' ? '✓ ' : ''}계획서</span>`;
    const chips = PARTS.map(g => {
      const k = s[g.key].status || 'none';
      return `<span class="chip ${k}${this.justStamped === s.id + g.key ? ' pressed' : ''}" title="${g.full}: ${ST[k].label}">${k === 'done' ? '✓ ' : ''}${g.label}</span>`;
    }).join('');
    const ek = s.extra_required ? (s.extra.status || 'none') : null;
    const extraChip = ek ? `<span class="chip ${ek} extra${this.justStamped === s.id + 'extra' ? ' pressed' : ''}" title="개인연구보고서: ${ST[ek].label}">${ek === 'done' ? '✓ ' : ''}개인연구</span>` : '';
    const missing = PARTS.filter(g => s[g.key].status === 'none').length;
    const overdue = [PLAN, ...PARTS, ...(s.extra_required ? [EXTRA] : []), OUTPUT].some(g => s[g.key].status === 'none' && isPast(dueFrom(this.settings, g.due)));
    const meta = overdue ? '<div class="meta warn">마감 지난 미제출 있음</div>'
      : [PLAN, ...PARTS, ...(s.extra_required ? [EXTRA] : []), OUTPUT].some(g => s[g.key].status === 'waiting') ? '<div class="meta">피드백 대기 있음</div>' : '';
    const ok = s.output.status || 'none';
    const outChip = `<span class="chip ${ok} out${this.justStamped === s.id + 'output' ? ' pressed' : ''}" title="산출물: ${ST[ok].label}">${ok === 'done' ? '✓ ' : ''}산출물</span>`;
    return `<div class="chips">${planChip}${chips}${extraChip}${outChip}</div>${meta}`;
  },

  stageCell(s, g) {
    const st = s[g.key];
    const k = st.status || 'none';
    const due = dueFrom(this.settings, g.due);
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
      <td class="c-who"><span class="sid">${esc(s.sid) || '—'}</span> <span class="nm">${esc(s.name)}</span>${this.isAdmin ? (s.teacher_email ? `<span class="tch">${esc(this.tName(s.teacher_email))}</span>` : '<span class="tch none">미배정</span>') : ''}${!s.email ? '<span class="nomail">이메일 없음</span>' : hasConsent(s) ? '' : '<span class="nomail">동의 전</span>'}</td>
      <td class="c-topic"><div class="topic${s.topic ? '' : ' empty'}" title="${esc(s.topic)}">${s.topic_updated_at && (Date.now() - new Date(s.topic_updated_at)) < 7 * 86400000 ? '<span class="tnew">학생 수정</span>' : ''}${esc(s.topic) || '주제 미정'}</div></td>
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
    if (!total) empty = this.isAdmin
      ? '<div class="empty-state"><p>아직 등록된 학생이 없습니다. 반 명단을 붙여넣으면 한 번에 등록됩니다.</p><button class="btn primary" id="emptyBulk">명단 붙여넣기</button></div>'
      : '<div class="empty-state"><p>아직 담당 학생이 없습니다. 담당 학생 명단을 붙여넣어 직접 등록하거나, 관리자 선생님께 담당 배정을 요청하세요.</p><button class="btn primary" id="emptyBulk">명단 붙여넣기</button></div>';
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
    const base = src ? clone(src) : { id: null, sid: '', name: '', cls: '', email: '', field: '', topic: '', memo: '', teacher_email: this.isAdmin ? (['', '__none'].includes($('fteacher').value) ? '' : $('fteacher').value) : this.email, ...Object.fromEntries(STAGES.map(g => [g.key, this.blank()])), ev: evMap() };
    for (const g of STAGES) base[g.key].date = dateOf(base[g.key].submitted_at);
    this.draft = base;
    this.orig = clone(base);
    this.fb = stageMap();
    this.delEvents = new Set();
    this.dirty = false;
    this.ai = { sid: id, row: null, busy: false, msg: '', loaded: false, pack: null };
    this.renderDrawer();
    if (id) this.loadAI(id);
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
    $('dDel').hidden = this.isNew || !this.isAdmin;
    $('dZip').hidden = this.isNew;
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
      ${g.key === 'plan' ? '<h3 class="group-h">연구계획서</h3>' : ''}${g.key === PARTS[0].key ? '<h3 class="group-h">최종보고서</h3>' : ''}${g.key === 'extra' ? '<h3 class="group-h">개인연구보고서</h3>' : ''}${g.key === 'output' ? '<h3 class="group-h">산출물</h3>' : ''}
      <div class="stage-h"><h3>${g.group === 'report' ? g.full.replace('최종보고서 ', '') : g.group === 'extra' || g.group === 'output' || g.group === 'plan' ? '제출물' : g.label}${g.desc ? `<small class="desc">${g.desc}</small>` : ''}</h3>${k === 'done' ? '<span class="stamp lg" aria-hidden="true">확인</span>' : ''}</div>
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
      ${this.isAdmin
        ? `<div class="field"><label class="l" for="f-teacher">담당 교사</label><select class="in" id="f-teacher" data-k="teacher_email"><option value="">미배정</option>${this.teachers.map(t => `<option value="${esc(t.email)}" ${d.teacher_email === t.email ? 'selected' : ''}>${esc(this.tName(t.email))} (${esc(t.email)})</option>`).join('')}</select></div>`
        : ''}
      <div class="field"><label class="l" for="f-email">학교 구글 이메일 (학생 로그인용)</label><input class="in" id="f-email" data-k="email" type="email" autocomplete="off" value="${esc(d.email)}"></div>
      <div class="field"><label class="l" for="f-topic">연구 주제</label><input class="in" id="f-topic" data-k="topic" value="${esc(d.topic)}">
        ${d.topic_updated_at ? `<p class="hint">학생이 ${fmtDT(d.topic_updated_at)}에 수정함${d.topic_prev ? ` · 이전 주제: ${esc(d.topic_prev)}` : ''}</p>` : ''}</div>
      <label class="agree small"><input type="checkbox" id="f-extra" ${d.extra_required ? 'checked' : ''}> <span>실험 대상 학생 (개인연구보고서 추가 제출)</span></label>
      ${this.isNew ? '' : `<p class="hint" style="margin:-4px 0 12px">개인정보 수집·이용 동의: ${hasConsent(d) ? fmtDT(d.consent_at) + ' 동의함' + (/^data:image\/png;base64,/.test(d.consent_signature || '') ? `<br><img class="sig" src="${d.consent_signature}" alt="${esc(d.name)} 학생 서명">` : '') : '<span class="warn">아직 동의하지 않음</span> (학생이 처음 로그인할 때 동의 화면이 나옵니다)'}</p>`}
      <div class="field"><label class="l" for="f-memo">지도 메모 (학생에게 보이지 않음)</label><textarea class="in" id="f-memo" data-k="memo" rows="3">${esc(d.memo)}</textarea></div>
      ${stagesFor(d).map(g => this.stageHTML(g)).join('')}
      ${this.isNew ? '' : this.aiHTML()}`;
    this.bindDrawer();
    $('f-extra').onchange = () => { this.keepFb(); this.draft.extra_required = $('f-extra').checked; this.setDirty(); this.renderDrawer(); };
    if (!this.isNew) this.bindAI();
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
    if (this.isAdmin) row.teacher_email = d.teacher_email || null;
    else if (this.isNew) row.teacher_email = this.email;
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
        const changed = ['sid', 'name', 'cls', 'email', 'field', 'topic'].some(k => (row[k] || '') !== (o[k] || '')) || row.extra_required !== !!o.extra_required || (this.isAdmin && (row.teacher_email || '') !== (o.teacher_email || ''));
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
    requestAnimationFrame(() => requestAnimationFrame(() => this.zoom(0)));
    if (!this.rvResize && window.ResizeObserver) {
      let t = null;
      this.rvResize = new ResizeObserver(() => {
        clearTimeout(t);
        t = setTimeout(() => { if (this.rv && this.rv.autoFit !== false) this.zoom(0); }, 120);
      });
      this.rvResize.observe($('rvView'));
    }
  },

  zoom(step) {
    const rv = this.rv;
    if (!rv) return;
    const view = $('rvView');
    const pages = [...view.querySelectorAll('div[data-page-number]:not(.hwpjs-observer)')];
    if (!pages.length) return;
    /* 가로로 넘치는지 볼 스크롤 영역: HWPX는 .hx-scroll, HWP는 페이지들의 부모 */
    const sc = view.querySelector('.hx-scroll') || pages[0].parentElement || view;
    const apply = () => pages.forEach(p => p.style.zoom = rv.zoom);
    if (step === 0) {
      rv.autoFit = true;
      pages.forEach(p => p.style.zoom = 1);
      const w = pages[0].offsetWidth;
      const cs = getComputedStyle(sc);
      const avail = sc.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0) - 4;
      rv.zoom = w ? Math.min(1.4, Math.max(0.4, avail / w)) : 1;
      apply();
      /* 그래도 가로로 넘치면 넘치지 않을 때까지 조금씩 줄입니다 */
      for (let k = 0; k < 12 && sc.scrollWidth > sc.clientWidth + 1 && rv.zoom > 0.4; k++) { rv.zoom = Math.max(0.4, rv.zoom - 0.04); apply(); }
      sc.scrollLeft = 0;
    } else {
      rv.autoFit = false;
      rv.zoom = Math.min(2, Math.max(0.4, rv.zoom + step * 0.15));
      apply();
    }
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

  /* ----- 선생님 계정 ----- */
  async openTeachers() {
    this.openModal('mTeach');
    await this.loadTeachers();
  },

  async loadTeachers() {
    const list = $('teachList');
    try { await this.load(); this.renderAll(); } catch (e) { list.innerHTML = `<li class="hint">목록을 불러오지 못했습니다. ${esc(dbMsg(e))}</li>`; return; }
    const cnt = e => [...this.students.values()].filter(s => s.teacher_email === e).length;
    list.innerHTML = this.teachers.map(t => `<li>
      <span class="tpl-name" data-namebox="${esc(t.email)}">${t.name ? esc(t.name) : `<span class="warn">이름 없음</span>`}${t.is_admin ? ' <span class="tpl-place">관리자</span>' : ''}${t.email === this.email ? ' <span class="tpl-place me">나</span>' : ''}<small>${esc(t.email)} · 담당 ${cnt(t.email)}명</small></span>
      <button class="btn sm" data-tchname="${esc(t.email)}">이름 ${t.name ? '수정' : '넣기'}</button>
      ${t.email === this.email ? '' : `<button class="btn sm" data-tchadm="${esc(t.email)}">${t.is_admin ? '관리자 해제' : '관리자로 지정'}</button><button class="btn sm danger" data-tchdel="${esc(t.email)}">삭제</button>`}
    </li>`).join('');
    list.querySelectorAll('[data-tchname]').forEach(b => b.onclick = () => {
      const t = this.teachers.find(x => x.email === b.dataset.tchname);
      const box = list.querySelector(`[data-namebox="${CSS.escape(t.email)}"]`);
      box.innerHTML = `<input class="in" maxlength="40" value="${esc(t.name || '')}" placeholder="학생에게 보일 이름 (예: 김민수)"><small>${esc(t.email)}</small>`;
      const inp = box.querySelector('input');
      inp.focus();
      b.textContent = '저장';
      const save = async () => {
        const v = inp.value.trim();
        if (!v) { toast('이름을 입력하세요.'); inp.focus(); return; }
        const { error } = await sb.from('teachers').update({ name: v }).eq('email', t.email);
        if (error) { toast(dbMsg(error)); return; }
        toast('이름을 저장했습니다. 학생 화면에도 이 이름으로 보입니다.');
        this.loadTeachers();
      };
      b.onclick = save;
      inp.onkeydown = e => { if (e.key === 'Enter') save(); };
    });
    list.querySelectorAll('[data-tchadm]').forEach(b => b.onclick = async () => {
      const t = this.teachers.find(x => x.email === b.dataset.tchadm);
      const { error } = await sb.from('teachers').update({ is_admin: !t.is_admin }).eq('email', t.email);
      if (error) { toast(dbMsg(error)); return; }
      toast(t.is_admin ? '관리자에서 해제했습니다.' : '관리자로 지정했습니다.');
      this.loadTeachers();
    });
    list.querySelectorAll('[data-tchdel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const { error: e2 } = await sb.from('teachers').delete().eq('email', b.dataset.tchdel);
      if (e2) { toast(dbMsg(e2)); return; }
      toast('선생님 계정을 삭제했습니다. 담당 학생은 미배정이 됐습니다.');
      this.loadTeachers();
    });
  },

  async addTeacher() {
    const email = $('teachEmail').value.trim().toLowerCase();
    const name = $('teachName').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast('이메일 형식을 확인하세요.'); $('teachEmail').focus(); return; }
    if ([...this.students.values()].some(s => s.email === email)) { toast('학생으로 등록된 이메일입니다. 학생 명단에서 먼저 빼 주세요.'); return; }
    const { error } = await sb.from('teachers').insert({ email, name: name || null });
    if (error) { toast(error.code === '23505' ? '이미 추가된 선생님입니다.' : dbMsg(error)); return; }
    $('teachEmail').value = ''; $('teachName').value = '';
    toast(`${name || email} 선생님을 추가했습니다. ‘담당 배정’에서 학생을 나눠 주세요.`);
    this.loadTeachers();
  },

  /* ----- 생기부 초안 (AI) ----- */
  ai: null,

  aiReady(s) {
    const need = [...PARTS, OUTPUT];
    const missing = need.filter(g => !s[g.key].file_path).map(g => g.full.replace('최종보고서 ', ''));
    return { ok: !missing.length, missing };
  },

  async loadAI(id) {
    const { data, error } = await sb.from('record_drafts').select('*').eq('student_id', id).maybeSingle();
    if (!this.ai || this.ai.sid !== id) return;
    this.ai.loaded = true;
    this.ai.missingTable = !!error;
    this.ai.row = data || null;
    const box = $('aiBox');
    if (box) { box.outerHTML = this.aiHTML(); this.bindAI(); }
  },

  aiHTML() {
    const s = this.students.get(this.openId);
    if (!s || !this.ai) return '';
    const r = this.ai.row || {};
    const ready = this.aiReady(s);
    const areas = ['과목 세부능력 및 특기사항', '자율·자치활동', '진로활동', '동아리활동'];
    const area = r.area || areas[0];
    const len = r.length_limit || 500;
    const pack = this.ai.pack;
    return `<section class="stage ai-box" id="aiBox">
      <h3 class="group-h">생기부 요약 자료</h3>
      ${this.ai.missingTable ? '<p class="notice">초안을 저장하려면 Supabase에서 update-record-drafts.sql 을 먼저 실행하세요.</p>' : ''}
      <p class="hint">${ready.ok ? '최종보고서 세 부분과 산출물이 모두 제출되어 요약 자료를 만들 수 있어요.' : `아직 안 낸 항목: <b>${ready.missing.join(', ')}</b>. 지금 있는 자료로 먼저 만들 수도 있어요.`}</p>
      <div class="row3">
        <div class="field"><label class="l" for="aiArea">영역</label><select class="in" id="aiArea">${areas.map(a => `<option ${a === area ? 'selected' : ''}>${a}</option>`).join('')}</select></div>
        <div class="field"><label class="l" for="aiSubject">과목명 (세특일 때)</label><input class="in" id="aiSubject" value="${esc(r.subject || '')}" placeholder="예: 수학"></div>
        <div class="field"><label class="l" for="aiLen">분량</label><select class="in" id="aiLen">${[300, 500, 700, 1000].map(n => `<option value="${n}" ${n === len ? 'selected' : ''}>${n}자 이내</option>`).join('')}</select></div>
      </div>
      <div class="ai-opts">
        <label class="agree small"><input type="checkbox" id="aiMask" checked> <span>학생 이름 가리기</span></label>
        <label class="agree small"><input type="checkbox" id="aiPrompt" checked> <span>AI 작성 지시문 넣기</span></label>
        <label class="agree small"><input type="checkbox" id="aiFb" checked> <span>선생님 피드백 포함</span></label>
      </div>
      <div class="ai-actions"><button class="btn primary" id="aiGo" ${this.ai.busy ? 'disabled' : ''}>${pack ? '요약 자료 다시 만들기' : '요약 자료 만들기'}</button><span class="hint" id="aiMsg">${esc(this.ai.msg || '')}</span></div>
      ${pack ? `
        <label class="l" for="aiPack">요약 자료 · 복사해서 AI 채팅(예: Claude)에 붙여넣으세요</label>
        <textarea class="in ai-pack" id="aiPack" rows="10">${esc(pack.text)}</textarea>
        <div class="ai-count">${[...pack.text].length.toLocaleString()}자${[...pack.text].length > 60000 ? ' · <span class="warn">길어요. AI 채팅에 다 안 들어가면 본론을 나눠 붙여넣으세요.</span>' : ''}</div>
        <div class="ai-actions">
          <button class="btn primary" id="aiCopyPack">자료 복사</button>
          <a class="btn" href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">Claude 열기 ↗</a>
          <button class="btn" id="aiTxt">텍스트 파일로 받기</button>
        </div>
        ${pack.files.length ? `<div class="ai-files"><b>글로 옮기지 못한 제출물</b> · PDF와 사진은 AI 채팅에 파일로 직접 첨부하세요.
          <ul>${pack.files.map((f, i) => `<li>${esc(f.label)}: ${esc(f.name)} ${f.path ? `<button class="btn sm" data-aifile="${i}">받기</button>` : `<span class="hint">(${esc(f.why)})</span>`}</li>`).join('')}</ul></div>` : ''}` : ''}
      <div class="ai-final">
        <label class="l" for="aiDraft">생기부 초안 · AI가 써 준 글을 붙여넣고 고쳐서 저장하세요</label>
        <textarea class="in ai-draft" id="aiDraft" rows="8" placeholder="AI 채팅에서 받은 초안을 여기에 붙여넣으세요.">${esc(r.draft || '')}</textarea>
        <div class="ai-count" id="aiCount"></div>
        <div class="ai-actions"><button class="btn" id="aiCopy">복사</button><button class="btn primary" id="aiSave">초안 저장</button>
          <span class="hint">${r.updated_at ? `${fmtDT(r.updated_at)} 저장${r.updated_by ? ' · ' + esc(this.tName(r.updated_by)) : ''}` : ''}</span></div>
      </div>
      <p class="hint ai-warn">AI가 쓴 초안은 참고용이에요. 학생의 실제 활동과 맞는지 확인하고 학교생활기록부 기재요령에 맞게 직접 고쳐 쓰세요. 외부 AI에 붙여넣기 전에 개인정보(이름, 학번 등)가 가려졌는지 한 번 더 확인하세요.</p>
    </section>`;
  },

  bindAI() {
    const go = $('aiGo');
    if (!go) return;
    go.onclick = () => this.buildPack();
    const ta = $('aiDraft');
    const lim = () => parseInt($('aiLen').value, 10);
    const upd = () => {
      const n = [...ta.value].length, b = neisBytes(ta.value);
      $('aiCount').innerHTML = ta.value ? `<span class="${n > lim() ? 'warn' : ''}">${n}자 (공백 포함) / ${lim()}자</span> · NEIS ${b.toLocaleString()}바이트 (한글 3, 영문·숫자 1)` : '';
    };
    ta.oninput = upd;
    $('aiLen').onchange = upd;
    upd();
    $('aiCopy').onclick = () => this.copyText(ta.value, '초안을 복사했습니다.', ta);
    $('aiSave').onclick = () => this.saveAI({ draft: ta.value });
    const cp = $('aiCopyPack');
    if (cp) {
      cp.onclick = () => this.copyText($('aiPack').value, '요약 자료를 복사했습니다. AI 채팅에 붙여넣으세요.', $('aiPack'));
      $('aiTxt').onclick = () => {
        const s = this.students.get(this.openId);
        saveBlob(new Blob(['\uFEFF' + $('aiPack').value], { type: 'text/plain;charset=utf-8' }), `${safeName((s.sid || '') + '_요약자료')}.txt`);
      };
      $('aiBox').querySelectorAll('[data-aifile]').forEach(b => b.onclick = async () => {
        const f = this.ai.pack.files[+b.dataset.aifile];
        try { saveBlob(await downloadBlob(f.path), f.name); } catch (e) { toast(e && e.demo ? e.message : '파일을 받지 못했습니다.'); }
      });
    }
  },

  async copyText(text, msg, el) {
    try { await navigator.clipboard.writeText(text); toast(msg); }
    catch (e) { if (el) { el.focus(); el.select(); } toast('복사가 막혔습니다. 선택된 글을 Ctrl+C로 복사하세요.'); }
  },

  async saveAI(patch, silent) {
    const id = this.openId;
    const row = {
      student_id: id,
      area: $('aiArea') ? $('aiArea').value : '',
      subject: $('aiSubject') ? $('aiSubject').value.trim() : '',
      length_limit: $('aiLen') ? parseInt($('aiLen').value, 10) : 500,
      ...patch,
      updated_at: new Date().toISOString(),
      updated_by: this.email
    };
    const { data, error } = await sb.from('record_drafts').upsert(row, { onConflict: 'student_id' }).select().single();
    if (error) { toast(dbMsg(error)); return false; }
    if (this.ai && this.ai.sid === id) this.ai.row = data || row;
    if (!silent) toast('초안을 저장했습니다.');
    const box = $('aiBox');
    if (box && this.openId === id) { box.outerHTML = this.aiHTML(); this.bindAI(); }
    return true;
  },

  async buildPack() {
    const id = this.openId;
    const s = this.students.get(id);
    if (!s || this.ai.busy) return;
    const setMsg = m => { this.ai.msg = m; const el = $('aiMsg'); if (el) el.textContent = m; };
    const keepDraft = $('aiDraft') ? $('aiDraft').value : '';
    const area = $('aiArea').value, subject = $('aiSubject').value.trim(), length = parseInt($('aiLen').value, 10);
    const mask = $('aiMask').checked, withPrompt = $('aiPrompt').checked, withFb = $('aiFb').checked;
    this.ai.busy = true;
    $('aiGo').disabled = true;
    try {
      const sections = [], files = [];
      const stages = stagesFor(s).filter(g => s[g.key].file_path);
      let i = 0;
      for (const g of stages) {
        i++;
        setMsg(`제출물 읽는 중 ${i} / ${stages.length}`);
        const sub = s[g.key];
        try {
          const r = await extractForAI(sub.file_path, sub.file_name);
          if (r.text && r.text.trim()) sections.push({ label: g.full, text: r.text.trim().slice(0, 20000) });
          else if (r.data) files.push({ label: g.full, name: sub.file_name, path: sub.file_path });
          else files.push({ label: g.full, name: sub.file_name, why: r.skip || '내용 없음' });
        } catch (e) { files.push({ label: g.full, name: sub.file_name, why: '읽기 실패' }); }
      }
      const notSubmitted = stagesFor(s).filter(g => !s[g.key].file_path).map(g => g.full);
      /* 이름 가리기: 이름(성 포함)과 이름만(성 뺀 두 글자) 모두 '학생'으로 */
      const hide = t => {
        if (!mask || !t) return t;
        let out = t;
        const nm = (s.name || '').trim();
        const keys = [nm, nm.length >= 3 ? nm.slice(1) : ''].filter(k => k.length >= 2);
        keys.forEach(k => { out = out.split(k).join('○○'); });
        if (s.sid) out = out.split(s.sid).join('(학번)');
        if (s.email) out = out.split(s.email).join('(이메일)');
        return out;
      };
      const fbText = withFb ? stagesFor(s).flatMap(g => s.ev[g.key].filter(e => e.kind === 'feedback' && e.note).map(e => `- ${g.full} (${fmtDate(e.created_at)}): ${e.note}`)).join('\n') : '';
      const prompt = `아래는 고등학생의 개인연구 제출물입니다. 이 자료만 근거로 학교생활기록부 '${area}'${subject ? `(${subject})` : ''}에 쓸 초안을 공백 포함 ${length}자 이내로 써 주세요.

지켜 주세요:
1. 제출물에 실제로 드러난 내용만 근거로 쓰고, 없는 활동·결과·성과를 지어내거나 부풀리지 마세요.
2. 학생 이름 없이 주어를 생략하고, '~함', '~임', '~보임'처럼 교사의 관찰 문체로 끝맺어 주세요.
3. 탐구 동기 → 탐구 과정(자료, 방법, 분석) → 결과와 결론 → 드러난 역량과 성장 순서로 써 주세요. 구체적인 개념·방법·수치가 있으면 살려 주세요.
4. 학교생활기록부 기재요령의 금지 사항(교외 수상, 논문·학회지 투고나 등재, 도서 출간, 특허 등 지식재산권, 공인어학시험, 교외 인증, 부모의 사회경제적 지위, 대학명·기관명·상호명, 사교육 관련 내용)은 쓰지 마세요.
5. 답은 ① 생기부 초안 ② 초안의 근거가 된 제출물 내용(항목별 한 줄) ③ 교사가 확인하면 좋을 점 순서로 주세요.

`;
      const body = [
        `[연구 주제] ${hide(s.topic || '(없음)')}${s.field ? `\n[연구 분야] ${s.field}` : ''}`,
        ...sections.map(x => `\n===== ${x.label} =====\n${hide(x.text)}`),
        fbText ? `\n===== 선생님 피드백 기록 =====\n${hide(fbText)}` : '',
        files.length ? `\n(글로 옮기지 못한 제출물: ${files.map(f => `${f.label} - ${f.name}`).join(', ')} → 파일을 따로 첨부함)` : '',
        notSubmitted.length ? `\n(아직 제출하지 않은 항목: ${notSubmitted.join(', ')})` : ''
      ].filter(Boolean).join('\n');
      const text = (withPrompt ? prompt : '') + body;
      if (!this.ai || this.ai.sid !== id) return;
      this.ai.pack = { text, files };
      this.ai.busy = false;
      this.ai.msg = sections.length ? `완료. 제출물 ${sections.length}개를 글로 정리했어요.` : '글로 옮길 수 있는 제출물이 없어요. 아래 파일을 AI 채팅에 직접 첨부하세요.';
      if (!this.ai.row) this.ai.row = { area, subject, length_limit: length, draft: keepDraft };
      else Object.assign(this.ai.row, { area, subject, length_limit: length, draft: keepDraft });
      const box = $('aiBox');
      if (box) { box.outerHTML = this.aiHTML(); this.bindAI(); }
      ['aiMask', 'aiPrompt', 'aiFb'].forEach((k, j) => { const el = $(k); if (el) el.checked = [mask, withPrompt, withFb][j]; });
      toast('요약 자료를 만들었습니다.');
    } catch (e) {
      if (this.ai && this.ai.sid === id) { this.ai.busy = false; setMsg(''); const b = $('aiGo'); if (b) b.disabled = false; }
      toast(e.message || '요약 자료를 만들지 못했습니다.');
    }
  },

  /* ----- 공지사항 ----- */
  anns: [], annEdit: null,

  async openAnn() {
    $('annIntro').textContent = this.isAdmin
      ? '‘내 담당 학생에게’ 공지는 선생님 담당 학생에게만, ‘전체 학생에게’ 공지는 모든 학생 화면 맨 위에 보입니다.'
      : '여기에 쓴 공지는 선생님 담당 학생들의 화면 맨 위에 보입니다.';
    $('annAud').hidden = !this.isAdmin;
    $('annListT').textContent = this.isAdmin ? '게시된 공지 (모든 선생님)' : '내가 게시한 공지';
    this.resetAnnForm();
    this.openModal('mAnn');
    await this.loadAnns();
  },

  resetAnnForm() {
    this.annEdit = null;
    $('annTitle').value = ''; $('annBody').value = ''; $('annPin').checked = false; $('annAud').value = 'mine';
    $('annGo').textContent = '게시';
    $('annCancel').hidden = true;
  },

  async loadAnns() {
    const list = $('annList');
    const { data, error } = await sb.from('announcements').select('*').order('created_at', { ascending: false });
    if (error) { list.innerHTML = `<li class="hint">공지를 불러오지 못했습니다. ${esc(dbMsg(error))}</li>`; return; }
    this.anns = data || [];
    if (!this.anns.length) { list.innerHTML = '<li class="hint">아직 게시한 공지가 없습니다.</li>'; return; }
    const sorted = [...this.anns].sort((a, b) => (b.pinned - a.pinned) || b.created_at.localeCompare(a.created_at));
    list.innerHTML = sorted.map(a => `<li>
      <div class="ann-meta">
        <span class="tpl-place">${a.audience === 'all' ? '전체 학생' : esc(a.teacher_email === this.email ? '내 담당 학생' : (a.author_name || this.tName(a.teacher_email)) + ' 선생님 담당')}</span>
        ${a.pinned ? '<span class="tpl-place pin">고정</span>' : ''}
        <span class="hint">${fmtDT(a.created_at)}${a.updated_at && a.updated_at > a.created_at ? ' (수정됨)' : ''}${a.teacher_email !== this.email ? ` · ${esc(a.author_name || this.tName(a.teacher_email))}` : ''}</span>
        <span class="spacer"></span>
        <button class="btn sm" data-annedit="${esc(a.id)}">수정</button>
        <button class="btn sm danger" data-anndel="${esc(a.id)}">삭제</button>
      </div>
      <b class="ann-title">${esc(a.title)}</b>
      ${a.body ? `<div class="ann-body">${esc(a.body)}</div>` : ''}
    </li>`).join('');
    list.querySelectorAll('[data-annedit]').forEach(b => b.onclick = () => {
      const a = this.anns.find(x => x.id === b.dataset.annedit);
      this.annEdit = a.id;
      $('annTitle').value = a.title; $('annBody').value = a.body || ''; $('annPin').checked = !!a.pinned; $('annAud').value = a.audience;
      $('annGo').textContent = '수정 저장';
      $('annCancel').hidden = false;
      $('annTitle').focus();
    });
    list.querySelectorAll('[data-anndel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const { error: e2 } = await sb.from('announcements').delete().eq('id', b.dataset.anndel);
      if (e2) { toast(dbMsg(e2)); return; }
      if (this.annEdit === b.dataset.anndel) this.resetAnnForm();
      toast('공지를 삭제했습니다.');
      this.loadAnns();
    });
  },

  async saveAnn() {
    const title = $('annTitle').value.trim();
    const body = $('annBody').value.trim();
    if (!title) { toast('제목을 입력하세요.'); $('annTitle').focus(); return; }
    const audience = this.isAdmin ? $('annAud').value : 'mine';
    const row = { title, body, pinned: $('annPin').checked, audience, updated_at: new Date().toISOString() };
    $('annGo').disabled = true;
    let error;
    if (this.annEdit) ({ error } = await sb.from('announcements').update(row).eq('id', this.annEdit));
    else ({ error } = await sb.from('announcements').insert({ ...row, teacher_email: this.email, author_name: this.tName(this.email) }));
    $('annGo').disabled = false;
    if (error) { toast(dbMsg(error)); return; }
    toast(this.annEdit ? '공지를 수정했습니다.' : (audience === 'all' ? '전체 학생에게 공지를 게시했습니다.' : '담당 학생들에게 공지를 게시했습니다.'));
    this.resetAnnForm();
    this.loadAnns();
  },

  /* ----- 담당 배정 ----- */
  openAssign() {
    const sel = $('asTeacher');
    sel.innerHTML = this.teachers.map(t => `<option value="${esc(t.email)}">${esc(this.tName(t.email))} 선생님 (${esc(t.email)})</option>`).join('');
    const ft = $('fteacher').value;
    if (ft && ft !== '__none') sel.value = ft;
    $('asMsg').textContent = '';
    this.renderAssign();
    this.openModal('mAssign');
  },

  renderAssign() {
    const te = $('asTeacher').value;
    const list = [...this.students.values()].sort((a, b) => (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }));
    $('asList').innerHTML = list.map(s => `<li><label>
      <input type="checkbox" data-st="${esc(s.id)}" ${s.teacher_email ? `data-cur="${esc(s.teacher_email)}"` : ''} ${s.teacher_email === te ? 'checked' : ''}>
      <span class="sid">${esc(s.sid || '')}</span> <span class="nm">${esc(s.name)}</span>
      <span class="tch${s.teacher_email ? '' : ' none'}">${s.teacher_email ? (s.teacher_email === te ? '이 선생님' : esc(this.tName(s.teacher_email))) : '미배정'}</span>
    </label></li>`).join('');
    const upd = () => { $('asMsg').textContent = `${$('asList').querySelectorAll('input:checked').length}명 선택`; };
    $('asList').querySelectorAll('input').forEach(c => c.onchange = upd);
    upd();
  },

  async saveAssign() {
    const te = $('asTeacher').value;
    if (!te) return;
    const boxes = [...$('asList').querySelectorAll('input[data-st]')];
    const add = boxes.filter(c => c.checked && c.dataset.cur !== te).map(c => c.dataset.st);
    const remove = boxes.filter(c => !c.checked && c.dataset.cur === te).map(c => c.dataset.st);
    if (!add.length && !remove.length) { this.closeModal('mAssign'); return; }
    $('asGo').disabled = true;
    try {
      if (add.length) { const { error } = await sb.from('students').update({ teacher_email: te }).in('id', add); if (error) throw error; }
      if (remove.length) { const { error } = await sb.from('students').update({ teacher_email: null }).in('id', remove); if (error) throw error; }
      await this.load();
      this.renderAll();
      this.closeModal('mAssign');
      toast(`${this.tName(te)} 선생님 담당: ${add.length}명 추가${remove.length ? `, ${remove.length}명 해제` : ''}`);
    } catch (e) { toast(dbMsg(e)); }
    finally { $('asGo').disabled = false; }
  },

  /* ----- 양식 관리 ----- */
  templates: [],

  renderTemplates() {
    const list = $('tList');
    if (!this.templates.length) { list.innerHTML = '<li class="hint">아직 올린 양식이 없습니다.</li>'; return; }
    const order = Object.fromEntries(TPL_PLACES.map(([k], i) => [k, i]));
    const items = [...this.templates].sort((a, b) => (order[a.stage] ?? 99) - (order[b.stage] ?? 99) || a.created_at.localeCompare(b.created_at));
    list.innerHTML = items.map(t => `<li>
      <span class="tpl-place">${esc(tplPlace(t.stage))}</span>
      <span class="tpl-name">${esc(t.title || t.file_name)}${t.title && t.title !== t.file_name ? `<small>${esc(t.file_name)}</small>` : ''}</span>
      <button class="btn sm" data-tdl="${esc(t.id)}">내려받기</button>
      <button class="btn sm danger" data-tdel="${esc(t.id)}">삭제</button></li>`).join('');
    list.querySelectorAll('[data-tdl]').forEach(b => b.onclick = () => downloadTemplate(this.templates.find(t => t.id === b.dataset.tdl)));
    list.querySelectorAll('[data-tdel]').forEach(b => b.onclick = async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = '정말 삭제'; setTimeout(() => { if (b.isConnected) { b.classList.remove('armed'); b.textContent = '삭제'; } }, 3000); return; }
      const t = this.templates.find(x => x.id === b.dataset.tdel);
      const { error } = await sb.from('templates').delete().eq('id', t.id);
      if (error) { toast(dbMsg(error)); return; }
      await sb.storage.from(BUCKET).remove([t.file_path]);
      this.templates = this.templates.filter(x => x.id !== t.id);
      this.renderTemplates();
      toast('양식을 삭제했습니다.');
    });
  },

  async uploadTemplate() {
    const file = $('tFile').files[0];
    if (!file) { toast('먼저 파일을 고르세요.'); return; }
    if (file.size > MAX_MB * 1024 * 1024) { toast(`파일이 ${MAX_MB}MB보다 큽니다.`); return; }
    const ext = (file.name.includes('.') ? file.name.split('.').pop() : 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'bin';
    const path = `templates/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const btn = $('tGo');
    btn.disabled = true; btn.textContent = '올리는 중입니다';
    try {
      const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type || 'application/octet-stream' });
      if (upErr) throw upErr;
      const row = { stage: $('tStage').value, title: $('tTitle').value.trim() || file.name, file_path: path, file_name: file.name };
      const { data, error } = await sb.from('templates').insert(row).select().single();
      if (error) throw error;
      this.templates.push(data);
      $('tFile').value = ''; $('tTitle').value = ''; $('tPicked').textContent = '';
      this.renderTemplates();
      toast(`‘${tplPlace(row.stage)}’ 칸에 양식을 올렸습니다.`);
    } catch (e) {
      toast(e && e.message ? '양식을 올리지 못했습니다: ' + e.message : '양식을 올리지 못했습니다.');
    } finally {
      btn.disabled = false; btn.textContent = '양식 올리기';
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
        inserts.push({ sid: r.sid || null, name: r.name, email: r.email || null, topic: r.topic, cls: clsFromSid(r.sid) || null, ...(this.isAdmin ? {} : { teacher_email: this.email }) });
      } else problems.push(r.sid);
    }
    const btn = $('bulkGo');
    btn.disabled = true;
    let ok = 0;
    const now = new Date().toISOString();
    /* 한 명씩 넣어서, 다른 선생님 담당 학생과 겹치는 줄만 건너뜁니다 */
    for (const x of inserts) {
      const { error } = await sb.from('students').insert({ ...x, updated_at: now });
      if (error) problems.push(x.sid || x.name); else ok++;
      $('bulkMsg').textContent = `${ok}명 반영 중`;
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
      $('bulkMsg').textContent = `반영하지 못한 줄: ${problems.filter(Boolean).join(', ') || '이름 없는 줄'} (이미 다른 선생님 담당이거나 같은 이메일이 있을 수 있어요)`;
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
    $('sIntro').value = dueFrom(this.settings, 'intro_due') || '';
    $('sBody').value = dueFrom(this.settings, 'body_due') || '';
    $('sConclusion').value = dueFrom(this.settings, 'conclusion_due') || '';
    $('sExtra').value = this.settings.extra_due || '';
    $('sOutput').value = this.settings.output_due || '';
    this.openModal('mSet');
  },
  async saveSettings() {
    const c = { program_name: $('sName').value.trim() || null, plan_due: $('sPlan').value || null, intro_due: $('sIntro').value || null, body_due: $('sBody').value || null, conclusion_due: $('sConclusion').value || null, report_due: null, extra_due: $('sExtra').value || null, output_due: $('sOutput').value || null };
    const { error } = await sb.from('settings').update(c).eq('id', 1);
    if (error) { toast(dbMsg(error)); return; }
    this.settings = { ...this.settings, ...c };
    this.closeModal('mSet');
    this.renderAll();
    toast('설정을 저장했습니다.');
  },
  csvRoster(list) {
    const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    const lastNote = arr => (arr.find(e => e.kind === 'feedback' && e.note) || {}).note || '';
    const head = ['학번', '이름', '반', '담당 교사', '이메일', '연구 분야', '연구 주제', ...STAGES.flatMap(g => [g.full + ' 상태', g.full + ' 제출일', g.full + ' 최근 피드백']), '개인정보 동의일', '지도 메모'];
    const lines = [head.map(q).join(',')].concat(list.map(s => [
      s.sid, s.name, s.cls, this.tName(s.teacher_email), s.email, s.field, s.topic,
      ...STAGES.flatMap(g => applies(s, g) ? [ST[s[g.key].status].label, dateOf(s[g.key].submitted_at), lastNote(s.ev[g.key])] : ['해당 없음', '', '']), hasConsent(s) ? dateOf(s.consent_at) : '', s.memo
    ].map(q).join(',')));
    return '\uFEFF' + lines.join('\r\n');
  },

  csvFeedback(list) {
    const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    const kind = { submit: '학생 제출', feedback: '피드백', status: '상태 변경' };
    const rows = [['학번', '이름', '항목', '시각', '종류', '상태', '내용·파일', '학생 읽음'].map(q).join(',')];
    list.forEach(s => stagesFor(s).forEach(g => [...s.ev[g.key]].sort((a, b) => a.created_at.localeCompare(b.created_at)).forEach(e => rows.push([
      s.sid, s.name, g.full, fmtDT(e.created_at), kind[e.kind] || e.kind, e.status ? ST[e.status].label : '',
      e.kind === 'submit' ? (e.file_name || '') : (e.note || ''), e.kind === 'feedback' ? (e.seen_at ? fmtDT(e.seen_at) : '안 읽음') : ''
    ].map(q).join(',')))));
    return '\uFEFF' + rows.join('\r\n');
  },

  sortedStudents(list) {
    return [...list].sort((a, b) => (a.sid || '~').localeCompare(b.sid || '~', undefined, { numeric: true }));
  },

  openZip() {
    const shown = [...this.students.values()].filter(s => this.matches(s)).length;
    $('zAllLabel').textContent = `${this.isAdmin ? '전체' : '내 담당 전체'} ${this.students.size}명`;
    $('zShownLabel').textContent = `지금 목록에 보이는 학생 ${shown}명`;
    $('zStages').innerHTML = STAGES.map(g => `<label class="agree small" style="margin:0"><input type="checkbox" value="${g.key}" checked> <span>${g.full}</span></label>`).join('');
    $('zProg').hidden = true;
    $('zGo').disabled = false;
    const count = () => {
      const o = this.zipOptions();
      const n = this.zipPlan(o).files.length;
      $('zCount').textContent = `파일 ${n}개`;
    };
    $('mZip').querySelectorAll('input').forEach(i => i.onchange = count);
    count();
    this.openModal('mZip');
  },

  zipOptions() {
    const scope = (app.querySelector('input[name="zScope"]:checked') || {}).value || 'all';
    const list = scope === 'shown' ? [...this.students.values()].filter(s => this.matches(s)) : [...this.students.values()];
    return {
      ids: list.map(s => s.id),
      stages: [...$('zStages').querySelectorAll('input:checked')].map(i => i.value),
      layout: (app.querySelector('input[name="zLayout"]:checked') || {}).value || 'student',
      old: $('zOld').checked
    };
  },

  zipPlan(o) {
    const files = [];
    const list = this.sortedStudents(o.ids.map(id => this.students.get(id)).filter(Boolean));
    const order = Object.fromEntries(STAGES.map((g, i) => [g.key, i + 1]));
    list.forEach(s => {
      const who = safeName(`${s.sid || ''}_${s.name}`.replace(/^_/, ''));
      stagesFor(s).filter(g => o.stages.includes(g.key)).forEach(g => {
        const cur = s[g.key];
        const stageLabel = `${order[g.key]}_${g.full.replace('최종보고서 ', '').replace(/^\d+\.\s*/, '')}`;
        const dir = o.layout === 'stage' ? safeName(stageLabel) : who;
        const base = o.layout === 'stage' ? who : safeName(stageLabel);
        if (cur.file_path) files.push({ path: cur.file_path, name: `${dir}/${base}_${safeName(cur.file_name || 'file')}` });
        if (o.old) {
          s.ev[g.key].filter(e => e.kind === 'submit' && e.file_path && e.file_path !== cur.file_path)
            .forEach(e => files.push({ path: e.file_path, name: `${dir}/이전 제출/${base}_${dateOf(e.created_at)}_${safeName(e.file_name || 'file')}` }));
        }
      });
    });
    return { list, files };
  },

  async runZip(opts) {
    const o = opts || this.zipOptions();
    const { list, files } = this.zipPlan(o);
    if (!list.length) { toast('받을 학생이 없습니다.'); return; }
    const single = o.ids.length === 1;
    const go = $('zGo');
    if (!single) { go.disabled = true; $('zProg').hidden = false; }
    const prog = (i, n, msg) => {
      if (single) { $('dMsg').textContent = msg; return; }
      $('zBar').style.width = (n ? i / n * 100 : 100) + '%';
      $('zMsg').textContent = msg;
    };
    try {
      const Z = await loadZipLib();
      const root = single ? safeName(`${list[0].sid || ''}_${list[0].name}_제출물_${todayStr()}`) : `개인연구_제출물_${todayStr()}`;
      const entries = {};
      const used = new Set();
      const missing = [];
      let done = 0;
      const queue = [...files];
      const worker = async () => {
        while (queue.length) {
          const f = queue.shift();
          try {
            const blob = await downloadBlob(f.path);
            let name = `${root}/${f.name}`;
            for (let k = 2; used.has(name); k++) name = `${root}/${f.name.replace(/(\.[^./]+)?$/, ` (${k})$1`)}`;
            used.add(name);
            entries[name] = [new Uint8Array(await blob.arrayBuffer()), { level: 0 }];
          } catch (e) { missing.push(f.name); }
          done++;
          prog(done, files.length, `파일 받는 중 ${done} / ${files.length}`);
        }
      };
      prog(0, files.length, files.length ? `파일 받는 중 0 / ${files.length}` : '파일 정리 중');
      await Promise.all([worker(), worker(), worker()]);
      entries[`${root}/명단_제출현황.csv`] = Z.strToU8(this.csvRoster(list));
      entries[`${root}/피드백_기록.csv`] = Z.strToU8(this.csvFeedback(list));
      if (missing.length) entries[`${root}/받지 못한 파일.txt`] = Z.strToU8('아래 파일은 받지 못했습니다 (삭제되었거나 권한이 없음).\r\n\r\n' + missing.join('\r\n'));
      prog(files.length, files.length, '압축하는 중');
      const zipped = Z.zipSync(entries);
      saveBlob(new Blob([zipped], { type: 'application/zip' }), `${root}.zip`);
      const mb = (zipped.length / 1048576).toFixed(1);
      prog(files.length, files.length, `완료: 파일 ${files.length - missing.length}개, ${mb}MB${missing.length ? ` (받지 못한 파일 ${missing.length}개)` : ''}`);
      toast(`zip 파일을 저장했습니다 (${mb}MB).`);
    } catch (e) {
      toast('내려받기를 준비하지 못했습니다. 잠시 후 다시 시도하세요.');
      prog(0, 0, '');
    } finally {
      go.disabled = false;
    }
  },

  exportCsv() {
    const list = this.sortedStudents(this.students.values());
    const blob = new Blob([this.csvRoster(list)], { type: 'text/csv;charset=utf-8' });
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
    if (!this.me.teacher_email && await this.renderPickTeacher()) return;
    this.render();
    this.markSeen();
  },

  /* 처음 한 번 담당 선생님 고르기. 화면을 그렸으면 true */
  async renderPickTeacher() {
    const { data, error } = await sb.rpc('teacher_choices');
    if (error || !data || !data.length) return false;
    const me = this.me;
    app.innerHTML = `${topBar(this.email)}
      <div class="consent pick">
        <h1>담당 선생님 선택</h1>
        <p class="sub">${esc(me.name)} 학생, 개인연구를 지도받을 담당 선생님을 골라 주세요. 선생님이 제출물을 확인하고 피드백을 남겨 줍니다.</p>
        <div class="pick-list" role="radiogroup" aria-label="담당 선생님">
          ${data.map(t => `<label class="pick-item"><input type="radio" name="pickT" value="${esc(t.email)}"><span>${esc(t.name)} 선생님</span></label>`).join('')}
        </div>
        <p class="hint">한 번 고르면 직접 바꿀 수 없어요. 잘못 골랐다면 선생님께 말씀드리면 바꿔 주십니다.</p>
        <div class="consent-actions"><button class="btn primary" id="pickGo" disabled>이 선생님으로 정하기</button></div>
      </div>`;
    bindLogout();
    app.querySelectorAll('input[name="pickT"]').forEach(r => r.onchange = () => {
      $('pickGo').disabled = false;
      app.querySelectorAll('.pick-item').forEach(l => l.classList.toggle('on', l.querySelector('input').checked));
    });
    $('pickGo').onclick = async () => {
      const sel = app.querySelector('input[name="pickT"]:checked');
      if (!sel) return;
      $('pickGo').disabled = true;
      const { error: e2 } = await sb.rpc('choose_my_teacher', { p_email: sel.value });
      if (e2) { toast(e2.message || '저장하지 못했습니다. 다시 눌러 주세요.'); $('pickGo').disabled = false; return; }
      try { await this.load(); } catch (e) { this.me.teacher_email = sel.value; }
      this.render();
      this.markSeen();
      toast('담당 선생님을 정했습니다. 이제 제출할 수 있습니다.');
    };
    return true;
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
      if (!this.me.teacher_email && await this.renderPickTeacher()) { toast('동의했습니다. 담당 선생님을 골라 주세요.'); return; }
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
      sb.from('settings').select('*').eq('id', 1).maybeSingle(),
      sb.from('templates').select('*').order('created_at', { ascending: true })
    ]);
    const bad = res.slice(0, -1).find(r => r.error);
    if (bad) throw bad.error;
    const [me, subs, events, set, tpls] = res.map(r => r.data);
    this.templates = tpls || [];
    const an = await sb.from('announcements').select('*').order('created_at', { ascending: false });
    this.anns = an.error ? [] : (an.data || []);
    const tn = await sb.rpc('my_teacher_name');
    this.teacherName = tn.error ? '' : (tn.data || '');
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

  annHTML() {
    const list = [...(this.anns || [])].sort((a, b) => (b.pinned - a.pinned) || b.created_at.localeCompare(a.created_at));
    if (!list.length) return '';
    const isNew = a => Date.now() - new Date(a.updated_at || a.created_at) < 3 * 86400000;
    const item = (a, i) => `<details class="ann" ${i === 0 || a.pinned ? 'open' : ''}>
      <summary>${a.pinned ? '<span class="ann-pin">📌</span>' : ''}<span class="ann-t">${esc(a.title)}</span>${isNew(a) ? '<span class="newb">새 공지</span>' : ''}
        <span class="ann-by">${a.audience === 'all' ? '전체 공지' : esc(a.author_name || '담당') + ' 선생님'} · ${fmtDate(a.created_at)}</span></summary>
      ${a.body ? `<div class="ann-body">${esc(a.body)}</div>` : ''}
    </details>`;
    const shown = list.slice(0, 3), more = list.slice(3);
    return `<section class="ann-board" aria-label="공지사항">
      <h2>공지사항</h2>
      ${shown.map(item).join('')}
      ${more.length ? `<div class="ann-more" hidden>${more.map((a, i) => item(a, i + 3)).join('')}</div><button class="linkbtn" id="annMore">이전 공지 ${more.length}개 더 보기</button>` : ''}
    </section>`;
  },

  progressHTML() {
    const items = stagesFor(this.me);
    const rows = items.map(g => {
      const sub = this.subs[g.key] || {};
      const k = sub.status || 'none';
      const due = dueFrom(this.settings, g.due);
      const dd = dday(due);
      const unread = this.events.filter(e => e.stage === g.key && this.unseen.has(e.id)).length;
      return { g, k, due, dd, unread };
    });
    const done = rows.filter(r => r.k === 'done').length;
    const submitted = rows.filter(r => r.k !== 'none').length;
    const label = g => g.group === 'report' ? g.label : g.full;

    /* 다음에 할 일: 보완 요청 → 안 읽은 피드백 → 마감 지난 미제출 → 마감 가까운 미제출 */
    const todo = [];
    rows.filter(r => r.k === 'revise').forEach(r => todo.push({ g: r.g, cls: 'rev', text: `<b>${label(r.g)}</b> 보완 요청을 받았어요. 피드백을 보고 수정본을 다시 제출하세요.` }));
    rows.filter(r => r.unread && r.k !== 'revise').forEach(r => todo.push({ g: r.g, cls: 'new', text: `<b>${label(r.g)}</b>에 새 피드백이 있어요.` }));
    rows.filter(r => r.k === 'none' && r.dd !== null && r.dd < 0).forEach(r => todo.push({ g: r.g, cls: 'late', text: `<b>${label(r.g)}</b> 마감(${fmtDate(r.due)})이 지났어요. 지금이라도 제출하고 선생님께 말씀드리세요.` }));
    rows.filter(r => r.k === 'none' && !(r.dd !== null && r.dd < 0)).sort((a, b) => (a.dd ?? 9999) - (b.dd ?? 9999)).slice(0, 2)
      .forEach(r => todo.push({ g: r.g, cls: '', text: `<b>${label(r.g)}</b> 제출하기${r.due ? ` · 마감 ${fmtDate(r.due)} ${r.dd === 0 ? '(오늘)' : `(D-${r.dd})`}` : ''}` }));
    const waiting = rows.filter(r => r.k === 'waiting').map(r => label(r.g));

    const seg = rows.map(r => `<span class="pg-seg ${r.k}" title="${label(r.g)}: ${ST[r.k].label}"></span>`).join('');
    const tiles = rows.map(r => `<button class="pg-tile ${r.k}" data-goto="${r.g.key}">
        <span class="pg-name">${label(r.g)}${r.unread ? '<i class="pg-dot" aria-label="새 피드백"></i>' : ''}</span>
        <span class="pill ${r.k}">${ST[r.k].label}</span>
        <span class="pg-due">${r.due ? `${fmtDate(r.due)} ${r.k === 'none' ? ddayTag(r.due) : ''}` : '마감 미정'}</span>
      </button>`).join('');
    const msg = done === rows.length ? '모든 제출물이 확인 완료됐어요. 수고했어요!'
      : todo.length ? '' : waiting.length ? `${waiting.join(', ')}은(는) 선생님이 확인하고 있어요. 피드백이 오면 여기에 표시돼요.` : '';
    return `<section class="progress" aria-label="나의 진행 상황">
      <div class="pg-head">
        <h2>나의 진행 상황</h2>
        <div class="pg-num"><b>${done}</b> / ${rows.length} 확인 완료 <span>· 제출 ${submitted}개</span></div>
      </div>
      <div class="pg-bar">${seg}</div>
      <div class="pg-tiles">${tiles}</div>
      ${todo.length ? `<div class="pg-todo"><h3>다음에 할 일</h3><ul>${todo.map(t => `<li class="${t.cls}"><button class="linkbtn plain" data-goto="${t.g.key}">${t.text}</button></li>`).join('')}</ul></div>` : ''}
      ${msg ? `<p class="pg-msg">${msg}</p>` : ''}
    </section>`;
  },

  topicView() {
    const t = this.me.topic;
    return t
      ? `<span>연구 주제: <b>${esc(t)}</b></span> <button class="linkbtn" id="tEdit">수정</button>`
      : `<span>연구 주제가 아직 등록되지 않았습니다.</span> <button class="linkbtn" id="tEdit">연구 주제 입력</button>`;
  },

  bindTopic() {
    const box = $('topicBox');
    const edit = $('tEdit');
    if (!edit) return;
    edit.onclick = () => {
      box.innerHTML = `<label class="l" for="tInput">연구 주제</label>
        <textarea class="in" id="tInput" rows="2" maxlength="300">${esc(this.me.topic || '')}</textarea>
        <div class="topic-actions"><span class="hint" id="tCount"></span><button class="btn" id="tCancel">취소</button><button class="btn primary" id="tSave">저장</button></div>`;
      const ta = $('tInput');
      const count = () => { $('tCount').textContent = `${ta.value.trim().length} / 300자`; };
      count();
      ta.oninput = count;
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
      $('tCancel').onclick = () => { box.innerHTML = this.topicView(); this.bindTopic(); };
      $('tSave').onclick = async () => {
        const v = ta.value.trim();
        if (!v) { toast('연구 주제를 입력하세요.'); ta.focus(); return; }
        if (v === (this.me.topic || '')) { box.innerHTML = this.topicView(); this.bindTopic(); return; }
        $('tSave').disabled = true;
        const { error } = await sb.rpc('update_my_topic', { p_topic: v });
        if (error) { toast(error.message || '연구 주제를 저장하지 못했습니다.'); $('tSave').disabled = false; return; }
        this.me.topic = v;
        box.innerHTML = this.topicView();
        this.bindTopic();
        toast('연구 주제를 수정했습니다. 선생님 화면에도 바로 반영됩니다.');
      };
    };
  },

  tplLinks(stage, big) {
    const ts = (this.templates || []).filter(t => t.stage === stage);
    if (!ts.length) return '';
    return `<div class="tpls${big ? ' big' : ''}"><span class="tpls-l">📎 양식 내려받기</span>${ts.map(t => `<button class="tpl" data-tpl="${esc(t.id)}">${esc(t.title || t.file_name)}</button>`).join('')}</div>`;
  },

  card(g) {
    const sub = this.subs[g.key] || { status: 'none' };
    const k = sub.status || 'none';
    const due = dueFrom(this.settings, g.due);
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
      <p class="due">${g.desc && (g.group === 'report' || g.group === 'output') ? `<b>${g.desc}</b><br>` : ''}${due ? `마감 ${fmtDate(due)}${ddayTag(due)}` : '마감일 미정'}</p>
      ${this.tplLinks(g.key)}
      <div class="status-line"><span class="pill ${k}">${ST[k].label}</span>${sub.submitted_at ? `<span class="hint">${fmtDT(sub.submitted_at)} 제출</span>` : ''}</div>
      <p class="hint" style="margin-bottom:12px">${guide}</p>
      ${sub.file_path ? `<div class="filebox"><span class="fn">📄 ${esc(sub.file_name || '제출 파일')}</span><button class="btn sm" data-open="${esc(sub.file_path)}">열기</button></div>` : ''}
      ${canSubmit ? `<div class="upload" data-drop="${g.key}">
          <button class="btn primary" data-pick="${g.key}">${sub.file_path ? '수정본 제출하기' : '파일 선택해서 제출하기'}</button>
          <input type="file" accept="${acceptFor(g)}" data-file="${g.key}">
          <p>${g.key === 'output' ? '사진, PDF, 한글, 발표자료(PPT), 영상(mp4) 모두 올릴 수 있어요. 여러 파일은 zip으로 묶어 주세요.' : '한글(.hwp, .hwpx) 또는 PDF로 내면 선생님이 화면에서 바로 읽고 피드백을 줄 수 있어요.'} 최대 ${MAX_MB}MB, 파일을 여기로 끌어다 놓아도 됩니다.</p>
        </div>` : ''}
      ${timeline ? `<ul class="hist">${timeline}</ul>` : ''}
    </section>`;
  },

  render() {
    const me = this.me;
    app.innerHTML = `${topBar(this.email)}
      <header class="top"><div>
        <h1>${esc(me.name)}</h1>
        <p class="sub">${esc(me.sid || '')}${me.cls ? ` · ${esc(me.cls)}반` : ''} · ${esc(this.settings.program_name || '개인연구')}${this.teacherName ? ` · 담당 <b>${esc(this.teacherName)}</b> 선생님` : ''}</p>
        <div class="me-topic" id="topicBox">${this.topicView()}</div>
      </div></header>
      ${this.annHTML()}
      ${this.progressHTML()}
      ${this.tplLinks('all', true)}
      <h2 class="group-title">연구계획서 <span>연구 주제, 연구 목적, 연구 방법과 일정을 담은 계획서를 한글 파일로 올리세요.</span></h2>
      <div class="cards one">${this.card(PLAN)}</div>
      <h2 class="group-title">최종보고서 <span>세 부분을 각각 한글 파일로 올리세요. 부분마다 마감일이 다를 수 있어요.</span></h2>
      ${this.tplLinks('report', true)}
      <div class="cards three">${PARTS.map(g => this.card(g)).join('')}</div>
      ${me.extra_required ? `<h2 class="group-title">개인연구보고서 <span>실험 대상 학생은 개인연구보고서도 한글 파일로 제출하세요</span></h2>
      <div class="cards one">${this.card(EXTRA)}</div>` : ''}
      <h2 class="group-title">산출물 <span>연구 과정에서 만든 결과물을 올리세요. 여러 파일이면 zip으로 묶어서 올리면 됩니다.</span></h2>
      <div class="cards one">${this.card(OUTPUT)}</div>`;
    bindLogout();
    app.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openFile(b.dataset.open));
    this.bindTopic();
    const am = $('annMore');
    if (am) am.onclick = () => { app.querySelector('.ann-more').hidden = false; am.remove(); };
    app.querySelectorAll('[data-goto]').forEach(b => b.onclick = () => {
      const card = app.querySelector(`.card[data-stage="${b.dataset.goto}"]`);
      if (!card) return;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      card.classList.add('flash');
      setTimeout(() => card.classList.remove('flash'), 1200);
    });
    app.querySelectorAll('[data-tpl]').forEach(b => b.onclick = () => downloadTemplate(this.templates.find(t => t.id === b.dataset.tpl)));
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
    const allowed = acceptFor({ key: stage }).split(',').map(x => x.slice(1));
    if (!allowed.includes(ext)) { toast(stage === 'output' ? '올릴 수 없는 파일 형식입니다. 여러 파일은 zip으로 묶어서 올려 주세요.' : '올릴 수 없는 파일 형식입니다. 한글, PDF, 워드, 파워포인트로 올려 주세요.'); return; }
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
 toast(stage === 'output' || ['hwp', 'hwpx', 'pdf'].includes(ext) ? '제출했습니다. 선생님 피드백은 이 화면에 표시됩니다.' : '제출했습니다. 다만 이 형식은 선생님 화면에서 바로 열리지 않을 수 있어요. 가능하면 한글이나 PDF로 다시 내 주세요.');
    } catch (e) {
      toast(e.message || '제출하지 못했습니다. 잠시 후 다시 시도하세요.');
      if (btn) { btn.disabled = false; btn.textContent = '파일 선택해서 제출하기'; }
    } finally {
      this.busy = false;
    }
  }
};
