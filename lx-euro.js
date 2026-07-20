(function () {
  var root = document.querySelector("[data-e9-material]");
  if (!root) return;

  var models = {
    "pls200": {
      name: "E9-PLS200", type: "LIFT & SLIDE · PVC", family: "slide",
      image: "assets/euro9/lift-slide-pl.jpg",
      summary: "특허 출원한 창틀 내부 구조로 단열성을 높인 에너지소비효율 1등급 창호입니다.",
      grade: "1등급", uvalue: "0.802 W/㎡K", glass: "24 · 42.5 · 43 · 47 · 51mm",
      feature: "PVC 시스템창호", use: "공식 제품코드 E9-PLS200/250N",
      note: "43mm(5일반 + 14아르곤 + 5수퍼로이 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 향상" }, { icon: "hardware", label: "고품질 하드웨어" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "pls250n": {
      name: "E9-PLS250N", type: "LIFT & SLIDE · PVC", family: "slide",
      image: "assets/euro9/lift-slide-pl.jpg",
      summary: "특허 출원한 창틀 내부 구조로 단열성을 높인 에너지소비효율 1등급 창호입니다.",
      grade: "1등급", uvalue: "0.887 W/㎡K", glass: "24 · 42.5 · 43 · 47 · 51mm",
      feature: "PVC 시스템창호", use: "공식 제품코드 E9-PLS200/250N",
      note: "43mm(5로이유리 + 14아르곤 + 5일반 + 14아르곤 + 5로이유리) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 향상" }, { icon: "hardware", label: "고품질 하드웨어" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "ptt85": {
      name: "E9-PTT85", type: "TILT & TURN · PVC", family: "tilt",
      image: "assets/euro9/pl-features/ptt85-room-12.jpg",
      summary: "감각적인 공간 표현과 편리한 환기가 가능한 Tilt & Turn 방식의 프리미엄 PVC 시스템창입니다.",
      grade: "1등급", uvalue: "0.725 W/㎡K", glass: "24 · 43 · 46.5 · 47 · 51mm",
      feature: "PVC 시스템창호", use: "공식 제품코드 E9-PTT85 / E9-PTT85 PHI / E9-PTT200",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "operation", label: "우수한 개폐감" }, { icon: "phi", label: "PHI 인증" }]
    },
    "ptt85-phi": {
      name: "E9-PTT85 PHI", type: "TILT & TURN · PVC · PHI", family: "tilt",
      image: "assets/euro9/pl-features/ptt85-room-12.jpg",
      summary: "고단열 설계와 독일 PHI 인증 정보를 갖춘 Tilt & Turn 계열의 PVC 시스템창입니다.",
      grade: "1등급", uvalue: "0.725 W/㎡K", glass: "24 · 43 · 46.5 · 47 · 51mm",
      feature: "PHI 인증 계열", use: "공식 제품코드 E9-PTT85 / E9-PTT85 PHI / E9-PTT200",
      note: "공식 성능표는 E9-PTT85와 E9-PTT85 PHI를 통합 표기합니다. 43mm 유리 기준입니다.",
      benefits: [{ icon: "operation", label: "우수한 개폐감" }, { icon: "phi", label: "PHI 인증" }]
    },
    "ptt200": {
      name: "E9-PTT200", type: "TILT & TURN · PVC", family: "tilt",
      image: "assets/euro9/pl-features/ptt200-room-12.jpg",
      summary: "인테리어 마감용 공틀이 일체화되어 있어 다양한 현장에 적용 가능한 Tilt & Turn 시스템창입니다.",
      grade: "1등급", uvalue: "0.685 W/㎡K", glass: "24 · 43 · 46.5 · 47 · 51mm",
      feature: "PVC 시스템창호", use: "공식 제품코드 E9-PTT85 / E9-PTT85 PHI / E9-PTT200",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "operation", label: "우수한 개폐감" }]
    },
    "ptu200": {
      name: "E9-PTU200 (mini)", type: "TURN ONLY · PVC", family: "turn",
      image: "assets/euro9/pl-features/ptu200-room-12.jpg",
      summary: "좁은 공간에도 적용 가능한 시스템 미니 단창으로 환기가 편리하며, 얇은 프레임 디자인으로 탁 트인 전망을 선사합니다.",
      grade: "1등급", uvalue: "0.809 W/㎡K", glass: "43mm",
      feature: "PVC 시스템창호", use: "공식 제품코드 E9-PTU200(mini)",
      note: "43mm(5일반 + 14아르곤 + 5수퍼로이 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "compact", label: "작은 사이즈" }, { icon: "slim", label: "슬림 프레임" }]
    },
    "ptd200": {
      name: "E9-PTD200", type: "TURNING DOOR · PVC", family: "door",
      image: "assets/euro9/pl-features/ptd200-room-18.jpg",
      summary: "실외와 내부 공간을 자연스럽게 이어주는 PVC 시스템 도어입니다. 문턱을 낮추고 냉기를 막는 고기밀 FLATSILL 옵션을 선택할 수 있습니다.",
      grade: "1등급", uvalue: "0.733 W/㎡K", glass: "22 · 24 · 39 · 42.5 · 43mm",
      feature: "PVC 시스템 도어", use: "공식 제품코드 E9-PTD200",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · FLATSILL 선택 시 해당 등급 사양이 적용되지 않습니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "hardware", label: "고품질 하드웨어" }]
    },
    "als200": {
      name: "E9-ALS200", type: "LIFT & SLIDE · ALUMINIUM", family: "slide",
      image: "assets/euro9/products/als200.jpg",
      summary: "대형 개구부와 넓은 조망을 위한 알루미늄 Lift & Slide 시스템창입니다. 내부 단열폼과 PU 복합재를 적용해 단열 성능을 보완했습니다.",
      grade: "2등급", uvalue: "0.924 W/㎡K", glass: "24 · 42.5 · 43 · 46.5 · 47 · 51mm",
      feature: "슬림 프레임 · PU 복합 단열재", use: "추천 공간: 대형 거실, 테라스, 고층 조망창",
      note: "47mm(5PLAONE + 16아르곤 + 5일반 + 16아르곤 + 5PLAONE) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "slim", label: "슬림 프레임" }, { icon: "thermal", label: "단열성 강화" }, { icon: "design", label: "고품격 디자인" }]
    },
    "als245": {
      name: "E9-ALS245", type: "LIFT & SLIDE · ALUMINIUM · PHI", family: "slide",
      image: "assets/euro9/products/als245.jpg",
      summary: "독일 Pural 특수 단열블록과 3중 압착 구조를 적용한 PHI 인증 Lift & Slide 시스템창입니다.",
      grade: "1등급", uvalue: "0.731 W/㎡K", glass: "24 · 26 · 42.5 · 43 · 51mm",
      feature: "PHI 인증 · 3중 압착 구조", use: "추천 공간: 패시브 주택, 대형 거실, 프리미엄 테라스",
      note: "51mm(5수퍼로이 + 18아르곤 + 5일반 + 18아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "operation", label: "우수한 개폐감" }, { icon: "phi", label: "PHI 인증" }]
    },
    "aps210": {
      name: "E9-APS210", type: "PARALLEL SLIDE · ALUMINIUM", family: "slide",
      image: "assets/euro9/products/aps210.jpg",
      summary: "창짝이 앞으로 나온 뒤 옆으로 이동하는 Parallel Slide 방식입니다. 슬림한 입면과 이중 실링 구조를 함께 갖췄습니다.",
      grade: "3등급", uvalue: "1.372 W/㎡K", glass: "24 · 42.5 · 43mm",
      feature: "평행 슬라이드 · 이중 실링", use: "추천 공간: 거실, 주방, 상부 고정창 구성",
      note: "43mm(5일반 + 14아르곤 + 5수퍼로이 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "slim", label: "슬림 프레임" }, { icon: "sealing", label: "밀폐력 향상" }, { icon: "layout", label: "자유로운 구성" }]
    },
    "als283d": {
      name: "E9-ALS283D", type: "LIFT & SLIDE · PVC + ALUMINIUM", family: "slide",
      image: "assets/euro9/products/als283d.jpg",
      summary: "실내측 PVC와 실외측 알루미늄을 결합한 복합창입니다. PVC의 단열성과 알루미늄의 외부 내구성·컬러 선택성을 함께 고려했습니다.",
      grade: "1등급", uvalue: "0.847 W/㎡K", glass: "내창 22·24 / 외창 22·24·23.76·27.76mm",
      feature: "내부 PVC · 외부 AL 복합 구조", use: "추천 공간: 고급 주택 거실, 외부 마감 연계 창호",
      badge: "PVC + AL COMPOSITE",
      note: "내창 22mm·외창 상부 22mm/하부 27.76mm 대표 사양 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "design", label: "고품격 디자인" }]
    },
    "att80": {
      name: "E9-ATT80", type: "TILT & TURN · ALUMINIUM", family: "tilt",
      image: "assets/euro9/products/att80.jpg",
      summary: "자사 단열블록과 감압 프로파일 옵션으로 단열과 수밀 성능을 강화한 Tilt & Turn 시스템창입니다.",
      grade: "1등급", uvalue: "0.884 W/㎡K", glass: "24 · 43 · 46.5 · 47mm",
      feature: "단열블록 · 감압 프로파일 옵션", use: "추천 공간: 침실, 해안·고풍압 지역 창호",
      note: "47mm 대표 유리 사양 기준 · 유리 사양과 감압 프로파일 옵션에 따라 성능이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "att90": {
      name: "E9-ATT90", type: "TILT & TURN · ALUMINIUM", family: "tilt",
      image: "assets/euro9/products/att90.jpg",
      summary: "슬림 프레임에 풍압감압 시스템을 적용해 바람과 빗물 유입을 줄이는 Tilt & Turn 시스템창입니다.",
      grade: "2등급", uvalue: "1.103 W/㎡K", glass: "24 · 43mm",
      feature: "슬림 프레임 · 풍압감압 시스템", use: "추천 공간: 고층 주거, 주방, 침실",
      note: "43mm(5일반 + 14아르곤 + 5수퍼로이 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "slim", label: "슬림 프레임" }, { icon: "sealing", label: "밀폐력 향상" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "att100": {
      name: "E9-ATT100", type: "TILT & TURN · ALUMINIUM · PHI", family: "tilt",
      image: "assets/euro9/products/att100.jpg",
      summary: "Pural 특수 단열블록과 3중 실링 구조를 적용한 PHI 인증 Tilt & Turn 시스템창입니다.",
      grade: "1등급", uvalue: "0.885 W/㎡K", glass: "24 · 43mm",
      feature: "PHI 인증 · 3중 실링", use: "추천 공간: 고단열 주택, 침실, 서재",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "sealing", label: "밀폐력 향상" }, { icon: "operation", label: "우수한 개폐감" }, { icon: "phi", label: "PHI 인증" }]
    },
    "ash80": {
      name: "E9-ASH80", type: "SIDE HUNG · ALUMINIUM", family: "hung",
      image: "assets/euro9/products/ash80-ath80.jpg",
      summary: "옆으로 열리는 폭이 좁은 환기창입니다. 단열블록을 적용해 알루미늄 프레임의 단열 성능을 보완했습니다.",
      grade: "2등급", uvalue: "0.965 W/㎡K", glass: "24 · 43 · 46.5 · 47mm",
      feature: "측면 개방 · 단열블록", use: "추천 공간: 거실 보조창, 계단실, 세로 환기창",
      note: "43mm 대표 유리 사양 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "ath80": {
      name: "E9-ATH80", type: "TOP HUNG · ALUMINIUM", family: "hung",
      image: "assets/euro9/products/ash80-ath80.jpg",
      summary: "상부 축을 기준으로 바깥쪽이 열리는 환기창입니다. 실내 공간을 크게 침범하지 않아 주방과 높은 위치의 창에 적합합니다.",
      grade: "2등급", uvalue: "0.983 W/㎡K", glass: "24 · 43 · 46.5 · 47mm",
      feature: "상부 개방 · 단열블록", use: "추천 공간: 주방, 높은 환기창, 상부 채광창",
      note: "47mm 대표 유리 사양 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "operation", label: "우수한 개폐감" }]
    },
    "ash90": {
      name: "E9-ASH90", type: "SIDE HUNG · ALUMINIUM", family: "hung",
      image: "assets/euro9/products/ash90-ath90.jpg",
      summary: "슬림 프레임과 단열폼을 적용한 측면 여닫이창입니다. 좁고 긴 입면에서 환기와 조망을 함께 확보합니다.",
      grade: "2등급", uvalue: "1.003 W/㎡K", glass: "24 · 43mm",
      feature: "슬림 프레임 · 단열폼", use: "추천 공간: 계단실, 복도, 세로형 환기창",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "slim", label: "슬림 프레임" }, { icon: "thermal", label: "단열성 강화" }, { icon: "hardware", label: "고품질 하드웨어" }]
    },
    "ath90": {
      name: "E9-ATH90", type: "TOP HUNG · ALUMINIUM", family: "hung",
      image: "assets/euro9/products/ash90-ath90.jpg",
      summary: "얇은 프레임과 하드웨어를 적용한 상부 여닫이창입니다. 가로로 긴 개구부에 정돈된 입면을 만듭니다.",
      grade: "2등급", uvalue: "1.003 W/㎡K", glass: "24 · 43mm",
      feature: "슬림 프레임 · 상부 개방", use: "추천 공간: 주방, 가로형 환기창, 높은 창",
      note: "43mm(5수퍼로이 + 14아르곤 + 5일반 + 14아르곤 + 5수퍼로이) 기준 · 유리 사양에 따라 소비효율등급이 달라질 수 있습니다.",
      benefits: [{ icon: "slim", label: "슬림 프레임" }, { icon: "thermal", label: "단열성 강화" }, { icon: "hardware", label: "고품질 하드웨어" }]
    },
    "adr80": {
      name: "E9-ADR80", type: "SYSTEM DOOR · ALUMINIUM", family: "door",
      image: "assets/euro9/products/adr80.jpg",
      summary: "단열블록과 하부 기밀재를 적용한 80mm급 알루미늄 시스템 도어입니다. With sill과 No sill 구성을 현장 조건에 맞춰 선택합니다.",
      grade: "2등급", uvalue: "0.988 W/㎡K", glass: "24 · 43 · 46.5 · 47mm",
      feature: "하부 기밀재 · 문턱 구성 선택", use: "추천 공간: 주거 테라스, 상업 공간 출입구",
      note: "47mm 대표 유리 사양 기준 · 외부 적용 시 차양과 바닥 배수 조건을 확보해야 합니다.",
      benefits: [{ icon: "thermal", label: "단열성 강화" }, { icon: "sealing", label: "밀폐력 향상" }]
    },
    "adr100": {
      name: "E9-ADR100", type: "SYSTEM DOOR · ALUMINIUM", family: "door",
      image: "assets/euro9/products/adr100.jpg",
      summary: "Pural 특수 단열블록과 고품질 하드웨어를 적용한 100mm급 알루미늄 시스템 도어입니다.",
      grade: "2등급", uvalue: "0.909 W/㎡K", glass: "24 · 26 · 43 · 51mm",
      feature: "특수 단열블록 · 고품질 하드웨어", use: "추천 공간: 주택 주출입구, 테라스, 상업 공간",
      note: "51mm(5수퍼로이 + 18공기 + 5일반 + 18공기 + 5수퍼로이) 기준 · 외부 적용 시 차양과 바닥 배수 조건을 확보해야 합니다.",
      benefits: [{ icon: "design", label: "고품격 디자인" }, { icon: "thermal", label: "단열성 강화" }, { icon: "sealing", label: "밀폐력 향상" }]
    },
    "afd68": {
      name: "E9-AFD68", type: "FOLDING DOOR · ALUMINIUM", family: "door",
      image: "assets/euro9/products/afd68.jpg",
      summary: "여러 장의 창짝을 한쪽 또는 양쪽으로 접어 큰 개방폭을 만드는 알루미늄 폴딩도어입니다.",
      grade: "3등급", uvalue: "1.596 W/㎡K", glass: "16 · 22 · 24mm",
      feature: "1Way · 2Way · 경첩도어 조합", use: "추천 공간: 카페, 테라스, 실내외 확장 공간",
      note: "24mm 대표 유리 사양 기준 · 외부 적용 시 차양과 바닥 배수 조건을 확보해야 합니다.",
      benefits: [{ icon: "hardware", label: "고품질 하드웨어" }, { icon: "layout", label: "자유로운 구성" }, { icon: "design", label: "고품격 디자인" }]
    }
  };

  var plFeatures = {
    "pls200": [
      { image: "assets/euro9/pl-features/pl-slide-structure-catalog.jpg", title: "특허 출원한 창틀 내부 구조", copy: "단열성을 높인 에너지소비효율 1등급 창호입니다. (단열성 창호 시스템_다중격벽구조: 10-2021-0033606)" },
      { image: "assets/euro9/pl-features/pl-slide-handle-catalog.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." },
      { image: "assets/euro9/pl-features/pl-slide-flush-catalog.jpg", title: "매립형 하드웨어와 고급 마감재", copy: "매립형 하드웨어와 고급스러운 마감재로 차별화한 디자인입니다." }
    ],
    "pls250n": [
      { image: "assets/euro9/pl-features/pl-slide-structure-catalog.jpg", title: "특허 출원한 창틀 내부 구조", copy: "단열성을 높인 에너지소비효율 1등급 창호입니다. (단열성 창호 시스템_다중격벽구조: 10-2021-0033606)" },
      { image: "assets/euro9/pl-features/pl-slide-handle-catalog.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." },
      { image: "assets/euro9/pl-features/pl-slide-flush-catalog.jpg", title: "매립형 하드웨어와 고급 마감재", copy: "매립형 하드웨어와 고급스러운 마감재로 차별화한 디자인입니다." }
    ],
    "ptt85": [
      { image: "assets/euro9/pl-features/pl-tt-phi.jpg", title: "PHI 인증 타입 선택", copy: "세계적인 패시브 건축 인증기관 PHI가 패시브 건축물과 자재에 부여하는 인증 타입을 선택할 수 있습니다." },
      { image: "assets/euro9/pl-features/pl-tt-handle.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." }
    ],
    "ptt85-phi": [
      { image: "assets/euro9/pl-features/pl-tt-phi.jpg", title: "독일 PHI 인증 획득", copy: "고단열 설계로 국산 PVC 창호 제품 최초로 독일 PHI 인증을 획득했습니다." },
      { image: "assets/euro9/pl-features/pl-tt-handle.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." }
    ],
    "ptt200": [
      { image: "assets/euro9/pl-features/pl-tt-finish.jpg", title: "인테리어 마감용 공틀 일체형", copy: "인테리어 마감용 공틀이 일체화되어 있어 다양한 현장에 적용 가능합니다." },
      { image: "assets/euro9/pl-features/pl-tt-handle.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." }
    ],
    "ptu200": [
      { image: "assets/euro9/pl-features/pl-turn-compact.jpg", title: "좁은 공간용 시스템 미니 단창", copy: "좁은 공간에도 적용 가능한 시스템 미니 단창으로 환기가 편리합니다." },
      { image: "assets/euro9/pl-features/pl-turn-slim.jpg", title: "얇은 프레임 디자인", copy: "얇은 프레임 디자인으로 탁 트인 전망을 선사합니다." },
      { image: "assets/euro9/pl-features/pl-turn-handle.jpg", title: "독일 호페(Hoppe)사의 핸들 적용", copy: "손잡이 시편의 대장균·황색포도상구균 시험을 기준으로 항균 성능을 더했습니다." }
    ],
    "ptd200": [
      { image: "assets/euro9/pl-features/pl-door-chamber.jpg", title: "에너지소비효율 1등급 시스템 도어", copy: "삼복층 수퍼로이 유리 적용 시 단열성을 높인 에너지소비효율 1등급을 충족합니다." },
      { image: "assets/euro9/pl-features/pl-door-flatsill.jpg", title: "FLATSILL 옵션", copy: "문턱을 낮추고 냉기를 막아주는 고기밀 자재를 적용합니다. (옵션 선택 시)" }
    ]
  };

  var plFamilyFeatures = {
    slide: { label: "Lift & Slide", items: plFeatures.pls200 },
    tilt: {
      label: "Tilt & Turn",
      items: [plFeatures["ptt85-phi"][0], plFeatures.ptt200[0], plFeatures.ptt85[1]]
    },
    turn: { label: "Turn Only", items: plFeatures.ptu200 },
    door: { label: "PVC Door", items: plFeatures.ptd200 }
  };

  var alFamilyFeatures = {
    slide: {
      label: "Lift & Slide / Parallel Slide",
      items: [
        { image: "assets/euro9/products/als200.jpg", title: "슬림 프레임과 복합 단열 구조", copy: "노출부 도장 마감과 PU복합재·내부 단열폼으로 슬림한 디자인과 단열 성능을 함께 확보합니다." },
        { image: "assets/euro9/products/als245.jpg", title: "Pural 단열블록과 3중 압착", copy: "독일 Pural 특수 단열블록과 3중 압착구조를 적용한 PHI 인증 Lift & Slide 창호입니다." },
        { image: "assets/euro9/products/aps210.jpg", title: "이중 실링과 자유로운 입면", copy: "슬림 프레임, 이중 실링 구조와 상부 고정창 조합으로 다양한 입면을 구성할 수 있습니다." }
      ]
    },
    tilt: {
      label: "Tilt & Turn",
      items: [
        { image: "assets/euro9/products/att80.jpg", title: "단열블록과 감압 프로파일", copy: "자사 단열블록과 감압 프로파일 옵션으로 해안·고풍압 지역의 수밀 성능을 강화합니다." },
        { image: "assets/euro9/products/att90.jpg", title: "슬림 프레임과 풍압감압 시스템", copy: "얇은 프레임과 풍압감압 시스템으로 조망과 밀폐 성능을 함께 확보합니다." },
        { image: "assets/euro9/products/att100.jpg", title: "Pural 단열블록과 3중 실링", copy: "특수 단열블록과 3중 실링을 적용해 밀폐력을 높인 PHI 인증 시스템창입니다." }
      ]
    },
    hung: {
      label: "Side Hung / Top Hung",
      items: [
        { image: "assets/euro9/products/ash80-ath80.jpg", title: "단열블록 적용 여닫이 창호", copy: "자사 단열블록을 적용해 알루미늄 여닫이 창호의 단열 성능을 강화합니다." },
        { image: "assets/euro9/products/ash90-ath90.jpg", title: "슬림 프레임과 단열폼", copy: "광폭 폴리아미드와 단열폼을 적용하면서 얇은 프레임으로 탁 트인 전망을 제공합니다." },
        { image: "assets/euro9/products/ash80-ath80.jpg", title: "프리미엄 개폐 하드웨어", copy: "Roto·Fapim 계열 하드웨어로 부드러운 개폐감과 내구성, 디자인 완성도를 높였습니다." }
      ]
    },
    door: {
      label: "Door / Folding Door",
      items: [
        { image: "assets/euro9/products/adr80.jpg", title: "With sill / No sill 선택", copy: "단열블록과 하부 기밀재를 적용하고 현장에 따라 문턱 구성을 선택할 수 있습니다." },
        { image: "assets/euro9/products/adr100.jpg", title: "Pural 단열블록과 Dr.Hahn 하드웨어", copy: "특수 단열블록과 독일 Dr.Hahn 하드웨어로 단열성과 내구성을 높였습니다." },
        { image: "assets/euro9/products/afd68.jpg", title: "1Way·2Way 폴딩 구성", copy: "한 방향, 양개형, 경첩도어 조합 등 공간에 맞는 다양한 폴딩 방식을 선택할 수 있습니다." }
      ]
    }
  };

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (root.querySelector(".e9-pl-explorer")) {
    var explorerMaterial = root.getAttribute("data-e9-material");
    var explorerFamilyFeatures = explorerMaterial === "al" ? alFamilyFeatures : plFamilyFeatures;
    var plMethodInfo = explorerMaterial === "al" ? {
      slide: {
        name: "Lift & Slide / Parallel Slide",
        copy: "큰 창짝을 들어 올려 수평 이동하거나, 창짝을 앞으로 당긴 뒤 옆으로 밀어 여닫습니다."
      },
      tilt: {
        name: "Tilt & Turn",
        copy: "윗부분만 기울여 환기하는 Tilt와 창 전체를 안쪽으로 여는 Turn을 한 손잡이로 전환합니다."
      },
      hung: {
        name: "Side Hung / Top Hung",
        copy: "창짝을 옆 또는 위쪽 축을 기준으로 실외 방향으로 열어 실내 동선 간섭을 줄입니다."
      },
      door: {
        name: "Door / Folding Door",
        copy: "여닫이 도어는 견고한 출입구를 만들고, 폴딩도어는 여러 창짝을 접어 넓은 개방폭을 확보합니다."
      }
    } : {
      slide: {
        name: "Lift & Slide",
        copy: "창짝을 살짝 들어 올린 뒤 레일을 따라 수평으로 이동합니다. 큰 창짝도 부드럽게 열고 닫을 수 있습니다."
      },
      tilt: {
        name: "Tilt & Turn",
        copy: "윗부분만 기울여 환기하는 Tilt와 창 전체를 안쪽으로 여는 Turn을 한 손잡이로 전환합니다."
      },
      turn: {
        name: "Turn Only",
        copy: "측면 힌지를 중심으로 창 전체가 실내 쪽으로 열립니다. 작은 개구부에서도 환기와 청소가 편리합니다."
      },
      door: {
        name: "System Door",
        copy: "도어처럼 안쪽으로 여닫는 출입용 시스템입니다. 단열과 기밀을 유지하면서 낮은 문턱 옵션도 선택할 수 있습니다."
      }
    };
    var plRail = root.querySelector("[data-e9-pl-rail]");
    var plCards = Array.prototype.slice.call(root.querySelectorAll("[data-e9-pl-family]"));
    var plJumpButtons = Array.prototype.slice.call(root.querySelectorAll("[data-e9-pl-jump-model]"));
    var plDiagrams = Array.prototype.slice.call(root.querySelectorAll("[data-e9-pl-diagram]"));
    var plBubble = root.querySelector(".e9-pl-bubble");
    var plPrev = root.querySelector("[data-e9-pl-prev]");
    var plNext = root.querySelector("[data-e9-pl-next]");
    var plFamily = root.getAttribute("data-e9-default-family") || "slide";
    var activePlCard = null;
    var plHideTimer = null;

    function setText(selector, value) {
      var node = root.querySelector(selector);
      if (node) node.textContent = value;
    }

    function updatePlPointer() {
      if (!activePlCard || !plBubble) return;
      if (!plUsesHover()) {
        plBubble.style.setProperty("--e9-pointer-x", "50%");
        return;
      }
      var cardRect = activePlCard.getBoundingClientRect();
      var bubbleRect = plBubble.getBoundingClientRect();
      var pointer = cardRect.left + cardRect.width / 2 - bubbleRect.left;
      pointer = Math.max(28, Math.min(bubbleRect.width - 28, pointer));
      plBubble.style.setProperty("--e9-pointer-x", pointer + "px");
    }

    function updatePlArrows() {
      if (!plPrev || !plNext) return;
      var activeIndex = plJumpButtons.findIndex(function (button) {
        return button.classList.contains("is-active");
      });
      if (activeIndex < 0) activeIndex = 0;
      plPrev.disabled = activeIndex <= 0;
      plNext.disabled = activeIndex >= plJumpButtons.length - 1;
    }

    function plUsesHover() {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }

    function cancelPlBubbleHide() {
      if (!plHideTimer) return;
      window.clearTimeout(plHideTimer);
      plHideTimer = null;
    }

    function showPlBubble(card) {
      if (!plBubble) return;
      cancelPlBubbleHide();
      if (card) activePlCard = card;
      plBubble.setAttribute("aria-hidden", "false");
      window.requestAnimationFrame(updatePlPointer);
    }

    function hidePlBubble() {
      if (!plBubble || !plUsesHover()) return;
      plBubble.setAttribute("aria-hidden", "true");
    }

    function schedulePlBubbleHide() {
      if (!plUsesHover()) return;
      if (plHideTimer) return;
      plHideTimer = window.setTimeout(hidePlBubble, 120);
    }

    function setPlFamilyFeatures(family) {
      var group = explorerFamilyFeatures[family];
      if (!group) return;
      setText("[data-e9-feature-family]", group.label);
      Array.prototype.slice.call(root.querySelectorAll("[data-e9-feature-card]")).forEach(function (card, index) {
        var item = group.items[index];
        card.hidden = !item;
        if (!item) return;
        var featureImage = card.querySelector("[data-e9-feature-image]");
        var featureTitle = card.querySelector("[data-e9-feature-title]");
        var featureCopy = card.querySelector("[data-e9-feature-copy]");
        if (featureImage) {
          featureImage.src = item.image;
          featureImage.alt = group.label + " " + item.title;
        }
        if (featureTitle) featureTitle.textContent = item.title;
        if (featureCopy) featureCopy.textContent = item.copy;
      });
      var featureGrid = root.querySelector("[data-e9-feature-grid]");
      if (featureGrid) {
        featureGrid.setAttribute("data-feature-count", String(group.items.length));
        featureGrid.scrollLeft = 0;
      }
    }

    function setPlBenefits(data) {
      var list = root.querySelector("[data-e9-benefit-list]");
      if (!list) return;
      var benefits = data.benefits || [];
      var slots = Array.prototype.slice.call(list.querySelectorAll("[data-e9-benefit]"));
      slots.forEach(function (slot, index) {
        var benefit = benefits[index];
        slot.hidden = !benefit;
        if (!benefit) return;
        var icon = slot.querySelector("[data-e9-benefit-icon]");
        var label = slot.querySelector("[data-e9-benefit-label]");
        if (icon) icon.setAttribute("href", "#e9-benefit-" + benefit.icon);
        if (label) label.textContent = benefit.label;
      });
      list.setAttribute("aria-label", benefits.map(function (benefit) { return benefit.label; }).join(", "));
      setText("[data-e9-benefit-caption]", data.name + "의 핵심 장점");
    }

    function revealPlJumpButton(modelId) {
      var button = plJumpButtons.filter(function (item) {
        return item.getAttribute("data-e9-pl-jump-model") === modelId;
      })[0];
      if (!button) return;
      var nav = button.parentElement;
      if (!nav || nav.scrollWidth <= nav.clientWidth + 2) return;
      var navRect = nav.getBoundingClientRect();
      var buttonRect = button.getBoundingClientRect();
      var targetLeft = nav.scrollLeft + buttonRect.left - navRect.left - (nav.clientWidth - buttonRect.width) / 2;
      nav.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? "auto" : "smooth"
      });
    }

    function setPlModel(modelId, options) {
      options = options || {};
      var data = models[modelId];
      if (!data) return;
      plJumpButtons.forEach(function (button) {
        var active = button.getAttribute("data-e9-pl-jump-model") === modelId;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      window.requestAnimationFrame(function () {
        if (options.revealJumpButton !== false) revealPlJumpButton(modelId);
        updatePlArrows();
      });

      var image = root.querySelector("[data-e9-detail-image]");
      if (image) {
        image.src = data.image;
        image.alt = data.name + " 적용 공간 이미지";
      }
      setText("[data-e9-detail-type]", data.type);
      setText("[data-e9-detail-name]", data.name);
      setText("[data-e9-detail-summary]", data.summary);
      setText("[data-e9-detail-grade]", data.grade);
      setText("[data-e9-detail-uvalue]", data.uvalue);
      setText("[data-e9-detail-glass]", data.glass);
      setText("[data-e9-detail-feature]", data.feature);
      setText("[data-e9-detail-use]", data.use);
      setText("[data-e9-detail-note]", data.note || "");
      setPlBenefits(data);
    }

    function setPlFamily(nextFamily, clickedCard, preferredModelId, options) {
      options = options || {};
      plFamily = nextFamily;
      var info = plMethodInfo[plFamily];
      plCards.forEach(function (card) {
        var active = card.getAttribute("data-e9-pl-family") === plFamily;
        card.classList.toggle("is-active", active);
        card.setAttribute("aria-pressed", active ? "true" : "false");
        if (active) activePlCard = card;
      });
      plDiagrams.forEach(function (diagram) {
        var active = diagram.getAttribute("data-e9-pl-diagram") === plFamily;
        diagram.hidden = !active;
        diagram.classList.toggle("is-active", active);
      });
      if (info) {
        setText("[data-e9-pl-method-name]", info.name);
        setText("[data-e9-pl-method-copy]", info.copy);
      }
      setPlFamilyFeatures(plFamily);
      var firstModelButton = plJumpButtons.filter(function (button) {
        return button.getAttribute("data-family") === plFamily;
      })[0];
      var selectedModel = preferredModelId || (firstModelButton && firstModelButton.getAttribute("data-e9-pl-jump-model"));
      if (selectedModel) setPlModel(selectedModel, options);
      window.requestAnimationFrame(function () {
        updatePlPointer();
        updatePlArrows();
      });
    }

    function revealPlCard(card) {
      if (!plRail || !card) return;
      var railRect = plRail.getBoundingClientRect();
      var cardRect = card.getBoundingClientRect();
      var targetLeft = plRail.scrollLeft + cardRect.left - railRect.left - (plRail.clientWidth - cardRect.width) / 2;
      plRail.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? "auto" : "smooth"
      });
    }

    plCards.forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        if (!plUsesHover()) return;
        setPlFamily(card.getAttribute("data-e9-pl-family"), card);
        showPlBubble(card);
      });
      card.addEventListener("mouseleave", schedulePlBubbleHide);
      card.addEventListener("focus", function () {
        setPlFamily(card.getAttribute("data-e9-pl-family"), card);
        showPlBubble(card);
      });
      card.addEventListener("blur", schedulePlBubbleHide);
      card.addEventListener("click", function () {
        setPlFamily(card.getAttribute("data-e9-pl-family"), card);
        showPlBubble(card);
      });
    });
    plJumpButtons.forEach(function (button) {
      function activateJump(options) {
        options = options || {};
        var family = button.getAttribute("data-family");
        var modelId = button.getAttribute("data-e9-pl-jump-model");
        var familyCard = plCards.filter(function (card) {
          return card.getAttribute("data-e9-pl-family") === family;
        })[0];
        setPlFamily(family, familyCard, modelId, {
          revealJumpButton: options.revealJumpButton !== false
        });
        showPlBubble(familyCard);
        revealPlCard(familyCard);
      }
      button.addEventListener("mouseenter", function () {
        if (plUsesHover()) activateJump({ revealJumpButton: false });
      });
      button.addEventListener("mouseleave", schedulePlBubbleHide);
      button.addEventListener("focus", activateJump);
      button.addEventListener("blur", schedulePlBubbleHide);
      button.addEventListener("click", activateJump);
    });

    if (plBubble) {
      plBubble.addEventListener("mouseenter", cancelPlBubbleHide);
      plBubble.addEventListener("mouseleave", schedulePlBubbleHide);
      plBubble.addEventListener("focusin", cancelPlBubbleHide);
      plBubble.addEventListener("focusout", schedulePlBubbleHide);
    }
    root.addEventListener("pointermove", function (event) {
      if (!plUsesHover()) return;
      var interactive = event.target.closest(".e9-pl-card, .e9-pl-model-nav button, .e9-pl-bubble");
      if (interactive) cancelPlBubbleHide();
      else schedulePlBubbleHide();
    }, { passive: true });
    root.addEventListener("pointerleave", schedulePlBubbleHide);
    root.addEventListener("click", function (event) {
      if (!plUsesHover()) return;
      if (!event.target.closest(".e9-pl-card, .e9-pl-model-nav button, .e9-pl-bubble, .e9-pl-arrows")) hidePlBubble();
    });

    function scrollPlRail(direction) {
      if (!plRail || !plJumpButtons.length) return;
      var currentIndex = plJumpButtons.findIndex(function (button) {
        return button.classList.contains("is-active");
      });
      if (currentIndex < 0) currentIndex = direction > 0 ? -1 : plJumpButtons.length;
      var nextIndex = Math.max(0, Math.min(plJumpButtons.length - 1, currentIndex + direction));
      var targetButton = plJumpButtons[nextIndex];
      if (!targetButton || nextIndex === currentIndex) return;

      var family = targetButton.getAttribute("data-family");
      var modelId = targetButton.getAttribute("data-e9-pl-jump-model");
      var targetCard = plCards.filter(function (card) {
        return card.getAttribute("data-e9-pl-family") === family;
      })[0];

      setPlFamily(family, targetCard, modelId);
      showPlBubble(targetCard);

      revealPlCard(targetCard);
    }

    if (plPrev) plPrev.addEventListener("click", function () { scrollPlRail(-1); });
    if (plNext) plNext.addEventListener("click", function () { scrollPlRail(1); });
    if (plRail) plRail.addEventListener("scroll", function () {
      updatePlArrows();
      updatePlPointer();
    }, { passive: true });
    window.addEventListener("resize", function () {
      updatePlArrows();
      updatePlPointer();
      if (!plUsesHover()) showPlBubble(activePlCard);
      else if (!root.querySelector(".e9-pl-card:hover, .e9-pl-model-nav button:hover") && !(plBubble && plBubble.matches(":hover"))) hidePlBubble();
    }, { passive: true });

    var plMotionItems = root.querySelectorAll(".e9-motion");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      plMotionItems.forEach(function (item) { item.classList.add("is-inview"); });
    } else {
      var plObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          plObserver.unobserve(entry.target);
        });
      }, { threshold: .12, rootMargin: "0px 0px -7% 0px" });
      plMotionItems.forEach(function (item) { plObserver.observe(item); });
    }

    if (!reducedMotion) {
      var plTicking = false;
      window.addEventListener("scroll", function () {
        if (plTicking) return;
        plTicking = true;
        window.requestAnimationFrame(function () {
          var hero = root.querySelector(".e9-hero");
          if (hero) hero.style.setProperty("--e9-hero-shift", Math.min(window.scrollY * .065, 48) + "px");
          plTicking = false;
        });
      }, { passive: true });
    }

    setPlFamily(plFamily);
    if (plUsesHover()) hidePlBubble();
    else showPlBubble(activePlCard);
    return;
  }

  var family = root.getAttribute("data-e9-default-family") || "slide";
  var modelRail = root.querySelector(".e9-model-rail");
  var modelCards = Array.prototype.slice.call(root.querySelectorAll(".e9-model-card[data-model]"));
  var familyMethods = Array.prototype.slice.call(root.querySelectorAll("[data-e9-family-method]"));
  var familyControls = Array.prototype.slice.call(root.querySelectorAll("[data-e9-family-control]"));
  var spaces = Array.prototype.slice.call(root.querySelectorAll(".e9-space[data-family]"));
  var previous = root.querySelector("[data-e9-model-prev]");
  var next = root.querySelector("[data-e9-model-next]");

  function visibleCards() {
    return modelCards.filter(function (card) { return !card.hidden; });
  }

  function updateArrows() {
    if (!modelRail || !previous || !next) return;
    var canScroll = modelRail.scrollWidth > modelRail.clientWidth + 4;
    previous.disabled = !canScroll || modelRail.scrollLeft <= 4;
    next.disabled = !canScroll || modelRail.scrollLeft + modelRail.clientWidth >= modelRail.scrollWidth - 4;
  }

  function setDetail(modelId) {
    var data = models[modelId];
    if (!data) return;
    modelCards.forEach(function (card) {
      var active = card.getAttribute("data-model") === modelId;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var image = root.querySelector("[data-e9-detail-image]");
    var badge = root.querySelector("[data-e9-detail-badge]");
    if (image) {
      image.src = data.image;
      image.alt = data.name + " 제품 이미지";
    }
    [
      ["[data-e9-detail-type]", data.type],
      ["[data-e9-detail-name]", data.name],
      ["[data-e9-detail-summary]", data.summary],
      ["[data-e9-detail-grade]", data.grade],
      ["[data-e9-detail-uvalue]", data.uvalue],
      ["[data-e9-detail-glass]", data.glass],
      ["[data-e9-detail-feature]", data.feature],
      ["[data-e9-detail-use]", data.use]
    ].forEach(function (entry) {
      var node = root.querySelector(entry[0]);
      if (node) node.textContent = entry[1];
    });
    if (badge) {
      badge.textContent = data.badge || "";
      badge.hidden = !data.badge;
    }

    var featureCards = Array.prototype.slice.call(root.querySelectorAll("[data-e9-feature-card]"));
    if (featureCards.length) {
      var featureName = root.querySelector("[data-e9-feature-name]");
      var featureGrid = root.querySelector("[data-e9-feature-grid]");
      var features = plFeatures[modelId] || [];
      if (featureName) featureName.textContent = data.name;
      featureCards.forEach(function (card, index) {
        var item = features[index];
        card.hidden = !item;
        if (!item) return;
        var featureImage = card.querySelector("[data-e9-feature-image]");
        var featureTitle = card.querySelector("[data-e9-feature-title]");
        var featureCopy = card.querySelector("[data-e9-feature-copy]");
        if (featureImage) {
          featureImage.src = item.image;
          featureImage.alt = data.name + " " + item.title;
        }
        if (featureTitle) featureTitle.textContent = item.title;
        if (featureCopy) featureCopy.textContent = item.copy;
      });
      if (featureGrid) featureGrid.scrollLeft = 0;
    }
  }

  function setFamily(nextFamily, options) {
    options = options || {};
    family = nextFamily;
    familyMethods.forEach(function (button) {
      var active = button.getAttribute("data-e9-family-method") === family;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    familyControls.forEach(function (button) {
      var active = button.getAttribute("data-e9-family-control") === family;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    modelCards.forEach(function (card) {
      card.hidden = card.getAttribute("data-family") !== family;
    });
    spaces.forEach(function (space) {
      space.classList.toggle("is-active", space.getAttribute("data-family") === family);
    });

    var requested = options.model && models[options.model] && models[options.model].family === family
      ? options.model
      : null;
    var first = visibleCards()[0];
    setDetail(requested || (first && first.getAttribute("data-model")));
    if (modelRail) modelRail.scrollLeft = 0;
    window.requestAnimationFrame(updateArrows);

    if (options.scroll) {
      var target = root.querySelector("#model-performance");
      if (target) target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  }

  familyMethods.forEach(function (button) {
    button.addEventListener("click", function () {
      setFamily(button.getAttribute("data-e9-family-method"), { scroll: true });
    });
  });
  familyControls.forEach(function (button) {
    button.addEventListener("click", function () {
      setFamily(button.getAttribute("data-e9-family-control"));
    });
  });
  modelCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var modelId = card.getAttribute("data-model");
      var data = models[modelId];
      if (!data) return;
      if (data.family !== family) setFamily(data.family, { model: modelId });
      else setDetail(modelId);
      var detail = root.querySelector(".e9-detail");
      if (detail && window.innerWidth <= 768) {
        detail.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      }
    });
  });

  function scrollModels(direction) {
    if (!modelRail) return;
    var first = visibleCards()[0];
    var amount = first ? first.getBoundingClientRect().width + 14 : modelRail.clientWidth * .8;
    modelRail.scrollBy({ left: amount * direction, behavior: reducedMotion ? "auto" : "smooth" });
  }

  if (previous) previous.addEventListener("click", function () { scrollModels(-1); });
  if (next) next.addEventListener("click", function () { scrollModels(1); });
  if (modelRail) modelRail.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows, { passive: true });

  var motionItems = root.querySelectorAll(".e9-motion");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    motionItems.forEach(function (item) { item.classList.add("is-inview"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-inview");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -7% 0px" });
    motionItems.forEach(function (item) { observer.observe(item); });
  }

  if (!reducedMotion) {
    var ticking = false;
    function updateHero() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var hero = root.querySelector(".e9-hero");
        if (hero) hero.style.setProperty("--e9-hero-shift", Math.min(window.scrollY * .065, 48) + "px");
        ticking = false;
      });
    }
    window.addEventListener("scroll", updateHero, { passive: true });
    updateHero();
  }

  setFamily(family);
}());
