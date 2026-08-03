/* ═══════════════════════════════════════════════════════════
   MM LAB — 통일 GNB
   데스크톱: 전 메뉴 호버 미리보기 · 모바일: 탭형 하위 메뉴
═══════════════════════════════════════════════════════════ */
(function(){
if(document.getElementById('mmGnb'))return;

/* 스크립트 위치를 기준으로 사이트 루트를 계산한다.
   도메인이 바뀌거나 중첩 폴더에서 파일로 열어도 메뉴 주소가 유지된다. */
var SCRIPT_URL=(document.currentScript&&document.currentScript.src)||location.href;
var ROOT_URL=new URL('.',SCRIPT_URL);
function site(path){return new URL(String(path||'').replace(/^\/+/,''),ROOT_URL).href;}
function ensureBrandIcon(rel,href){
  if(document.querySelector('link[rel="'+rel+'"]'))return;
  var link=document.createElement('link');link.rel=rel;link.href=site(href);document.head.appendChild(link);
}
ensureBrandIcon('icon','assets/brand/favicon.ico?v=b2');
ensureBrandIcon('apple-touch-icon','assets/brand/apple-touch-icon.png?v=b2');

/* 서버 없이 파일(file://)로 열었을 때만: 폴더 주소 링크를 그 폴더의 index.html로 이어준다.
   배포 환경(https)에서는 서버가 index.html을 찾아주므로 이 블록은 실행되지 않는다. */
if(location.protocol==='file:'){
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href]');
    if(!a)return;
    var url;try{url=new URL(a.href);}catch(err){return;}
    if(url.protocol!=='file:'||!/\/$/.test(url.pathname))return;
    e.preventDefault();
    location.href=url.pathname+'index.html'+url.search+url.hash;
  },true);
}
function routeOf(href){
  var rootPath=decodeURIComponent(ROOT_URL.pathname);
  var targetPath=decodeURIComponent(new URL(href,ROOT_URL).pathname);
  var rel=targetPath.indexOf(rootPath)===0?targetPath.slice(rootPath.length):targetPath.replace(/^\/+/, '');
  return rel.replace(/index\.html$/,'').replace(/^\/+|\/+$/g,'');
}
var here=routeOf(location.href);
function isRouteOrChild(route){
  return route===''?here==='':here===route||here.indexOf(route+'/')===0;
}

