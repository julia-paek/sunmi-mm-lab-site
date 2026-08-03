/* MM LAB 상담 접수 공용 모듈 — consult.js
   ─────────────────────────────────────────────────────────────
   아래 mode 값 한 줄로 접수 방식을 고릅니다.

   · 'mailto'  : 방문자의 메일 앱에 접수 내용이 담긴 초안을 열어줍니다.
                 별도 준비 없이 바로 동작합니다. (현재 기본값)
   · 'service' : 폼 수신 서비스(Formspree 등)로 전송합니다.
                 endpoint에 서비스가 발급한 URL을 넣은 뒤 mode를 'service'로 바꿉니다.
   · 'demo'    : 발송 없이 데모 안내만 보여줍니다. (개발·시연용)

   전화·이메일 바로가기 줄은 모드와 무관하게 모든 상담 모달에 함께 노출되어
   방문자가 원하는 채널을 고를 수 있습니다. */
(function(){
'use strict';
window.MM_CONSULT = window.MM_CONSULT || {
  mode: 'mailto',
  endpoint: '',                    /* 예: 'https://formspree.io/f/xxxxxxx' */
  email: 'ksw.mmlab@gmail.com',
  tel: '02-6012-0033',
  kakao: ''                        /* 카카오톡 채널 상담 URL. 예: 'http://pf.kakao.com/_abcDe/chat' — 채우는 즉시 모달에 카카오톡 상담 링크가 나타납니다 */
};
var C = window.MM_CONSULT;

function fields(form){
  var d = {};
  ['name','tel','size','brand','when','message'].forEach(function(k){
    var el = form.querySelector('[name="' + k + '"]');
    d[k] = el && el.value ? el.value.trim() : '';
  });
  return d;
}

function mailtoUrl(d){
  var body = [
    '이름: ' + d.name,
    '연락처: ' + d.tel,
    '평형: ' + (d.size || '-'),
    '관심 브랜드: ' + (d.brand || '-'),
    '시공 희망 시기: ' + (d.when || '-'),
    '',
    '문의 내용:',
    d.message
  ].join('\n');
  return 'mailto:' + C.email
    + '?subject=' + encodeURIComponent('[상담신청] ' + d.name + ' 님')
    + '&body=' + encodeURIComponent(body);
}

/* 폼 제출 공용 처리 — cb({ok, title, message})를 호출한 쪽 UI(패널/알림)로 보여준다 */
window.mmConsultSubmit = function(form, cb){
  var d = fields(form);
  if(C.mode === 'service' && C.endpoint){
    fetch(C.endpoint, {method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}})
      .then(function(r){
        if(!r.ok) throw new Error(r.status);
        cb({ok:true, title:'접수됐습니다', message:'영업일 24시간 안에 연락드릴게요.'});
      })
      .catch(function(){
        cb({ok:false, title:'접수에 실패했습니다', message:'잠시 후 다시 시도하시거나 ' + C.tel + ' 로 전화 주세요.'});
      });
    return;
  }
  if(C.mode === 'mailto'){
    location.href = mailtoUrl(d);
    cb({ok:true, title:'메일 앱이 열렸습니다', message:'초안 내용을 확인한 뒤 보내기를 누르면 접수됩니다.\n메일 앱이 없다면 ' + C.tel + ' 로 전화 주세요.'});
    return;
  }
  cb({ok:true, title:'데모 화면입니다', message:'실제 발송은 사이트 오픈 시 연결됩니다.'});
};

/* 상담 모달 하단에 전화·이메일 바로가기 줄을 붙인다 */
function addAltRow(form){
  if(!form || form.querySelector('.mm-consult-alt')) return;
  var p = document.createElement('p');
  p.className = 'mm-consult-alt';
  var links = '<a href="tel:' + C.tel.replace(/-/g, '') + '">전화 ' + C.tel + '</a> · <a href="mailto:' + C.email + '">이메일 보내기</a>';
  if(C.kakao){ links += ' · <a href="' + C.kakao + '" target="_blank" rel="noopener">카카오톡 상담</a>'; }
  p.innerHTML = '폼이 번거로우시면 — ' + links;
  form.appendChild(p);
}

function ready(fn){
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', fn); }
  else { fn(); }
}

ready(function(){
  var st = document.createElement('style');
  st.textContent = '.mm-consult-alt{margin:10px 0 0;font-size:13px;color:#6f6f6f;text-align:center;word-break:keep-all}'
    + '.mm-consult-alt a{display:inline-block;padding:8px 4px;color:inherit;text-decoration:underline;text-underline-offset:3px}';
  document.head.appendChild(st);
  addAltRow(document.querySelector('form.mf'));
  addAltRow(document.getElementById('mmForm'));
  /* 데모 각주는 demo 모드일 때만 남긴다 */
  if(C.mode !== 'demo'){
    var note = document.querySelector('#mmSuccess p span');
    if(note && /데모/.test(note.textContent)){
      var br = note.previousElementSibling;
      if(br && br.tagName === 'BR') br.remove();
      note.remove();
    }
  }
});
})();
