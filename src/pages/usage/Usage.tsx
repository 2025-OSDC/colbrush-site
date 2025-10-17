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
    <div className="text-center font-pretendard font-semibold lg:mb-[200px] max-lg:mb-[160px]">
      <h1 className="text-[32px] max-lg:text-[24px] font-bold mt-[100px] mb-[80px] bg-[linear-gradient(180deg,_#FFF_-17.11%,_#999_119.08%)] bg-clip-text text-transparent leading-tight">다양한 색맹 유형에 맞춘<br />최적의 테마를 경험해 보세요</h1>
      <div className={`w-full h-[300px] max-md:h-[200px] flex flex-row blur-[26px] [clip-path:inset(0_0_0_0)]`}>
        {COLORS.map((color) => (
          <div key={color} className={`grow`} style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* 색맹 테스트 */}
      <div className={`mt-[80px] flex flex-col gap-[48px] px-[12.5%] max-lg:px-[32px]`}>
        <p className={`text-[38px] max-lg:text-[26px] text-primary`}>Color Blind Simulator</p>
        <div className={`flex flex-row gap-8 max-lg:gap-4 max-sm:flex-col max-sm:gap-12`}>
          {simulatorData.map((simulator) => (
            <Simulator key={simulator.title} type={simulator.type} title={simulator.title} text={simulator.text} color={simulator.color} />
          ))}
        </div>
      </div>

      <p className={`text-[38px] mt-[180px] max-lg:mt-[100px] max-lg:text-[26px] text-primary`}>UI Color Information</p>
      <div className={`flex flex-col lg:gap-[90px] max-lg:gap-[60px] px-[12.5%] max-lg:px-[32px] text-white`}>
        {/* 그래프 */}
        <div className={`lg:mt-[90px] max-lg:mt-[60px] flex flex-col gap-5`}>
          <p className={`text-[28px] max-lg:text-[22px] w-full text-start`}>데이터 시각화</p>
          <div className={`flex flex-col gap-10`}>
            <div className={`flex flex-row max-md:flex-col gap-10`}>
              <div className={`w-[30%] max-md:w-full`}>
                <DonutChart />
              </div>
              <div className={`grow`}>
                <LineChart />
              </div>
            </div>
            <div className={`flex flex-row max-md:flex-col gap-10`}>
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
            <p className={`text-[28px] max-lg:text-[22px] w-full text-start`}>상태 표시 및 UI 컴포넌트</p>
            <div className={`rounded-[28px] shadow-custom w-full px-6 py-10 flex flex-row max-md:flex-col gap-5 border border-gray-200`}>
              <TodoList state={"시작 전"} todos={TODOS["시작 전"]} />
              <TodoList state={"진행 중"} todos={TODOS["진행 중"]} />
              <TodoList state={"완료"} todos={TODOS["완료"]} />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className={`flex flex-col gap-10 px-[8%] max-sm:gap-4`}>
          <div className={`flex flex-row gap-10 max-sm:gap-4 max-sm:flex-col`}>
            <CustomTooltip state={"WARNING"} />
            <CustomTooltip state={"INFO"} />
          </div>
          <div className={`flex flex-row gap-10 max-sm:gap-4 max-sm:flex-col`}>
            <CustomTooltip state={"ERROR"} />
            <CustomTooltip state={"SUCCESS"} />
          </div>
        </div>

        {/* Alert */}
        <div className={`flex flex-col gap-8 max-sm:gap-6`}>
          <div className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}>
            <Alert state={"WARNING"} />
            <Alert state={"INFO"} />
          </div>
          <div className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}>
            <Alert state={"ERROR"} />
            <Alert state={"SUCCESS"} />
          </div>
          <div className={`flex flex-row gap-10 max-md:gap-8 max-sm:flex-col max-sm:gap-6`}>
            <TestInput initialText="colbru"/>
            <TestInput/>
          </div>
        </div>
      </div>
    </div>
  );
}
