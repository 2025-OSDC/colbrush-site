import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import {
  CSR_THEMESCRIPT_SETTING,
  GENERATE_THEME_COMMAND,
  INSTALL_COMMAND,
  STYLESCSS_IMPORT,
  THEMESCRIPT_SETTING,
  THEMEFILE_COMMEND,
  THEMEPROVIDER_SETTING,
} from "../../constants";
import SubTitle from "../subTitle";
import Description from "../../../../components/description";
import Code from "../../../../components/code";
import { GradientTitle } from "../gradientTitle";

export default function Step1() {
  const sectionStyle = "flex flex-col gap-[12px]";
  return (
    <section className="flex flex-col gap-7 sm:gap-10">
      <div>
        <GradientTitle>1. 시작하기 (Get Started)</GradientTitle>
        <Description>
          이 섹션은 Colbrush의 설치부터 기본적인 사용법까지 안내합니다.
        </Description>
      </div>
      <div>
        <SubTitle>설치</SubTitle>
        <Description>
          Colbrush는 npm 또는 pnpm을 통해 설치할 수 있습니다.
        </Description>
        <CodeBlock code={INSTALL_COMMAND} language="ts"></CodeBlock>
      </div>
      <div className={sectionStyle}>
        <div>
          <SubTitle>테마 파일 생성</SubTitle>
          <Description>
            <Code>@theme</Code> 블록에 기본 색상 변수를 작성한 후, CLI 명령어를
            실행하여 색각 이상 유형별 테마를 자동으로 생성합니다.
          </Description>
        </div>
        <CodeBlock code={THEMEFILE_COMMEND} language="ts"></CodeBlock>
        <CodeBlock code={GENERATE_THEME_COMMAND} language="ts"></CodeBlock>
      </div>
      <div className={sectionStyle}>
        <div>
          <SubTitle>ThemeProvider 설정</SubTitle>
          <Description className="leading-7 sm:leading-8">
            앱의 루트 컴포넌트를 <Code>ThemeProvider</Code> 로 감싸서 전역 테마
            관리를 시작합니다.
          </Description>
        </div>
        <CodeBlock code={THEMEPROVIDER_SETTING} language="ts"></CodeBlock>
      </div>
      <div className={sectionStyle}>
        <div>
          <SubTitle>CSR에서 테마 깜빡임 강제 방지</SubTitle>
          <Description className="leading-7 sm:leading-8">
            Vite 같은 CSR 앱에서는 보통 <Code>ThemeProvider</Code> 만으로 충분합니다.
            그래도 JavaScript 번들 로드 전 깜빡임을 막고 싶다면{" "}
            <Code>index.html</Code> 의 <Code>{`<head>`}</Code> 에 초기 테마
            스크립트를 직접 추가합니다.
          </Description>
        </div>
        <CodeBlock code={CSR_THEMESCRIPT_SETTING} language="html"></CodeBlock>
      </div>
      <div className={sectionStyle}>
        <div>
          <SubTitle>ThemeScript 설정 (SSR 선택)</SubTitle>
          <Description className="leading-7 sm:leading-8">
            SSR 환경이거나 첫 화면 테마 깜빡임을 엄격하게 막아야 한다면{" "}
            <Code>ThemeScript</Code> 를 <Code>{`<head>`}</Code> 안에
            렌더링합니다.
          </Description>
        </div>
        <CodeBlock code={THEMESCRIPT_SETTING} language="ts"></CodeBlock>
      </div>
      <div>
        <SubTitle>colbrush/styles.css import 하기 (필수)</SubTitle>
        <Description className="leading-7 sm:leading-8">
          필터 및 테마 스위치 버튼 스타일을 정의합니다.
        </Description>
        <CodeBlock code={STYLESCSS_IMPORT} language="ts"></CodeBlock>
      </div>
    </section>
  );
}
