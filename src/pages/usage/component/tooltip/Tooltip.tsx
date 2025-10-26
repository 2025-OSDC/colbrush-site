import WarningIcon from "@assets/svgs/warning.svg?react";
import ErrorIcon from "@assets/svgs/error.svg?react";
import InfoIcon from "@assets/svgs/info.svg?react";
import SuccessIcon from "@assets/svgs/success.svg?react";
import { useState } from "react";

const CustomTooltip = ({ state }: { state: State }) => {
  const [isHover, setIsHover] = useState(false);

  const text =
    state === "WARNING"
      ? "주의가 필요합니다."
      : state === "ERROR"
        ? "오류가 발생했습니다."
        : state === "INFO"
          ? "정보를 제공합니다."
          : "성공했습니다.";

  const bgColor =
    state === "WARNING"
      ? "bg-yellow"
      : state === "ERROR"
        ? "bg-deep-red"
        : state === "INFO"
          ? "bg-deep-blue"
          : `bg-green`;

  return (
    <div className={`flex w-full flex-col items-center`}>
      <div
        className={` ${isHover ? `scale-110` : ``} ${bgColor} relative w-full rounded-[6px] px-6.5 py-6 shadow-[0_10px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out max-lg:px-4.5 max-lg:py-4`}
        onMouseOverCapture={() => setIsHover(true)}
        onMouseOutCapture={() => setIsHover(false)}
      >
        <p
          className={`text-start text-[20px] font-medium text-white max-lg:text-[16px]`}
        >
          {text}
        </p>
        <div
          className={`${bgColor} absolute -bottom-[10%] left-[50%] h-4 w-4 -translate-x-1/2 rotate-45`}
        />
      </div>

      <div
        className={`pt-5 max-lg:pt-4`}
        onMouseOverCapture={() => setIsHover(true)}
        onMouseOutCapture={() => setIsHover(false)}
      >
        {state === "WARNING" ? (
          <WarningIcon
            className={`text-yellow h-10 w-10 max-lg:h-8 max-lg:w-8`}
          />
        ) : state === "ERROR" ? (
          <ErrorIcon
            className={`text-deep-red h-10 w-10 max-lg:h-8 max-lg:w-8`}
          />
        ) : state === "INFO" ? (
          <InfoIcon
            className={`text-deep-blue h-10 w-10 max-lg:h-8 max-lg:w-8`}
          />
        ) : (
          <SuccessIcon
            className={`text-green h-10 w-10 max-lg:h-8 max-lg:w-8`}
          />
        )}
      </div>
    </div>
  );
};

export default CustomTooltip;
