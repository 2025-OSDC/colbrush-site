import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import Description from "../../../../components/description";
import {
  INPUT_CSS_EXAMPLE,
  OUTPUT_CSS_EXAMPLE,
  USE_EXAMPLE,
} from "../../constants";
import Bullet from "../bullet";
import { ExplaneCommandTable } from "../explainCommandTable";
import { ExplaneOptionTable } from "../explainOptionTable";
import { GradientTitle } from "../gradientTitle";
import SubTitle from "../subTitle";

export default function Step4() {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <GradientTitle>4. CLI (Command-Line Interface)</GradientTitle>
      <Description>
        Colbrush는 개발자가 정의한 CSS 변수를 기반으로, Protanopia(적색맹),
        Deuteranopia(녹색맹), Tritanopia(청색맹)에 최적화된 접근성 컬러 테마를
        자동으로 생성하고 기존 CSS 파일에 추가하는 커맨드라인 도구입니다.
      </Description>
      <div className="flex flex-col gap-10 space-y-2 sm:space-y-3">
        <ul className="list-inside list-disc">
          <Bullet className="pt-2">주요 명령어 및 사용법</Bullet>
          <div className="overflow-x-scroll md:overflow-x-scroll">
            <ExplaneCommandTable></ExplaneCommandTable>
          </div>
          <br />
          <Bullet className="pt-2">옵션</Bullet>
          <div className="flex w-full overflow-x-scroll md:overflow-x-hidden">
            <ExplaneOptionTable></ExplaneOptionTable>
          </div>
          <br />
          <Bullet className="pt-2">사용 예시</Bullet>
          <CodeBlock code={USE_EXAMPLE} />
        </ul>
        <ul className="list-inside list-disc">
          <SubTitle>CSS 변수 정의 및 결과</SubTitle>
          <Description className="py-2">
            Colbrush는 CSS 파일 내의 <Code>{`@theme{...}`}</Code> 블록에 정의된{" "}
            <Code>--color-</Code> 형식의 변수를 핵심 색상으로 인식하여
            처리합니다.
          </Description>
          <Bullet>입력(CSS):</Bullet>
          <CodeBlock code={INPUT_CSS_EXAMPLE}></CodeBlock>
          <br />
          <Bullet>
            <span className="font-semibold">출력 (CSS에 자동 추가):</span>{" "}
            생성된 테마는 지정된 CSS 파일 끝에 데이터 속성 선택자 형태로
            추가되어 쉽게 적용 가능합니다.
          </Bullet>
          <CodeBlock code={OUTPUT_CSS_EXAMPLE}></CodeBlock>
        </ul>
        <ul className="list-inside list-disc">
          <SubTitle>React 연동 (Frontend)</SubTitle>
          <Description className="py-2">
            테마 생성 후, <Code>{`colbrush/client`}</Code> 라이브러리를 사용해
            React 앱에서 쉽게 적용하고 전환할 수 있습니다.
          </Description>
          <Bullet className="pb-2">
            <Code>{`ThemeProvider`}</Code> 로 앱 감싸기
          </Bullet>
          <Bullet>
            <Code>{`ThemeSwitcher`}</Code> 컴포넌트로 테마 변경 스위치 추가
          </Bullet>
        </ul>
        <ul className="list-inside list-disc">
          <SubTitle>에러 진단 및 도움말</SubTitle>
          <Description>
            Colbrush는 문제 발생 시 상세한 에러 메시지와 해결 제안을 제공하여
            디버깅을 돕습니다.
          </Description>
          <Bullet>
            파일/변수 없음, CSS 파싱 오류, 권한 오류 등에 대해 명확한 안내를
            제공합니다.
          </Bullet>
          <Bullet>
            <Code>colbrush --doctor</Code> 명령어로 시스템 상태를 점검하여
            복잡한 오류를 해결할 수 있습니다.
          </Bullet>
        </ul>
      </div>
    </section>
  );
}
