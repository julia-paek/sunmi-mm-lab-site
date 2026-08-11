/* MM LAB 상담 접수 공용 모듈 — consult.js
   ─────────────────────────────────────────────────────────────
   · 창호 페이지는 창호 상담, 인테리어 페이지는 인테리어 상담이 기본입니다.
   · 방문자는 상담창 상단에서 상담 종류를 바꿀 수 있습니다.
   · 접수 방식은 기존 mailto(메일 앱 열기)를 유지합니다.
   · 'service'와 'demo' 모드는 추후 필요할 때 그대로 사용할 수 있습니다. */
(function(){
'use strict';
window.MM_CONSULT = window.MM_CONSULT || {
  mode: 'mailto',
  endpoint: '',                    /* 예: 'https://formspree.io/f/xxxxxxx' */
  email: 'ksw.mmlab@gmail.com',
  tel: '02-6012-0033',
  kakao: ''                        /* 값을 넣으면 카카오톡 상담 링크가 표시됩니다 */
};
var C = window.MM_CONSULT;
var formCount = 0;

function routeDefaultType(){
  return /\/interior(?:\/|$|\/index\.html$)/.test(location.pathname) ? 'interior' : 'window';
}

function typeLabel(type){
  return type === 'interior' ? '인테리어' : '창호';
}

function valueOf(form, name){
  var el = form.querySelector('[name="' + name + '"]');
  return el && !el.disabled && el.value ? el.value.trim() : '';
}

function fields(form){
  var type = valueOf(form, 'consultType') || routeDefaultType();
  return {
    type: type,
    name: valueOf(form, 'name'),
    tel: valueOf(form, 'tel'),
    size: valueOf(form, 'size'),
    brand: valueOf(form, 'brand'),
    when: valueOf(form, 'when'),
    message: valueOf(form, 'message')
  };
}

function mailtoUrl(d){
  var label = typeLabel(d.type);
  var body = [
    '상담 종류: ' + label,
    '이름: ' + d.name,
    '연락처: ' + d.tel
  ];
  if(d.type === 'window'){
    body.push(
      '평형: ' + (d.size || '-'),
      '관심 브랜드: ' + (d.brand || '-'),
      '시공 희망 시기: ' + (d.when || '-')
    );
  }
  body.push('', '문의 내용:', d.message);
  return 'mailto:' + C.email
    + '?subject=' + encodeURIComponent('[' + label + ' 상담] ' + d.name + ' 님')
    + '&body=' + encodeURIComponent(body.join('\n'));
}

/* 메일 앱을 열지 않고도 생성 결과를 검증할 수 있는 읽기 전용 빌더입니다. */
window.mmConsultBuildMailto = function(form){ return mailtoUrl(fields(form)); };

/* 상담 모드에 필요한 창호 입력란이 없는 폼(인테리어 페이지)에만 추가합니다. */
function ensureWindowFields(form, uid){
  var size = form.querySelector('[name="size"]');
  var brand = form.querySelector('[name="brand"]');
  var when = form.querySelector('[name="when"]');
  if(size && brand && when){
    var row = size.parentElement && size.parentElement.parentElement;
    if(row && row === brand.parentElement.parentElement){ row.setAttribute('data-mm-window-section',''); }
    else{
      if(size.parentElement) size.parentElement.setAttribute('data-mm-window-section','');
      if(brand.parentElement) brand.parentElement.setAttribute('data-mm-window-section','');
    }
    if(when.parentElement) when.parentElement.setAttribute('data-mm-window-section','');
    return;
  }

  var message = form.querySelector('[name="message"]');
  var messageBlock = message && message.parentElement;
  var wrap = document.createElement('div');
  wrap.className = 'mm-consult-generated';
  wrap.setAttribute('data-mm-window-section','');
  wrap.innerHTML = ''
    + '<div class="mm-consult-window-grid">'
    +   '<div><label for="' + uid + '-size">평형</label><select id="' + uid + '-size" name="size"><option value="">선택</option><option>20평대</option><option>30평대</option><option>40평대</option><option>50평+</option><option>상가·기타</option></select></div>'
    +   '<div><label for="' + uid + '-brand">관심 브랜드</label><select id="' + uid + '-brand" name="brand"><option value="">선택</option><option>LX하우시스</option><option>KCC</option><option>독일 시스템창호 KBE</option><option>고구려안전방충망</option><option>잘 모르겠음 / 추천</option></select></div>'
    + '</div>'
    + '<div><label for="' + uid + '-when">시공 희망 시기</label><select id="' + uid + '-when" name="when"><option value="">선택</option><option>1개월 이내</option><option>1~3개월</option><option>3~6개월</option><option>6개월+ / 미정</option></select></div>';
  form.insertBefore(wrap, messageBlock || null);
}

function setType(form, type, focusTab){
  type = type === 'interior' ? 'interior' : 'window';
  form.dataset.consultType = type;
  var hidden = form.querySelector('[name="consultType"]');
  if(hidden) hidden.value = type;
  form.querySelectorAll('[data-consult-type]').forEach(function(button){
    var selected = button.getAttribute('data-consult-type') === type;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-selected', selected ? 'true' : 'false');
    button.tabIndex = selected ? 0 : -1;
    if(selected && focusTab) button.focus();
  });
  form.querySelectorAll('[data-mm-window-section]').forEach(function(section){
    section.hidden = type !== 'window';
  });
  ['size','brand','when'].forEach(function(name){
    var el = form.querySelector('[name="' + name + '"]');
    if(el) el.disabled = type !== 'window';
  });
  var message = form.querySelector('[name="message"]');
  if(message){
    message.placeholder = type === 'interior'
      ? '원하시는 공간·예산·일정을 적어주세요.'
      : '관심 모델·평형 등을 적어주세요.';
  }
  var note = form.querySelector('.mm-consult-kind-note');
  if(note){
    note.textContent = type === 'interior'
      ? '원하는 공간과 예산, 일정을 편하게 알려주세요.'
      : '평형과 관심 브랜드를 알려주시면 빠르게 확인해드려요.';
  }
}

window.mmConsultSetType = function(form, type){
  if(typeof form === 'string'){ type = form; form = document.querySelector('form.mf, #mmForm'); }
  if(form) setType(form, type, false);
};

function enhanceForm(form){
  if(!form || form.dataset.mmConsultEnhanced) return;
  form.dataset.mmConsultEnhanced = 'true';
  form.classList.add('mm-consult-form');
  var overlay = form.closest('.ov, .modal-overlay');
  if(overlay) overlay.classList.add('mm-consult-overlay');
  formCount += 1;
  var uid = 'mm-consult-' + formCount;
  var defaultType = routeDefaultType();
  form.dataset.defaultConsultType = defaultType;

  var hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.name = 'consultType';
  hidden.value = defaultType;
  form.appendChild(hidden);

  var chooser = document.createElement('div');
  chooser.className = 'mm-consult-kind';
  chooser.innerHTML = ''
    + '<div class="mm-consult-kind-tabs" role="tablist" aria-label="상담 종류">'
    +   '<button type="button" role="tab" data-consult-type="window">창호 상담</button>'
    +   '<button type="button" role="tab" data-consult-type="interior">인테리어 상담</button>'
    + '</div>'
    + '<p class="mm-consult-kind-note" aria-live="polite"></p>';
  form.insertBefore(chooser, form.firstChild);
  ensureWindowFields(form, uid);

  chooser.addEventListener('click', function(e){
    var button = e.target.closest('[data-consult-type]');
    if(button) setType(form, button.getAttribute('data-consult-type'), false);
  });
  chooser.addEventListener('keydown', function(e){
    if(e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    setType(form, form.dataset.consultType === 'window' ? 'interior' : 'window', true);
  });
  form.addEventListener('reset', function(){
    setTimeout(function(){ setType(form, form.dataset.defaultConsultType, false); }, 0);
  });
  setType(form, defaultType, false);
}

/* 폼 제출 공용 처리 — 기존 메일 앱 열기 방식을 그대로 유지합니다. */
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
  st.textContent = ''
    + '.mm-consult-overlay{z-index:1700!important}'
    + '.mm-consult-kind{margin:0 0 6px}'
    + '.mm-consult-kind-tabs{display:grid;grid-template-columns:1fr 1fr;border:1px solid #2F5233;background:#F4F0E6}'
    + '.mm-consult-kind-tabs button{appearance:none;min-height:46px;padding:10px 14px;border:0;border-radius:0;background:transparent;color:#2F5233;font:inherit;font-size:14px;font-weight:700;letter-spacing:-.01em;cursor:pointer;transition:background-color .18s ease,color .18s ease}'
    + '.mm-consult-kind-tabs button+button{border-left:1px solid #2F5233}'
    + '.mm-consult-kind-tabs button.is-selected{background:#2F5233;color:#fff}'
    + '.mm-consult-kind-tabs button:focus-visible{position:relative;z-index:1;outline:2px solid #111;outline-offset:3px}'
    + '.mm-consult-kind-note{min-height:18px;margin:8px 1px 0;color:#6F7866;font-size:12px;line-height:1.5;word-break:keep-all}'
    + '.mm-consult-generated{display:flex;flex-direction:column;gap:12px}'
    + '.mm-consult-window-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
    + '[data-mm-window-section][hidden]{display:none!important}'
    + '.mm-consult-alt{margin:10px 0 0;font-size:13px;color:#6f6f6f;text-align:center;word-break:keep-all}'
    + '.mm-consult-alt a{display:inline-block;padding:8px 4px;color:inherit;text-decoration:underline;text-underline-offset:3px}'
    + '@media(max-width:480px){.mm-consult-window-grid{grid-template-columns:1fr}.mm-consult-kind-tabs button{min-height:44px;padding:9px 8px;font-size:13px}.mm-consult-kind-note{margin-top:7px}}'
    + '@media(prefers-reduced-motion:reduce){.mm-consult-kind-tabs button{transition:none}}';
  document.head.appendChild(st);

  document.querySelectorAll('form.mf, #mmForm').forEach(function(form){
    enhanceForm(form);
    addAltRow(form);
  });

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
