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
- 주소는 영문 소문자와 하이픈만 사용한다.
- HTML 링크에 `sunmi.works` 같은 도메인을 직접 쓰지 않는다.
- 공통 자산은 루트의 `assets/`, `styles.css`, `responsive.css`, `common.js`, `sitenav.js`를 사용한다.
- 기존 루트 `.html` 파일은 외부 링크 보호용 리다이렉트만 유지한다.
- `*.backup.html`, `*-test.html`, `*-proto.html`, `tmp/`는 배포하지 않는다.

## 안전한 반영 순서

1. 로컬에서 페이지와 링크를 수정한다.
2. PC·모바일 화면, 이미지, 메뉴, 콘솔 오류를 확인한다.
3. GitHub 작업 브랜치에 올린다.
4. 미리보기 확인 후 `main`에 반영한다.
5. 최종 도메인은 사이트 완성 후 GitHub Pages와 후이즈 DNS에서 함께 변경한다.