var css=`
@font-face{font-family:"Gmarket Sans";src:url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff") format("woff");font-weight:700;font-display:swap}
#mmGnb{position:fixed;top:0;left:0;right:0;z-index:1500;height:56px;background:rgba(244,240,230,.94);backdrop-filter:saturate(180%) blur(18px);-webkit-backdrop-filter:saturate(180%) blur(18px);border-bottom:1px solid #111;font-family:"Pretendard Variable",Pretendard,-apple-system,sans-serif;word-break:keep-all}
#mmGnb *,.mg-mobile *{box-sizing:border-box}
.mg-in{max-width:1200px;margin:0 auto;height:56px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.mg-logo{display:flex;align-items:center;text-decoration:none;white-space:nowrap;flex:none}
.mg-logo img{display:block;width:auto;height:27px}
.mg-links{display:flex;align-items:center;gap:22px}
.mg-drop{position:relative;display:flex}
.mg-drop>.mg-top{font-size:13.5px;font-weight:500;color:#2F5233;text-decoration:none;background:none;border:0;border-bottom:2px solid transparent;cursor:pointer;font-family:inherit;padding:17px 0 15px;transition:color .2s;white-space:nowrap;line-height:1.5}
.mg-drop>.mg-top:hover{color:#1F3822}
.mg-drop>.mg-top.on{border-bottom-color:var(--accent,#2F5233);font-weight:700}
/* 호버/열림 중인 메뉴로 밑줄 이동 — 그동안 현재페이지 밑줄은 숨김 */
.mg-drop.open>.mg-top{border-bottom-color:var(--accent,#2F5233)}
.mg-links.mg-hovering .mg-top.on{border-bottom-color:transparent}
.mg-links.mg-hovering .mg-drop.open>.mg-top{border-bottom-color:var(--accent,#2F5233)}
.mg-drop>.mg-top::after{content:"▾";font-size:9px;margin-left:5px;vertical-align:2px}
.mg-drop.mg-plain>.mg-top::after{content:none}
/* 홈 링크 — 로고의 집 모양 테두리 안에 글자를 앉혀 다른 메뉴와 구별 */
.mg-drop>.mg-top.mg-home{width:34px;text-align:center;font-size:10px;font-weight:400;letter-spacing:0;line-height:1;padding:22px 0 19px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 22'%3E%3Cpath d='M12 2L22 9.8V20H2V9.8Z' fill='none' stroke='%232F5233' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center 14px/24px 22px}
.mg-drop>.mg-top.mg-home.on{font-weight:400}
.mg-mlink.mg-mhome{background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 22'%3E%3Cpath d='M12 2L22 9.8V20H2V9.8Z' fill='none' stroke='%232F5233' stroke-width='1.2' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat 2px center/18px 16.5px;padding-left:28px}
.mg-fly{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);min-width:310px;background:#fff;border:1px solid #111;box-shadow:6px 6px 0 rgba(47,82,51,.22);opacity:0;visibility:hidden;transition:opacity .2s ease,transform .2s ease;padding:6px 0;z-index:3}
.mg-drop.open .mg-fly{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
.mg-drop.mg-left .mg-fly{left:0;transform:translateY(8px)}
.mg-drop.mg-left.open .mg-fly{transform:translateY(0)}
.mg-drop.mg-right .mg-fly{left:auto;right:0;transform:translateY(8px)}
.mg-drop.mg-right.open .mg-fly{transform:translateY(0)}
.mg-fly a{display:flex;align-items:center;gap:12px;padding:12px 18px;text-decoration:none;color:#2F5233;transition:background .18s}
.mg-fly a:hover,.mg-fly a:focus-visible{background:#F4F0E6;outline:none}
.mg-fly a.on b{text-decoration:none}
.mg-sw{width:12px;height:12px;border:1px solid #111;flex:none}
.mg-fly b{font-size:14px;font-weight:600;white-space:nowrap}
.mg-fly span{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:10px;color:#6E7C64;margin-left:auto;letter-spacing:.03em;text-transform:lowercase;white-space:nowrap}
/* 창호 메가메뉴 — 브랜드 4열(허브 링크 + 제품 직링크) + 전 제품 행 */
.mg-fly.mg-mega{min-width:0;width:736px;padding:0}
.mg-mega .mg-mgrid{display:grid;grid-template-columns:repeat(4,1fr);padding:16px 10px 14px}
.mg-mega .mg-mgcol{padding:0 14px;border-left:1px solid #EDE7DA}
.mg-mega .mg-mgcol:first-child{border-left:0}
.mg-mega .mg-mghead{display:flex;align-items:center;gap:8px;padding:4px 2px 10px;margin-bottom:5px;border-bottom:1px solid #D9D1C1}
.mg-mega .mg-mghead b{font-size:13.5px;font-weight:700;white-space:nowrap}
.mg-mega .mg-mgitem{display:block;padding:7px 8px;margin:0 -6px;font-size:13px;font-weight:500;line-height:1.45}
.mg-mega .mg-mgitem.on,.mg-mega .mg-mghead.on b{font-weight:700;color:#1F3822}
.mg-mega .mg-mgall{display:flex;align-items:center;gap:12px;padding:12px 24px;border-top:1px solid #111}
.mg-mega .mg-mgall b{font-size:13px;font-weight:700}
#mmGnb .mg-cta{background:var(--accent,#2F5233);color:#fff;padding:8px 14px;border-bottom:none}
#mmGnb .mg-cta:hover{background:var(--accent-press,#1F3822);color:#fff}
#mmGnb .mg-cta::after{color:#fff}
.mg-burger{display:none;background:none;border:1px solid #111;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11px;padding:7px 12px;cursor:pointer;color:#2F5233;letter-spacing:.06em}
.mg-mobile{display:none;position:fixed;top:68px;left:auto;right:0;bottom:auto;width:min(230px,56vw);max-height:calc(100vh - 84px);background:#F4F0E6;z-index:1490;overflow-y:auto;padding:10px 14px 14px;border:1px solid #111;border-right:0;box-shadow:-6px 6px 0 rgba(47,82,51,.22);font-family:"Pretendard Variable",Pretendard,-apple-system,sans-serif}
.mg-mobile.open{display:block}
.mg-msection{border-bottom:1px solid #D9D1C1}
.mg-msection:last-child{border-bottom:0}
.mg-mtoggle{width:100%;display:flex;align-items:center;justify-content:space-between;padding:13px 2px;background:none;border:0;color:#1F3822;font-size:15px;font-weight:700;text-align:left;cursor:pointer}
.mg-mtoggle::after{content:"+";font-family:"JetBrains Mono",monospace;font-size:15px;font-weight:400}
.mg-mtoggle[aria-expanded="true"]::after{content:"−"}
.mg-mpanel{display:none;padding:0 0 9px}
.mg-mpanel.open{display:block}
.mg-mpanel a{display:flex;align-items:center;gap:8px;padding:9px 2px;color:#2F5233;text-decoration:none;font-size:12.5px;font-weight:500;line-height:1.35}
.mg-mpanel a:hover{color:#1F3822}
.mg-mpanel .mg-sw{width:9px;height:9px}
.mg-mpanel span{display:none}
/* 모바일 — 드롭다운 없는 그룹은 바로가기 행으로 */
.mg-mlink{display:flex;align-items:center;justify-content:space-between;padding:13px 2px;color:#1F3822;font-size:15px;font-weight:700;text-decoration:none}
.mg-mlink::after{content:"→";font-family:"JetBrains Mono",monospace;font-size:13px;font-weight:400}
/* 모바일 창호 — 브랜드 소제목 + 제품 2단 */
.mg-mpanel .mg-mbhead{padding:8px 2px 3px;font-weight:700;color:#1F3822}
.mg-mpanel .mg-mprod{padding:5px 2px 5px 19px;font-size:12px}
.mg-mpanel .mg-mall{margin-top:5px;border-top:1px solid #D9D1C1;padding:9px 2px 7px;font-weight:700;color:#1F3822}
@media(max-width:860px){#mmGnb{background:#F4F0E6;backdrop-filter:none;-webkit-backdrop-filter:none}.mg-in{padding:0 20px}.mg-links{display:none!important}.mg-burger{display:inline-flex}.mg-logo img{height:26px}}
@media(max-width:480px){.mg-in{padding:0 16px;gap:10px}.mg-logo img{height:24px}.mg-burger{padding:7px 11px}.mg-mobile{width:min(230px,64vw);padding-left:12px;padding-right:12px}}
body>header.nav,body>nav.nav,body>nav.gnb,.mnav{display:none!important}
`;
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* 창호 메가메뉴 — 브랜드 허브 링크 아래 제품 직링크를 붙인다 */
var WINDOW_SECTIONS=[
  {href:site('windows/lx/'),name:'LX 하우시스',color:'#2F5233',items:[
    {href:site('windows/lx/viewframe/finished/'),name:'뷰프레임 완성창'},
    {href:site('windows/lx/viewframe/custom/'),name:'뷰프레임 제작창'},
    {href:site('windows/lx/euro-system-9/pl/'),name:'유로시스템9 PL'},
    {href:site('windows/lx/euro-system-9/al/'),name:'유로시스템9 AL'}
  ]},
  {href:site('windows/kcc/'),name:'KCC',color:'#5C4433',items:[
    {href:site('windows/kcc/#lineup'),name:'발코니창'},
    {href:site('windows/kcc/#lineup-inner'),name:'일반창(내창)'}
  ]},
  {href:site('windows/kbe/'),name:'독일시스템창호',color:'#464B52',items:[
    {href:site('windows/kbe/'),name:'KBE·KÖMMERLING'}
  ]},
  {href:site('screens/kogo/'),name:'고구려안전방충망',color:'#8A7A5C',items:[
    {href:site('screens/kogo/#products'),name:'방범망 · 안전망 · 미세먼지망'}
  ]}
];
var GROUPS=[
  {id:'home',label:'홈',href:site(''),active:isRouteOrChild(''),home:true},
  {id:'windows',label:'창호',href:site('windows/'),active:isRouteOrChild('windows')||isRouteOrChild('screens'),mega:WINDOW_SECTIONS},
  {id:'interior',label:'인테리어',href:site('interior/'),active:isRouteOrChild('interior'),items:[
    {href:site('interior/'),name:'인테리어 소개',sub:'network'},
    {href:site('interior/#process'),name:'Our Process',sub:'5 steps'},
    {href:site('interior/#partners'),name:'검증된 협력 업체',sub:'partners'}
  ]},
  {id:'cases',label:'시공사례',href:site('projects/'),active:isRouteOrChild('projects')},
  {id:'brand',label:'브랜드 소개',href:site('about/'),active:isRouteOrChild('about'),items:[
    {href:site('about/#about'),name:'대표 인사말',sub:'message'},
    {href:site('about/#model'),name:'Why MM LAB',sub:'reason'},
    {href:site('about/#save'),name:'정품 직거래 구조',sub:'saving'},
    {href:site('about/#genuine'),name:'저가 공업사와의 차이',sub:'compare'},
    {href:site('about/#flow'),name:'상담부터 시공까지',sub:'process'}
  ]},
  {id:'consult',label:'상담신청',href:'#',align:'mg-right',cta:true,items:[
    {href:'#',name:'무료 상담 신청',sub:'consult',action:'inquiry'},
    {href:'tel:02-6012-0033',name:'전화 문의',sub:'평일 09:00–18:00'},
    {href:site('about/#flow'),name:'진행 방식 보기',sub:'how it works'}
  ]}
];

