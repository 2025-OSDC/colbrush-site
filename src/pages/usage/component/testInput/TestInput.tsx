import { useState } from "react";

import WarningIcon from "@assets/svgs/warning.svg?react";
import SuccessIcon from "@assets/svgs/success.svg?react";

const TestInput = ({ initialText = "colbrush" }: { initialText?: string }) => {
  const [text, setText] = useState(initialText);

  return (
    <div
      className={`flex w-full flex-row items-center gap-6 font-medium max-lg:gap-4 max-lg:text-[16px] lg:text-[18px]`}
    >
      <input
        className={`${text === "colbrush" ? `border-green` : `border-deep-red`} w-full rounded-[8px] border px-5 py-3.5 outline-0 max-lg:px-4 max-lg:py-3`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="colbrush"
      />
      <div>
        {text === "colbrush" ? (
          <div
            className={`text-green flex flex-row items-center gap-3 max-lg:gap-2`}
          >
            <SuccessIcon className={`h-8 w-8 max-lg:h-6 max-lg:w-6`} />
            <p className={`w-fit truncate`}>성공</p>
          </div>
        ) : (
          <div
            className={`text-deep-red flex flex-row items-center gap-3 max-lg:gap-2`}
          >
            <WarningIcon className={`h-8 w-8 max-lg:h-6 max-lg:w-6`} />
            <p className={`w-fit truncate`}>오류</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestInput;
