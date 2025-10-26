export const INSTALL_CONSTANTS = {
  // 공통
  LIBRARY_NAME: "colbrush",
  GET_STARTED: "시작하기",

  // Banner
  BANNER: {
    DESCRIPTION: "코드 한 줄로 적용하는\n색각 이상자를 위한 UI 테마 스위칭",
  },

  // Suggestion
  SUGGESTION: {
    DESCRIPTION:
      "Colbrush는 단 한 줄의 코드로 색각 보정 테마를 자동 생성합니다.\n웹 접근성 작업을 획기적으로 단축하세요.",
    COMMAND: "npx colbrush --generate --css=./src/styles/brand-palette.css",
  },

  // Explanation
  EXPLANATION: {
    COLOR_BLIND_SUPPORT: {
      TITLE: "주요 색맹 유형 지원",
      DESCRIPTION:
        " 주요 색각 이상 유형을 모두 지원하여, 다양한 시각 조건에서도 명확하게 구분되는 UI를 제공합니다.",
    },
    AUTO_GENERATION: {
      TITLE: "PostCSS 기반 CSS 변수 자동 생성",
      DESCRIPTION:
        " 구문으로 색상 팔레트를 정의하면, 색맹 유형별 변환 색상을 자동으로 CSS 변수에 반영하여 개발자가 반복 작업 없이 접근성 테마를 완성할 수 있습니다.",
    },
    THEME_PROVIDER: {
      TITLE: "React Context 기반 ThemeProvider",
      DESCRIPTION_PREFIX: "앱 전역에서 테마 상태를 쉽게 공유할 수 있도록 ",
      DESCRIPTION_SUFFIX:
        " 를 제공하며 모든 컴포넌트가 일관된 접근성 색상 규칙을 적용받습니다.",
    },
    THEME_SWITCHER: {
      TITLE: "접근성 고려 ThemeSwitcher 컴포넌트",
      DESCRIPTION:
        "헤더, 설정 메뉴 등 원하는 위치에 배치 가능한 스위처 컴포넌트를 제공하여, 사용자가 단 한 번의 클릭으로 최적화된 색각 보정 테마를 선택할 수 있습니다.",
    },
    CUSTOMIZATION: {
      TITLE: "커스터마이징 가능한 색상 스케일 / 변환 알고리즘",
      DESCRIPTION:
        "기본 제공 스케일과 변환 로직을 프로젝트 특성에 맞게 변경할 수 있어 브랜드 아이덴티티를 유지하면서도 색각 이상자를 배려한 UI를 구현할 수 있습니다.",
    },
  },

  // Installation Steps
  INSTALLATION: {
    MAIN_TITLE: "간단 설치 단계",
    STEP1: {
      CHIP: "Step 1",
      TITLE: "라이브러리 설치",
      INSTALL_COMMANDS: {
        PNPM: "pnpm add colbrush",
        NPM: "npm install colbrush",
        COMMENT: "# 또는",
      },
      DESCRIPTION:
        "단 한 줄 명령어만 실행하면 설치가 완료됩니다. \n별도의 환경 설정 없이 바로 프로젝트에 추가할 수 있습니다.",
    },
    STEP2: {
      CHIP: "Step 2",
      TITLE: "CSS 변수 정의",
      CSS_VARIABLES: {
        PRIMARY: "--color-primary-500",
        PRIMARY_VALUE: "#7fe4c1",
        SECONDARY: "--color-secondary-yellow",
        SECONDARY_VALUE: "#fdfa91",
        GRAY: "--color-default-gray-500",
        GRAY_VALUE: "#c3c3c3",
      },
      DESCRIPTION_PREFIX: "전역 CSS 파일( ",
      DESCRIPTION_SUFFIX: " )에 다음 코드를 추가합니다.",
      EXPLANATION:
        " 구문을 사용하면 PostCSS 플러그인이 자동으로 색맹 유형별 변환 색상 변수를 생성할 준비를 합니다.",
    },
    STEP3: {
      CHIP: "Step 3",
      TITLE: "CLI로 테마 생성",
      COMMAND: "npx colbrush --generate",
      DESCRIPTION: "CLI 명령어를 실행하면 ",
      COLOR_BLIND_TYPES: ["protanopia", "deuteranopia", "tritanopia"],
      DESCRIPTION_SUFFIX: " 각각에 맞춘 CSS 변수를 자동 생성합니다.",
      PATH_DESCRIPTION_PREFIX: "경로를 지정하면 (",
      PATH_EXAMPLE: "--css=src/index.css",
      PATH_DESCRIPTION_SUFFIX: ") 원하는 CSS 파일에 바로 생성할 수도 있습니다.",
    },
  },

  // Call to Action
  CTA: {
    SUBTITLE: "React와 PostCSS 기반의\n접근성 중심 테마 스위칭 라이브러리",
    MAIN_TITLE: "지금 바로 프로젝트에 적용해보세요",
  },

  // Common codes and keywords
  CODES: {
    THEME: "@theme",
    INDEX_CSS: "index.css",
    THEME_PROVIDER: "ThemeProvider",
    PROTANOPIA: "protanopia",
    DEUTERANOPIA: "deuteranopia",
    TRITANOPIA: "tritanopia",
    ACHROMATOPSIA: "achromatopsia",
  },
} as const;
