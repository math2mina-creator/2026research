// ===== 사이트 설정 =====
// Supabase 대시보드 > Project Settings > API (또는 API Keys) 에서 복사해 넣으세요.
window.APP_CONFIG = {
  // 예: "https://abcdefghijk.supabase.co"
  SUPABASE_URL: "https://vrwswusrqfjwvezbvdbc.supabase.co",

  // "anon public" 키 (또는 sb_publishable_ 로 시작하는 Publishable 키)
  // 이 키는 공개돼도 괜찮습니다. service_role / secret 키는 절대 넣지 마세요.
  SUPABASE_ANON_KEY: "sb_publishable_fGd9peSGuN2qr9FZz9GI-g_iMigjLVp",

  // 학교 구글 계정 도메인 (예: ""). 로그인 창에서 학교 계정을 먼저 보여 줍니다.
  // 비워 두면 모든 구글 계정 선택 창이 뜹니다. (어느 경우든 명단에 없는 계정은 아무것도 볼 수 없습니다.)
  SCHOOL_DOMAIN: ""
};
