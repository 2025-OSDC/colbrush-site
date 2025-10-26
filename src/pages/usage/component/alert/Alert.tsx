import CloseIcon from "@assets/svgs/close.svg?react";

const Alert = ({ state }: { state: State }) => {
  const bgColor =
    state === "WARNING"
      ? `bg-yellow/15`
      : state === "ERROR"
        ? `bg-red/15`
        : state === "INFO"
          ? `bg-blue/15`
          : "bg-green/15";

  const textColor =
    state === "WARNING"
      ? `text-yellow`
      : state === "ERROR"
        ? `text-red`
        : state === "INFO"
          ? `text-blue`
          : "text-green";

  const borderColor =
    state === "WARNING"
      ? `border-yellow`
      : state === "ERROR"
        ? `border-red`
        : state === "INFO"
          ? `border-blue`
          : "border-green";

  const text =
    state === "WARNING"
      ? `주의가 필요합니다.`
      : state === "ERROR"
        ? `오류가 발생했습니다.`
        : state === "INFO"
          ? `정보를 제공합니다.`
          : "성공했습니다.";

  return (
    <div
      className={`flex w-full flex-row items-center justify-between rounded-[8px] border px-6 py-3.5 text-start font-light transition-all duration-300 ease-out max-lg:px-4 max-lg:py-3 max-lg:text-[16px] lg:text-[18px] ${borderColor} ${textColor} ${bgColor}`}
    >
      {text}
      <CloseIcon className={`h-7 w-7 cursor-pointer max-lg:h-5 max-lg:w-5`} />
    </div>
  );
};

export default Alert;
