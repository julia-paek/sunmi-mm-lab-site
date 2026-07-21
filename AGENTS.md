# MM LAB 사이트 작업 규칙

## 주소

- 정식 페이지는 항상 `폴더/index.html` 방식으로 만든다.
- 주소는 영문 소문자와 하이픈만 사용한다.
- 창호 상세: `/windows/{brand}/{series}/{model}/`
- LX 뷰프레임: `/windows/lx/viewframe/{finished|custom}/{model}/`
- 시공 사례: `/projects/{slug}/`
- 인테리어 상세: `/interior/{slug}/`
- 도메인 주소를 HTML에 직접 쓰지 않는다.

## 공통 연결

- 모든 정식 페이지에 루트의 `sitenav.js`를 연결한다.
- 창호·방충망 제품 페이지에는 `common.js`도 연결한다.
- 새 페이지에 `gnb.js`를 사용하지 않는다. 이 파일은 과거 호환용이다.
- 이미지·CSS·JS 상대 경로는 페이지 깊이에 맞게 검증한다.
- 공개 중인 옛 주소를 바꾸면 리다이렉트 파일을 남긴다.
- 새 주소는 `ROUTES.md`에도 기록한다.

## 검증

- PC·모바일 레이아웃, 이미지, CSS, 메뉴 링크, 콘솔 오류를 확인한다.
- 메뉴·브랜드 색상은 상위 경로 규칙을 자동으로 이어받는지 확인한다.
- `*.backup.html`, `*-test.html`, `*-proto.html`, `tmp/`, `.DS_Store`는 배포하지 않는다.

## GitHub 안전수칙

- 개발 중에는 작업 브랜치만 사용한다.
- 명시적 승인 전에는 `main`, `CNAME`, `.nojekyll`, GitHub Pages 설정, 도메인, DNS를 변경하지 않는다.
- 작업 브랜치 검토 후 사용자 승인을 받은 경우에만 `main`에 반영한다.
