import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { USETHEME } from "../../constants";
import SubTitle from "../subTitle";
import Bullet from "../bullet";
import { GradientTitle } from "../gradientTitle";

export default function Step3() {
  return (
    <section className="flex flex-col gap-[16px]">
      <GradientTitle>3. 훅 (Hooks)</GradientTitle>
      <div className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-lg font-medium sm:text-xl lg:text-[24px]">{`useTheme()`}</Code>
        </SubTitle>
        <ul className="list-inside list-disc leading-7 sm:leading-8">
          <Bullet>
            <span className="font-semibold">설명:</span> 현재 테마 상태와 테마
            변경, 언어 상태와 언어를 변경하는 함수를 반환하는 커스텀 훅입니다.
          </Bullet>
          <Bullet className="py-1">
            <span className="font-semibold">반환값: </span>
            <Code>{`{theme, updateTheme, language, updateLanguage}`}</Code>
          </Bullet>
          <ul className="list-inside list-disc pl-6 leading-7 sm:leading-8">
            <Bullet className="py-1">
              <Code>theme</Code> : 현재 적용된 테마의 이름(문자열)
            </Bullet>
            <Bullet className="py-1">
              <Code>updateTheme</Code> :{" "}
              <Code>{`(theme: ThemeType) => void`}</Code> 새로운 테마를 설정하는
              함수.
            </Bullet>
            <Bullet className="py-1">
              <Code>language</Code> : 현재 적용된 언어 값(English / Korean)
            </Bullet>
            <Bullet className="py-1">
              <Code>updateLanguage</Code> :{" "}
              <Code>{`(language: TLanguage) => void`}</Code> 새로운 언어를
              설정하는 함수.
            </Bullet>
          </ul>
          <Bullet>사용 예시: </Bullet>
          <CodeBlock code={USETHEME}></CodeBlock>
        </ul>
      </div>
    </section>
  );
}
