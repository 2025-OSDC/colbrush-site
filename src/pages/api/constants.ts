export const INSTALL_COMMAND =
  "pnpm add colbrush\n# 또는\nnpm install colbrush";
export const THEMEFILE_COMMEND =
  "/* src/index.css */\n@theme {\n  --color-primary-500: #7fe4c1;\n}";
export const GENERATE_THEME_COMMAND =
  "npx colbrush generate --css=src/index.css";
export const THEMEPROVIDER_SETTING =
  "import { ThemeProvider } from 'colbrush/client';\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <YourApp />\n    </ThemeProvider>\n  );\n}";
export const CSR_THEMESCRIPT_SETTING =
  "<head>\n  <script>\n    try {\n      var t = localStorage.getItem('colbrush-theme');\n      if (['default', 'protanopia', 'deuteranopia', 'tritanopia'].indexOf(t) > -1) {\n        document.documentElement.setAttribute('data-theme', t);\n      }\n    } catch (e) {}\n  </script>\n</head>";
export const THEMESCRIPT_SETTING =
  "import { ThemeProvider, ThemeScript } from 'colbrush/client';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <head>\n        <ThemeScript />\n      </head>\n      <body>\n        <ThemeProvider>{children}</ThemeProvider>\n      </body>\n    </html>\n  );\n}";
export const STYLESCSS_IMPORT = "// index.css\n@import 'colbrush/styles.css';";
export const USE_EXAMPLE =
  "# 기본 파일(src/index.css)로 테마 생성\ncolbrush\n# 사용자 지정 파일로 테마 생성\ncolbrush generate --css=./styles/main.css";
export const INPUT_CSS_EXAMPLE =
  "/* @theme 블록을 사용합니다.*/\n@theme { \n  --color-primary-500: #7fe4c1; \n}";
export const OUTPUT_CSS_EXAMPLE =
  '[data-theme="protanopia"] { /* 적색맹 테마 */\n\t/* ... 최적화된 CSS 변수 ... */\n}\n[data-theme="deuteranopia"] { /* 녹색맹 테마 */\n\t/* ... 최적화된 CSS 변수 ... */\n}\n/* ... tritanopia 테마 ... */';
export const THEMEPROVIDER =
  "import { ThemeProvider } from 'colbrush/client'; \n//...\n<ThemeProvider> \n\t<MyApp /> \n</ThemeProvider>";
export const USETHEME =
  "import { useTheme } from 'colbrush/client'; \nfunction ThemeButtons() {\n\tconst { theme, updateTheme, language, updateLanguage } = useTheme();\n\n\treturn (\n\t\t<>\n\t\t\t<button onClick={() => updateTheme('protanopia')}> \n\t\t\t\t적색맹 모드 \n\t\t\t</button>\n\t\t\t<button onClick={() => updateLanguage('English')}> \n\t\t\t\t영어 모드 \n\t\t\t</button> \n\t\t</>\n\t); \n}";
export const SIMULATION_FILTER =
  "import { ThemeProvider } from 'colbrush/client';\nimport { SimulationFilter } from 'colbrush/devtools';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <SimulationFilter defaultMode=\"none\" position=\"left-bottom\" />\n      <YourApp />\n    </ThemeProvider>\n  );\n}";
export const LICENSE =
  'MIT License Copyright (c) 2025 Colbrush Permission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the "Software"), to deal in the Software without restriction,\nincluding without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\nof the Software, and to permit persons to whom the Software is furnished to do so, subject to the following\nconditions: The above copyright notice and this permission notice shall be included in all copies or substantial\nportions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING\nBUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT\nSHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.';
