# MM LAB URL 구조

최종 도메인이 바뀌어도 하위 주소가 유지되도록 모든 정식 페이지를 `폴더/index.html` 방식으로 관리한다.

| 역할 | 정식 경로 | 로컬 파일 |
|---|---|---|
| 메인 | `/` | `index.html` |
| MM LAB 소개 | `/about/` | `about/index.html` |
| 창호 전체 | `/windows/` | `windows/index.html` |
| LX하우시스 | `/windows/lx/` | `windows/lx/index.html` |
| LX 유로시스템9 PL | `/windows/lx/euro-system-9/pl/` | `windows/lx/euro-system-9/pl/index.html` |
| LX 유로시스템9 AL | `/windows/lx/euro-system-9/al/` | `windows/lx/euro-system-9/al/index.html` |
| KCC | `/windows/kcc/` | `windows/kcc/index.html` |
| KBE | `/windows/kbe/` | `windows/kbe/index.html` |
| 고구려안전방충망 | `/screens/kogo/` | `screens/kogo/index.html` |
| 인테리어 | `/interior/` | `interior/index.html` |
| 시공 사례 | `/projects/` | `projects/index.html` |

## 이후 페이지 규칙

- 제품 상세: `/windows/{brand}/{series}/{model}/index.html`
- 시공 사례 상세: `/projects/{project-slug}/index.html`
- 인테리어 상세: `/interior/{page-slug}/index.html`
- 주소는 영문 소문자와 하이픈만 사용한다.
- HTML 링크에 `sunmi.works` 같은 도메인을 직접 쓰지 않는다.
- 공통 자산은 루트의 `assets/`, `styles.css`, `responsive.css`, `common.js`, `sitenav.js`를 사용한다.
- 기존 루트 `.html` 파일은 외부 링크 보호용 리다이렉트만 유지한다.
- `*.backup.html`, `*-test.html`, `*-proto.html`, `tmp/`는 배포하지 않는다.

## LX 뷰프레임 확장 구조

아래 주소는 페이지가 실제로 제작될 때 해당 폴더의 `index.html`을 만들면 활성화된다. 지금은 규칙만 정한 상태다.

| 역할 | 예정 주소 | 파일 규칙 |
|---|---|---|
| 뷰프레임 허브 | `/windows/lx/viewframe/` | `windows/lx/viewframe/index.html` |
| 완성창 | `/windows/lx/viewframe/finished/` | `windows/lx/viewframe/finished/index.html` |
| 제작창 | `/windows/lx/viewframe/custom/` | `windows/lx/viewframe/custom/index.html` |
| 완성창 모델 | `/windows/lx/viewframe/finished/{model}/` | `windows/lx/viewframe/finished/{model}/index.html` |
| 제작창 모델 | `/windows/lx/viewframe/custom/{model}/` | `windows/lx/viewframe/custom/{model}/index.html` |

새 하위 페이지는 같은 상위 주소를 기준으로 공통 메뉴의 현재 위치와 브랜드 색상을 자동으로 이어받는다. 메뉴 목록에 새 이름을 직접 노출해야 할 때만 `sitenav.js`의 메뉴 데이터에 항목을 추가한다.

## 새 페이지 체크리스트

1. 정해진 주소와 같은 폴더를 만들고 그 안에 `index.html`을 둔다.
2. `sitenav.js`를 연결하고, 창호 제품 페이지는 `common.js`도 연결한다.
3. 이미지·CSS·메뉴 링크가 중첩 폴더에서도 열리는지 확인한다.
4. PC·모바일 화면과 브라우저 콘솔 오류를 확인한다.
5. 먼저 작업 브랜치에 올리고 검토한 뒤에만 `main`에 반영한다.

## 안전한 반영 순서

1. 로컬에서 페이지와 링크를 수정한다.
2. PC·모바일 화면, 이미지, 메뉴, 콘솔 오류를 확인한다.
3. GitHub 작업 브랜치에 올린다.
4. 미리보기 확인 후 `main`에 반영한다.
5. 최종 도메인은 사이트 완성 후 GitHub Pages와 후이즈 DNS에서 함께 변경한다.
