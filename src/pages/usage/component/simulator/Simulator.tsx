import { DeuteranopiaTest } from "./DeuteranopiaTest"
import { ProtanopiaTest } from "./ProtanopiaTest"
import { TritanopiaTest } from "./TritanopiaTest"

type SimulatorProps = {
  type: string
  title: string
  text: string[]
  color: string
}

const Simulator: React.FC<SimulatorProps> = ({
  type,
  title,
  text,
  color,
}) => {

  const contents = [
    '구별 어려운 색상 범위',
    '인식 경향',
    '주요 혼동 색상 예시',
  ]

  return (
    <div className={`w-[33%] flex flex-col gap-6 max-lg:gap-4 max-sm:w-full`}>
      <div className={`rounded-[8px] border border-gray-200 overflow-hidden text-white grow`}>
        <div className={`flex justify-center items-center ${color} w-full py-4 text-[20px] max-xl:text-[18px] max-lg:text-[16px]`}>
          {title}
        </div>
        <div className={`px-9.5 py-8 flex flex-col gap-9 max-lg:px-5 max-lg:py-4.5 max-lg:gap-5`}>

          {contents.map((content, index) => (
            <div key={content} className={`flex flex-col gap-2`}>
              <p className={`text-[22px] max-xl:text-[18px] max-lg:text-[14px] text-start`}>{content}</p>
              <p className={`text-[18px] max-xl:text-[14px] max-lg:text-[12px] text-[#909090] text-start`}>{text[index]}</p>
            </div>
          ))}

        </div>
      </div>

      <div className={`rounded-[8px] bg-gray-300 aspect-square w-full p-4`}>
        {type === "protanopia" ? (
          <ProtanopiaTest />
        ) : type === "deuteranopia" ? (
          <DeuteranopiaTest />
        ) : (
          <TritanopiaTest />
        )}
      </div>
    </div>
  )
}

export default Simulator;