function itemHtml(item){
  var itemRoute=routeOf(item.href);
  var isCurrent=item.href.indexOf('#')<0&&(isRouteOrChild(itemRoute)||(item.match||[]).some(isRouteOrChild));
  return '<a href="'+item.href+'"'+(isCurrent?' class="on"':'')+(item.action==='inquiry'?' data-inquiry="true"':'')+'>'
    +'<i class="mg-sw" style="background:'+(item.color||'#F4F0E6')+'"></i><b>'+item.name+'</b><span>'+item.sub+'</span></a>';
}
function megaItemHtml(item){
  var isCurrent=item.href.indexOf('#')<0&&isRouteOrChild(routeOf(item.href));
  return '<a class="mg-mgitem'+(isCurrent?' on':'')+'" href="'+item.href+'">'+item.name+'</a>';
}
function megaSectionHtml(sec){
  var headOn=isRouteOrChild(routeOf(sec.href));
  return '<div class="mg-mgcol"><a class="mg-mghead'+(headOn?' on':'')+'" href="'+sec.href+'">'
    +'<i class="mg-sw" style="background:'+sec.color+'"></i><b>'+sec.name+'</b></a>'
    +sec.items.map(megaItemHtml).join('')+'</div>';
}
/* 드롭다운 본문 — mega: 창호 메가메뉴 · items: 기본 리스트 · 없으면 단일 링크 */
function flyHtml(group){
  if(group.mega)return '<div class="mg-fly mg-mega"><div class="mg-mgrid">'+group.mega.map(megaSectionHtml).join('')+'</div>'
    +'<a class="mg-mgall'+(here==='windows'?' on':'')+'" href="'+group.href+'"><b>전 제품 한눈에 보기</b><span>all products</span></a></div>';
  if(group.items&&group.items.length)return '<div class="mg-fly">'+group.items.map(itemHtml).join('')+'</div>';
  return '';
}
function groupHtml(group){
  var topClass='mg-top'+(group.active?' on':'')+(group.cta?' mg-cta':'')+(group.home?' mg-home':'');
  var top=group.href
    ?'<a href="'+group.href+'" class="'+topClass+'"'+(group.cta?' data-inquiry="true"':'')+'>'+group.label+'</a>'
    :'<button type="button" class="'+topClass+'">'+group.label+'</button>';
  var fly=flyHtml(group);
  return '<div class="mg-drop '+(group.align||'')+(fly?'':' mg-plain')+'" data-group="'+group.id+'">'+top+fly+'</div>';
}
function mobileGroupHtml(group){
  if(!group.mega&&(!group.items||!group.items.length))
    return '<div class="mg-msection"><a class="mg-mlink'+(group.home?' mg-mhome':'')+'" href="'+group.href+'">'+group.label+'</a></div>';
  var panel=group.mega
    ?group.mega.map(function(sec){
        return '<a class="mg-mbhead" href="'+sec.href+'"><i class="mg-sw" style="background:'+sec.color+'"></i>'+sec.name+'</a>'
          +sec.items.map(function(item){return '<a class="mg-mprod" href="'+item.href+'">'+item.name+'</a>';}).join('');
      }).join('')+'<a class="mg-mall" href="'+group.href+'">전 제품 한눈에 보기</a>'
    :group.items.map(itemHtml).join('');
  return '<div class="mg-msection"><button class="mg-mtoggle" type="button" aria-expanded="false">'+group.label+'</button>'
    +'<div class="mg-mpanel">'+panel+'</div></div>';
}

