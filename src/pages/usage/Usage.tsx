import DonutChart from "./component/graph/DonutChart";
import LineChart from "./component/graph/LineChart";
import MapChart from "./component/graph/MapChart";
import ProductChart from "./component/graph/ProductChart";
import TodoList from "./component/todo/TodoList";
import { COLORS, simulatorData, TODOS } from "./mocks/usage";
import CustomTooltip from "./component/tooltip/Tooltip";
import Alert from "./component/alert/Alert";
import TestInput from "./component/testInput/TestInput";
import Simulator from "./component/simulator/Simulator";

export default function Usage() {
  return (
    <div className="font-pretendard text-center font-semibold max-lg:mb-[160px] lg:mb-[200px]">
      <h1 className="mt-[100px] mb-[80px] bg-[linear-gradient(180deg,_#FFF_-17.11%,_#999_119.08%)] bg-clip-text text-[32px] leading-tight font-bold text-transparent max-lg:text-[24px]">
        다양한 색맹 유형에 맞춘
        <br />
        최적의 테마를 경험해 보세요
      </h1>
      <div
        className={`flex h-[300px] w-full flex-row blur-[26px] [clip-path:inset(0_0_0_0)] max-md:h-[200px]`}
      >
        {COLORS.map((color) => (
          <div
            key={color}
            className={`grow`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* 색맹 테스트 */}
      <div
        className={`mt-[80px] flex flex-col gap-[48px] px-[12.5%] max-lg:px-[32px]`}
      >
        <p className={`text-primary text-[38px] max-lg:text-[26px]`}>
          Color Blind Simulator
        </p>
        <div
          className={`flex flex-row gap-8 max-lg:gap-4 max-sm:flex-col max-sm:gap-12`}
        >
          {simulatorData.map((simulator) => (
            <Simulator
              key={simulator.title}
              type={simulator.type}
              title={simulator.title}
              text={simulator.text}
              color={simulator.color}
            />
          ))}
        </div>
      </div>

      <p
        className={`text-primary mt-[180px] text-[38px] max-lg:mt-[100px] max-lg:text-[26px]`}
      >
        UI Color Information
      </p>
      <div
        className={`flex flex-col px-[12.5%] text-white max-lg:gap-[60px] max-lg:px-[32px] lg:gap-[90px]`}
      >
        {/* 그래프 */}
        <div className={`flex flex-col gap-5 max-lg:mt-[60px] lg:mt-[90px]`}>
          <p className={`w-full text-start text-[28px] max-lg:text-[22px]`}>
            데이터 시각화
          </p>
          <div className={`flex flex-col gap-10`}>
            <div className={`flex flex-row gap-10 max-md:flex-col`}>
              <div className={`w-[30%] max-md:w-full`}>
                <DonutChart />
              </div>
              <div className={`grow`}>
                <LineChart />
              </div>
            </div>
            <div className={`flex flex-row gap-10 max-md:flex-col`}>
              <div className={`grow`}>
                <MapChart />
              </div>
              <div className={`grow`}>
                <ProductChart />
              </div>
            </div>
          </div>
        </div>

        {/* 상태 표시 / 컴포넌트 */}
        <div>
          <div className={`flex flex-col gap-6`}>
            <p className={`w-full text-start text-[28px] max-lg:text-[22px]`}>
              상태 표시 및 UI 컴포넌트
            </p>
            <div
              className={`shadow-custom flex w-full flex-row gap-5 rounded-[28px] border border-gray-200 px-6 py-10 max-md:flex-col`}
            >
              <TodoList state={"시작 전"} todos={TODOS["시작 전"]} />
              <TodoList state={"진행 중"} todos={TODOS["진행 중"]} />
              <TodoList state={"완료"} todos={TODOS["완료"]} />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className={`flex flex-col gap-10 px-[8%] max-sm:gap-4`}>
          <div className={`flex flex-row gap-10 max-sm:flex-col max-sm:gap-4`}>
            <CustomTooltip state={"WARNING"} />
            <CustomTooltip state={"INFO"} />
          </div>
          <div className={`flex flex-row gap-10 max-sm:flex-col max-sm:gap-4`}>
            <CustomTooltip state={"ERROR"} />
            <CustomTooltip state={"SUCCESS"} />
          </div>
        </div>

        {/* Alert */}
        <div className={`flex flex-col gap-8 max-sm:gap-6`}>
          <div
            className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}
          >
            <Alert state={"WARNING"} />
            <Alert state={"INFO"} />
          </div>
          <div
            className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}
          >
            <Alert state={"ERROR"} />
            <Alert state={"SUCCESS"} />
          </div>
          <div
            className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}
          >
            <TestInput initialText="colbru" />
            <TestInput />
          </div>
        </div>
      </div>
    </div>
  );
}
