export const INSTALL_COMMAND =
  "pnpm add colbrush\n# 또는\nnpm install colbrush";
export const THEMEFILE_COMMEND =
  "/* theme.css */\n[data-theme='protanopia'] {\n\t--color-primary-100: #F5F5F5;\n\t/* ... */\n}";
export const GENERATE_THEME_COMMAND =
  "npx colbrush --generate --css=src/index.css";
export const THEMEPROVIDER_SETTING =
  "import { ThemeProvider } from 'colbrush/client'; \nexport default function RootLayout({ children }) {  \n\treturn (   \n\t\t<ThemeProvider> \n\t\t\t{children} \n\t\t</ThemeProvider>  \n\t); \n}";
export const STYLESCSS_IMPORT = "// index.css\n@import 'colbrush/styles.css';"
export const USE_EXAMPLE="# 기본 파일(src/index.css)로 테마 생성\ncolbrush\n# 사용자 지정 파일로 테마 생성\ncolbrush generate --css=./styles/main.css"
export const THEMEPROVIDER =
  "import { ThemeProvider } from 'colbrush/client'; \n//...\n<ThemeProvider> \n\t<MyApp /> \n</ThemeProvider>";
export const USETHEME =
  "import { useTheme } from 'colbrush/client'; \nfunction ThemeButtons() {\n\tconst { theme, updateTheme, language, updateLanguage } = useTheme();\n\n\treturn (\n\t\t<>\n\t\t\t<button onClick={() => updateTheme('protanopia')}> \n\t\t\t\t적색맹 모드 \n\t\t\t</button>\n\t\t\t<button onClick={() => updateLanguage('English')}> \n\t\t\t\t영어 모드 \n\t\t\t</button> \n\t\t</>\n\t); \n}";
export const LICENSE =
  'MIT License Copyright (c) 2025 Colbrush Permission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the "Software"), to deal in the Software without restriction,\nincluding without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\nof the Software, and to permit persons to whom the Software is furnished to do so, subject to the following\nconditions: The above copyright notice and this permission notice shall be included in all copies or substantial\nportions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING\nBUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT\nSHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF\nCONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.';