var html='<header id="mmGnb"><div class="mg-in">'
  +'<a class="mg-logo" href="'+site('')+'" aria-label="MM LAB 홈"><img src="'+site('assets/brand/mm-lab-lockup-horizontal-green.png?v=b1')+'" width="1489" height="393" alt="MM LAB"></a>'
  +'<nav class="mg-links" aria-label="주 메뉴">'+GROUPS.map(groupHtml).join('')+'</nav>'
  +'<button class="mg-burger" type="button" id="mgBurger" aria-expanded="false" aria-controls="mgMobile">MENU</button>'
  +'</div></header><div class="mg-mobile" id="mgMobile">'+GROUPS.map(mobileGroupHtml).join('')+'</div>';
document.body.insertAdjacentHTML('afterbegin',html);

var drops=Array.prototype.slice.call(document.querySelectorAll('.mg-drop'));
var links=document.querySelector('.mg-links');
var flyTimer=null;
/* 열린 메뉴가 하나라도 있으면 mg-hovering — 밑줄을 호버한 메뉴로 넘긴다 */
function syncHover(){links.classList.toggle('mg-hovering',drops.some(function(d){return d.classList.contains('open');}));}
function closeDrops(except){drops.forEach(function(d){if(d!==except)d.classList.remove('open');});syncHover();}
function openDrop(drop){clearTimeout(flyTimer);closeDrops(drop);drop.classList.add('open');syncHover();}
function delayClose(drop){clearTimeout(flyTimer);flyTimer=setTimeout(function(){drop.classList.remove('open');syncHover();},150);}
drops.forEach(function(drop){
  drop.addEventListener('mouseenter',function(){openDrop(drop);});
  drop.addEventListener('mouseleave',function(){delayClose(drop);});
  drop.addEventListener('focusin',function(){openDrop(drop);});
  drop.addEventListener('focusout',function(){delayClose(drop);});
  var top=drop.querySelector('.mg-top');
  if(top.tagName==='BUTTON')top.addEventListener('click',function(e){e.stopPropagation();drop.classList.toggle('open');});
});
document.addEventListener('click',function(e){if(!e.target.closest('.mg-drop'))closeDrops();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDrops();});

