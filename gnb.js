/* ═══════════════════════════════════════════════════════════
   MM LAB — 통일 GNB (전 페이지 공통 · 호버 플라이아웃)
   어느 페이지에서든 같은 내비, 1클릭으로 원하는 곳 이동
═══════════════════════════════════════════════════════════ */
(function(){
if(document.getElementById('mmGnb'))return;

/* ── 스타일 ── */
var css=''
+'#mmGnb{position:fixed;top:0;left:0;right:0;z-index:1500;height:56px;background:rgba(244,240,230,.94);backdrop-filter:saturate(180%) blur(18px);-webkit-backdrop-filter:saturate(180%) blur(18px);border-bottom:1px solid #111;font-family:"Pretendard Variable",Pretendard,-apple-system,sans-serif;word-break:keep-all}'
+'#mmGnb *{box-sizing:border-box}'
+'.mg-in{max-width:1200px;margin:0 auto;height:56px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:20px}'
+'.mg-logo{font-family:"General Sans","SUIT Variable",Pretendard,sans-serif;font-weight:700;font-size:16px;letter-spacing:.12em;color:#111;text-decoration:none;display:flex;align-items:baseline;gap:9px;white-space:nowrap}'
+'.mg-logo small{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:9.5px;letter-spacing:.06em;color:#77705F;font-weight:500}'
+'.mg-links{display:flex;align-items:center;gap:26px}'
+'.mg-links>a,.mg-drop>button{font-size:13.5px;font-weight:500;color:#111;text-decoration:none;background:none;border:0;border-bottom:2px solid transparent;cursor:pointer;font-family:inherit;padding:17px 0 15px;transition:color .2s;white-space:nowrap}'
+'.mg-links>a:hover,.mg-drop>button:hover{color:#55554A}'
+'.mg-links>a.on,.mg-drop>button.on{border-bottom-color:var(--accent,#2F5233);font-weight:700}'
+'.mg-drop{position:relative;display:flex}'
+'.mg-drop>button::after{content:"▾";font-size:9px;margin-left:5px;vertical-align:2px}'
+'.mg-fly{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);min-width:300px;background:#fff;border:1px solid #111;box-shadow:6px 6px 0 rgba(47,82,51,.22);opacity:0;visibility:hidden;transition:opacity .24s ease,transform .24s ease;padding:6px 0}'
+'.mg-drop.open .mg-fly{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}'
+'.mg-fly a{display:flex;align-items:center;gap:12px;padding:12px 18px;text-decoration:none;color:#111}'
+'.mg-fly a:hover{background:#F4F0E6}'
+'.mg-fly a.on b{text-decoration:none}'
+'.mg-sw{width:12px;height:12px;border:1px solid #111;flex:none}'
+'.mg-fly b{font-size:14px;font-weight:600;white-space:nowrap}'
+'.mg-fly span{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:10px;color:#77705F;margin-left:auto;letter-spacing:.03em;text-transform:lowercase;white-space:nowrap}'
+'#mmGnb .mg-cta{background:var(--accent,#2F5233)!important;color:#fff!important;padding:8px 16px!important;font-weight:600!important;border-bottom:none!important;border-radius:0}'
+'#mmGnb .mg-cta:hover{background:var(--accent-press,#1F3822)!important;color:#fff!important}'
+'.mg-burger{display:none;background:none;border:1px solid #111;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11px;padding:7px 12px;cursor:pointer;color:#111;letter-spacing:.06em}'
+'.mg-mobile{display:none;position:fixed;top:68px;left:auto;right:0;bottom:auto;width:min(220px,52vw);max-height:calc(100vh - 84px);background:#F4F0E6;z-index:1490;overflow-y:auto;padding:12px 16px 16px;border:1px solid #111;border-right:0;box-shadow:-6px 6px 0 rgba(47,82,51,.22)}'
+'.mg-mobile.open{display:grid;grid-template-columns:1fr;align-items:start}'
+'.mg-mobile a{display:block;min-width:0;padding:12px 4px;font-size:15px;font-weight:600;color:#111;text-decoration:none;border-bottom:1px solid #D9D1C1;white-space:nowrap}'
+'.mg-mobile>a:first-child,.mg-mobile .mg-grp{grid-column:1}'
+'.mg-mobile .mg-grp{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:9px;letter-spacing:.08em;color:#77705F;text-transform:lowercase;margin:14px 4px 2px}'
+'.mg-mobile .mg-sub{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;padding:11px 4px}'
+'.mg-mobile .mg-sw{width:10px;height:10px}'
+'@media(max-width:860px){#mmGnb{background:#F4F0E6;backdrop-filter:none;-webkit-backdrop-filter:none}.mg-links{display:none!important}.mg-drop>button{display:none!important;visibility:hidden!important}.mg-drop>button::after{display:none!important;content:""!important}.mg-burger{display:inline-flex}.mg-logo small{display:inline;font-size:8px;letter-spacing:.05em}}'
/* 기존 페이지별 내비·모바일 패널 숨김 (통일 GNB로 대체) */
+'body>header.nav,body>nav.nav,body>nav.gnb,.mnav{display:none!important}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ── 데이터 ── */
var here=(location.pathname.split('/').pop()||'index.html');
var BRANDS=[
  ['lx-vue.html','LX 뷰프레임','일반창','#2F5233'],
  ['lx-euro.html','LX 유로시스템9','시스템창','#2F5233'],
  ['kcc.html','KCC','국내 1위','#5C4433'],
  ['kbe.html','KBE','독일 시스템창','#464B52'],
  ['kogo.html','고구려안전방충망','안전 · 방범','#8A7A5C']
];
var isBrand=BRANDS.some(function(b){return b[0]===here;});
function on(h){return h===here?' class="on"':'';}

/* ── 마크업 ── */
var fly=BRANDS.map(function(b){
  return '<a href="'+b[0]+'"'+(b[0]===here?' class="on"':'')+'><i class="mg-sw" style="background:'+b[3]+'"></i><b>'+b[1]+'</b><span>'+b[2]+'</span></a>';
}).join('');
var html=''
+'<header id="mmGnb">'
+'<div class="mg-in">'
+'<a class="mg-logo" href="index.html">MM LAB <small>millimeter laboratory</small></a>'
+'<nav class="mg-links">'
+'<a href="index.html"'+on('index.html')+'>홈</a>'
+'<div class="mg-drop" id="mgDrop"><button type="button"'+(isBrand?' class="on"':'')+'>창호</button>'
+'<div class="mg-fly">'+fly+'</div></div>'
+'<a href="interior.html"'+on('interior.html')+'>인테리어</a>'
+'<a href="brand.html"'+on('brand.html')+'>브랜드 소개</a>'
+'<a href="cases.html"'+on('cases.html')+'>시공사례</a>'
+'<a href="#" class="mg-cta" onclick="window.openModal&&openModal();return false;">상담신청</a>'
+'</nav>'
+'<button class="mg-burger" type="button" id="mgBurger" aria-expanded="false" aria-controls="mgMobile">MENU</button>'
+'</div>'
+'</header>'
+'<div class="mg-mobile" id="mgMobile">'
+'<a href="index.html">홈</a>'
+'<div class="mg-grp">WINDOWS</div>'
+BRANDS.map(function(b){return '<a class="mg-sub" href="'+b[0]+'"><i class="mg-sw" style="background:'+b[3]+'"></i>'+b[1]+'</a>';}).join('')
+'<div class="mg-grp">MM LAB</div>'
+'<a href="interior.html">인테리어</a>'
+'<a href="brand.html">브랜드 소개</a>'
+'<a href="cases.html">시공사례</a>'
+'<a href="#" onclick="window.openModal&&openModal();return false;">상담신청</a>'
+'</div>';
document.body.insertAdjacentHTML('afterbegin',html);

/* ── 플라이아웃: 호버로 등장 (+ 터치는 탭 토글) ── */
var drop=document.getElementById('mgDrop'),timer=null;
function openFly(){clearTimeout(timer);drop.classList.add('open');}
function closeFly(){timer=setTimeout(function(){drop.classList.remove('open');},140);}
drop.addEventListener('mouseenter',openFly);
drop.addEventListener('mouseleave',closeFly);
drop.querySelector('button').addEventListener('click',function(e){e.stopPropagation();drop.classList.toggle('open');});
document.addEventListener('click',function(e){if(!drop.contains(e.target))drop.classList.remove('open');});
document.addEventListener('keydown',function(e){if(e.key==='Escape')drop.classList.remove('open');});

/* ── 모바일 메뉴 ── */
var burger=document.getElementById('mgBurger'),mob=document.getElementById('mgMobile');
function setMobile(o){
  mob.classList.toggle('open',o);
  burger.textContent=o?'CLOSE':'MENU';
  burger.setAttribute('aria-expanded',String(o));
}
burger.addEventListener('click',function(){setMobile(!mob.classList.contains('open'));});
mob.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMobile(false);});});
document.addEventListener('click',function(e){if(mob.classList.contains('open')&&!mob.contains(e.target)&&!burger.contains(e.target))setMobile(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMobile(false);});
})();
