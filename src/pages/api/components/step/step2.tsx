import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { THEMEPROVIDER } from "../../constants";
import Description from "../../../../components/description";
import SubTitle from "../subTitle";
import Bullet from "../bullet";
import { GradientTitle } from "../gradientTitle";
export default function Step2() {
  return (
    <section className="flex flex-col gap-[16px]">
      <div>
        <GradientTitle>2. 컴포넌트 (Components)</GradientTitle>
        <Description>
          이 섹션은 Colbrush가 제공하는 React 컴포넌트에 대한 상세 문서를 담고
          있습니다.
        </Description>
      </div>
      <div className="flex flex-col gap-7 sm:gap-10">
        <div className="space-y-1 sm:space-y-3">
          <SubTitle>
            <Code className="text-lg font-medium sm:text-xl lg:text-[24px]">{`<ThemeProvider>`}</Code>
          </SubTitle>
          <ul className="list-inside list-disc leading-4 sm:leading-8">
            <Bullet>
              <span className="font-semibold">설명: </span> 애플리케이션에 테마
              기능을 전역적으로 제공하는 Context Provider입니다.
            </Bullet>
            <Bullet>Props:</Bullet>
            <ul className="list-inside list-disc pl-6">
              <Bullet className="py-2">
                <Code>options</Code> (선택 사항): 드롭다운에 표시될 테마 목록을
                커스터마이징합니다.
              </Bullet>
              <Bullet>
                <Code>position</Code> (선택 사항): ThemeSwitcher를 띄울 위치를
                선정합니다.
                <br />
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;('left-bottom',
                ‘right-bottom’, 'left-top’, 'right-top' 중 선택 가능. default:
                right-bottom)
              </Bullet>
            </ul>
            <Bullet>
              <span className="font-semibold">사용 예시:</span>
            </Bullet>
            <CodeBlock code={THEMEPROVIDER}></CodeBlock>
          </ul>
        </div>
        <div className="space-y-1 sm:space-y-3">
          <SubTitle>
            <Code className="text-lg font-medium sm:text-xl lg:text-[24px]">{`<ThemeSwitcher>`}</Code>
          </SubTitle>
          <ul className="list-inside list-disc leading-4 sm:leading-8">
            <Bullet>
              <span className="font-semibold">설명:</span> 사용자가 테마를 쉽게
              변경할 수 있는 드롭다운 UI 컴포넌트입니다.
            </Bullet>
            <Bullet className="py-1">
              <span className="font-semibold">Props:&thinsp;&thinsp;</span>
              <Code>options</Code>&thinsp;(선택 사항): 드롭다운에 표시될 테마
              목록을 커스터마이징합니다.
            </Bullet>
          </ul>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <SubTitle>
            <Code className="text-lg font-medium sm:text-xl lg:text-[24px]">{`<SimulationFilter>`}</Code>
          </SubTitle>
          <ul className="list-inside list-disc leading-4 sm:leading-8">
            <Bullet>
              <span className="font-semibold">설명:</span>시뮬레이션 결과를
              조건별로 필터링할 수 있는 UI 컴포넌트입니다.
            </Bullet>
            <Bullet className="py-1">
              <span className="font-semibold">Props:&thinsp;&thinsp;</span>
              <ul className="list-inside list-disc pl-6">
                <Bullet className="py-1">
                  <Code>defaultMode</Code> (선택 사항): SimulationFilter의 값을
                  설정합니다.
                  <br />
                  &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;(‘none’,
                  'protanopia’, 'deuteranopia’, ‘tritanopia’, default값: none)
                </Bullet>
                <Bullet className="py-1">
                  <Code>storageKey</Code> (선택 사항): localStorage key값
                  커스터마이징 (default: colbrush-filter)
                </Bullet>
                <Bullet className="py-1">
                  <Code>devHostPattern</Code> (선택 사항): 개발 호스트 정규식
                  커스터마이징 (default: localhost / 127 / 192.168.x)
                </Bullet>
                <Bullet className="py-1">
                  <Code>position</Code> (선택 사항): toolbar를 띄울 위치를
                  선정합니다.
                  <br />
                  &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;('left-bottom',
                  ‘right-bottom’, 'left-top’, 'right-top' 중 선택 가능. default:
                  left-bottom)
                </Bullet>
                <Bullet className="py-1">
                  <Code>allowInProd</Code> (선택 사항): 프로덕션에서도 강제로
                  허용(디버깅용) default값: false
                </Bullet>
              </ul>
            </Bullet>
          </ul>
        </div>
      </div>
    </section>
  );
}