var burger=document.getElementById('mgBurger'),mob=document.getElementById('mgMobile');
function setMobile(open){mob.classList.toggle('open',open);burger.textContent=open?'CLOSE':'MENU';burger.setAttribute('aria-expanded',String(open));}
burger.addEventListener('click',function(){setMobile(!mob.classList.contains('open'));});
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  var mobileHoverTimer=null;
  function openMobileHover(){clearTimeout(mobileHoverTimer);setMobile(true);}
  function closeMobileHover(){mobileHoverTimer=setTimeout(function(){setMobile(false);},180);}
  burger.addEventListener('mouseenter',openMobileHover);burger.addEventListener('mouseleave',closeMobileHover);
  mob.addEventListener('mouseenter',openMobileHover);mob.addEventListener('mouseleave',closeMobileHover);
}
mob.querySelectorAll('.mg-mtoggle').forEach(function(toggle){
  toggle.addEventListener('click',function(){
    var panel=toggle.nextElementSibling,open=!panel.classList.contains('open');
    mob.querySelectorAll('.mg-mpanel').forEach(function(p){p.classList.remove('open');p.previousElementSibling.setAttribute('aria-expanded','false');});
    panel.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));
  });
});
document.querySelectorAll('[data-inquiry]').forEach(function(link){
  link.addEventListener('click',function(e){e.preventDefault();closeDrops();setMobile(false);if(window.openModal)window.openModal();});
});
mob.querySelectorAll('.mg-mpanel a,.mg-mlink').forEach(function(a){if(!a.hasAttribute('data-inquiry'))a.addEventListener('click',function(){setMobile(false);});});
document.addEventListener('click',function(e){if(mob.classList.contains('open')&&!mob.contains(e.target)&&!burger.contains(e.target))setMobile(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMobile(false);});
})();

/* Keep product model names together across desktop/mobile and dynamic panels. */
(function keepProductModelNamesTogether(){
  var excluded={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1};

  function fixTextNode(node){
    if(!node||node.nodeType!==3)return;
    var parent=node.parentElement;
    if(!parent||excluded[parent.tagName])return;
    var value=node.nodeValue;
    var fixed=value.replace(/\bF-([A-Z0-9]+)\b/g,'F\u2011$1');
    if(fixed!==value)node.nodeValue=fixed;
  }

  function fixTree(root){
    if(!root)return;
    if(root.nodeType===3){fixTextNode(root);return;}
    if(root.nodeType!==1||excluded[root.tagName])return;
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    var nodes=[],node;
    while((node=walker.nextNode()))nodes.push(node);
    nodes.forEach(fixTextNode);
  }

  function start(){
    fixTree(document.body);
    new MutationObserver(function(records){
      records.forEach(function(record){
        if(record.type==='characterData')fixTextNode(record.target);
        record.addedNodes.forEach(fixTree);
      });
    }).observe(document.body,{subtree:true,childList:true,characterData:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
  else start();
})();
