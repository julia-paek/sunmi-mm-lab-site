/* ═══════════════════════════════════════════════════════════
   MM LAB — 공통 컴포넌트 (한 곳만 고치면 전 브랜드 페이지 반영)
   주입: 관련 브랜드(#mm-related) · CTA 블랙 밴드(#mm-cta)
        · 푸터(#mm-footer) · 플로팅 버튼 · 상담 모달
═══════════════════════════════════════════════════════════ */
(function(){

/* 페이지별 브랜드 정보 */
var PAGES={
  'lx-vue' :{name:'LX 뷰프레임'},
  'lx-euro':{name:'LX 유로시스템9(시스템창)'},
  'lx-euro-al':{name:'LX 유로시스템9 AL 시스템창'},
  'kcc'    :{name:'KCC'},
  'kbe'    :{name:'독일 KBE'},
  'kogo'   :{name:'고구려안전방충망'}
};
var BRANDS=[
  {id:'lx-vue' ,href:'lx-vue.html' ,eyebrow:'LX하우시스 · 일반창',name:'뷰프레임(일반창)'      ,sub:'완성창 · 제작창 · 스마트핸들'},
  {id:'lx-euro',href:'lx-euro.html',eyebrow:'LX하우시스 · 시스템창',name:'유로시스템9(시스템창)',sub:'PL·AL 개폐방식 · 유럽 하드웨어'},
  {id:'kcc'    ,href:'kcc.html'    ,eyebrow:'국내 1위'      ,name:'KCC'            ,sub:'KS-WEI 6년 연속 1위'},
  {id:'kbe'    ,href:'kbe.html'    ,eyebrow:'독일 직수입'   ,name:'KBE'            ,sub:'120년 profine · 88mm 7챔버'},
  {id:'kogo'   ,href:'kogo.html'   ,eyebrow:'안전방충망'    ,name:'고구려안전방충망',sub:'추락 방지 · 미세먼지 차단'}
];
var pid=(location.pathname.split('/').pop()||'').replace('.html','');
var page=PAGES[pid]||{name:'MM LAB 창호'};

/* ── 페이지별 창호 프레임 포인트 컬러 (TE 로테이션) ──
   LX=딥그린 · KCC=월넛 브라운 · KBE=안트라짓 · 고구려=샌드카키 */
var FRAME={'lx-vue':'#2F5233','lx-euro':'#2F5233','lx-euro-al':'#2F5233','kcc':'#5C4433','kbe':'#464B52','kogo':'#8A7A5C'};
var CTA_MARKER={'lx-vue':'rgba(220,235,142,.76)','lx-euro':'rgba(220,235,142,.76)','lx-euro-al':'rgba(220,235,142,.76)','kcc':'rgba(232,201,143,.76)','kbe':'rgba(201,215,227,.76)','kogo':'rgba(232,217,167,.76)'};
document.documentElement.style.setProperty('--accent',FRAME[pid]||'#2F5233');
document.documentElement.style.setProperty('--cta-marker',CTA_MARKER[pid]||'rgba(220,235,142,.76)');

/* ── CTA 블랙 밴드 (애플식 클로징 · 상담신청 유도) ── */
var cta=document.getElementById('mm-cta');
var ctaCopy='<p class="body-lg cta-unified">유통 마진 20%를 덜어낸 합리적인 창호 견적.<br><mark>우리 집에 맞는 제품과 예상 비용을<br class="cta-mobile-break"> 무료 상담</mark>으로 확인해보세요.</p>';
if(cta){
  cta.outerHTML='<section class="section section-dark" style="background:var(--accent);"><div class="container"><div class="cta-banner">'
   +'<div class="eyebrow" style="color:#A1A1A6;">SAVING + UPGRADE</div>'
   +'<h2 class="h2" style="color:#F5F5F7;">MM LAB을 통해<br>'+page.name+' 정품을 더 합리적으로.</h2>'
   +ctaCopy
   +'</div></div></section>';
}

/* ── 푸터 (인증 배지 통합 — LX 푸터 벤치마킹) ── */
var ft=document.getElementById('mm-footer');
if(ft){
  ft.outerHTML='<footer class="footer-full">'
   +'<div class="footer-certs"><span>K-BPI 창호 1위</span><span>KS 인증</span><span>ISO 9001</span><span>본사 10년 보증</span><span>정품 직거래</span><span>거주 시공 가능</span></div>'
   +'<div class="footer-info-grid">'
   +'<div><h5>MM LAB · Millimeter Laboratory</h5><p>정밀한 자재, 합리적인 가치.<br>본사 정품 창호 직거래의 구조.</p>'
   +'<p style="margin-top:12px;"><a href="kcc.html">KCC</a> · <a href="lx-vue.html">LX 뷰프레임</a> · <a href="lx-euro.html">유로시스템9</a> · <a href="kbe.html">KBE</a> · <a href="kogo.html">고구려</a></p></div>'
   +'<div><h5>고객 지원</h5><ul>'
   +'<li><a href="#" onclick="openModal();return false;">상담신청</a></li>'
   +'<li><a href="tel:02-0000-0000">02-0000-0000 (평일 09:00~18:00)</a></li>'
   +'<li><a href="cases.html">시공사례</a></li>'
   +'<li><a href="interior.html">인테리어 협력</a></li></ul></div>'
   +'<div><h5>B2B / 도매 문의</h5><ul>'
   +'<li><a href="#" onclick="openModal();return false;">도매·납품 전용 라인</a></li>'
   +'<li><a href="#" onclick="openModal();return false;">협력 인테리어사 등록</a></li>'
   +'<li><a href="#" onclick="openModal();return false;">대량 견적 문의</a></li></ul></div>'
   +'</div>'
   +'<div class="footer-business">© 2026 MM LAB (Millimeter Laboratory) · 사업자등록번호 000-00-00000 · 통신판매업 신고 제2026-서울-00000호<br>대표자 어반로드 · 서울특별시 ○○구 ○○로 00 · support@mmlab.kr<br><span style="color:#A1A1A6;">본 사이트는 KCC·LX하우시스·KBE 본사의 공식 정품만 취급합니다.</span></div>'
   +'</footer>';
}

/* ── 플로팅 버튼 + 상담 모달 (전 페이지 단일 소스) ── */
document.body.insertAdjacentHTML('beforeend',
  '<div class="modal-overlay" id="inquiryModal"><div class="modal">'
 +'<button class="modal-close" onclick="closeModal()" aria-label="닫기">×</button>'
 +'<h3>편하게 남겨주세요.</h3>'
 +'<p class="modal-sub">MM LAB · 영업일 24시간 내 답변</p>'
 +'<form class="modal-form" id="mmForm">'
 +'<div class="form-row"><div><label for="mm-name">이름</label><input id="mm-name" name="name" type="text" required placeholder="홍길동" autocomplete="name"></div>'
 +'<div><label for="mm-tel">연락처</label><input id="mm-tel" name="tel" type="tel" required placeholder="010-0000-0000" autocomplete="tel" inputmode="tel"></div></div>'
 +'<div class="form-row"><div><label for="mm-size">평형</label><select id="mm-size" name="size"><option value="">선택</option><option>20평대</option><option>30평대</option><option>40평대</option><option>50평+</option><option>상가·기타</option></select></div>'
 +'<div><label for="mm-brand">관심 브랜드</label><select id="mm-brand" name="brand"><option value="">선택</option><option>LX하우시스</option><option>KCC</option><option>독일 시스템창호 KBE</option><option>고구려안전방충망</option><option>잘 모르겠음 / 추천</option></select></div></div>'
 +'<div><label for="mm-when">시공 희망 시기</label><select id="mm-when" name="when"><option value="">선택</option><option>1개월 이내</option><option>1~3개월</option><option>3~6개월</option><option>6개월+ / 미정</option></select></div>'
 +'<div><label for="mm-message">문의 내용</label><textarea id="mm-message" name="message" required placeholder="관심 모델·평형 등을 적어주세요."></textarea></div>'
 +'<button type="submit" class="modal-submit">상담신청</button></form>'
 +'<div class="msuccess" id="mmSuccess"><div class="ck"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 L10 18.5 L20 6.5"/></svg></div>'
 +'<h4>접수됐습니다</h4><p>영업일 24시간 안에 연락드릴게요.<br><span style="color:#86868B;font-size:12px">(데모 — 실제 발송은 배포 시 연결)</span></p></div>'
 +'</div></div>');

window.openModal=function(){document.getElementById('inquiryModal').classList.add('open');document.body.style.overflow='hidden';};
window.closeModal=function(){document.getElementById('inquiryModal').classList.remove('open');document.body.style.overflow='';};
var ov=document.getElementById('inquiryModal');
ov.addEventListener('click',function(e){if(e.target===ov)closeModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
document.getElementById('mmForm').addEventListener('submit',function(e){
  e.preventDefault();
  var f=e.target,ok=document.getElementById('mmSuccess');
  f.style.display='none';ok.classList.add('on');
  setTimeout(function(){closeModal();setTimeout(function(){f.reset();f.style.display='';ok.classList.remove('on');},350);},2400);
});

/* ── 모바일 햄버거 (미정의 페이지 대비 공통 제공) ── */
window.toggleMenu=window.toggleMenu||function(el){el.classList.toggle('open');var m=document.getElementById('gnbMenu');if(m)m.classList.toggle('open');};
window.closeMenu=window.closeMenu||function(){var h=document.querySelector('.hamburger'),m=document.getElementById('gnbMenu');if(h)h.classList.remove('open');if(m)m.classList.remove('open');};

/* ── 공통 인터랙션: reveal · GNB 스크롤 · 라인업 캐러셀 (페이지별 중복 JS 제거) ── */
if(!window.__mmCommonUI){
  window.__mmCommonUI=true;
  /* reveal */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }else{
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible');});
  }
  /* GNB 스크롤 */
  window.addEventListener('scroll',function(){
    var g=document.querySelector('.gnb');
    if(g)g.style.background=window.scrollY>20?'rgba(255,255,255,0.92)':'rgba(255,255,255,0.72)';
  },{passive:true});
  /* 라인업 캐러셀 (‹ › 화살표) */
  document.querySelectorAll('.lineup-carousel').forEach(function(car){
    var track=car.querySelector('.lc-track'),prev=car.querySelector('.lc-prev'),next=car.querySelector('.lc-next');
    if(!track||!prev||!next)return;
    function step(){
      var card=track.firstElementChild;
      var gap=parseInt(getComputedStyle(track).columnGap||getComputedStyle(track).gap)||20;
      return card?card.getBoundingClientRect().width+gap:360;
    }
    function update(){
      prev.disabled=track.scrollLeft<=12;
      next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;
    }
    prev.addEventListener('click',function(){track.scrollBy({left:-step(),behavior:'smooth'});});
    next.addEventListener('click',function(){track.scrollBy({left:step(),behavior:'smooth'});});
    track.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    update();
  });
}

})();
