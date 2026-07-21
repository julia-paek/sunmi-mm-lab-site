/*
 * 이전 파일명 호환용 로더.
 * 새 페이지에는 gnb.js 대신 sitenav.js를 직접 사용한다.
 */
(function(){
  if(document.getElementById('mmGnb'))return;
  var SCRIPT_URL=(document.currentScript&&document.currentScript.src)||location.href;
  var ROOT_URL=new URL('.',SCRIPT_URL);
  var replacement=document.createElement('script');
  replacement.src=new URL('sitenav.js?v=g46',ROOT_URL).href;
  document.head.appendChild(replacement);
})();
