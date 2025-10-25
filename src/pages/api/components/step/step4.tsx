
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { USE_EXAMPLE } from "../../constants";
import Bullet from "../bullet";
import { ExplaneCommandTable } from "../explainCommandTable";
import { ExplaneOptionTable } from "../explainOptionTable";
import { GradientTitle } from "../gradientTitle";

export default function Step4() {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <GradientTitle>4. CLI (Command-Line Interface)</GradientTitle>
      <h3 className="text-gray-100 text-[18px]">Colbrush는 개발자가 정의한 CSS 변수를 기반으로, Protanopia(적색맹), Deuteranopia(녹색맹), Tritanopia(청색맹)에 최적화된 접근성 컬러 테마를 
          자동으로 생성하고 기존 CSS 파일에 추가하는 커맨드라인 도구입니다.
      </h3>
      <div className="space-y-2 sm:space-y-3">
        <ul className="list-disc list-inside">
          <Bullet className="pt-2">주요 명령어 및 사용법</Bullet>
          <div className="overflow-x-hidden sm:overflow-x-scroll">
            <ExplaneCommandTable></ExplaneCommandTable>
          </div>
          <Bullet className="pt-2">옵션</Bullet>
          <div className="overflow-x-hidden sm:overflow-x-scroll">
            <ExplaneOptionTable></ExplaneOptionTable>
          </div>
          <Bullet className="pt-2">사용 예시</Bullet>
          <CodeBlock code={USE_EXAMPLE}/>
        </ul>
      </div>
    </section>
  );
}
