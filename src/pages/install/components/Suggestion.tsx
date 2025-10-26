import { Logo } from "../../../components/icons/Logo";
import { LogoText } from "../../../components/icons/LogoText";
import { INSTALL_CONSTANTS } from "../constants";
import CopyIcon from "@assets/svgs/copy.svg?react";

const Suggestion = () => {
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CONSTANTS.SUGGESTION.COMMAND);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="flex h-126 w-full flex-col items-center justify-center gap-3 text-center">
      <Logo
        width={58}
        height={58}
        // className="sm:h-[72px] sm:w-[72px] lg:h-[84px] lg:w-[84px]"
      />
      <LogoText
        width={160}
        height={48}
        // className="sm:h-[54px] sm:w-[180px] lg:h-[60px] lg:w-[200px]"
      />
      <p className="flex w-full flex-col gap-1 self-stretch text-center text-lg font-normal text-[#909090]">
        {INSTALL_CONSTANTS.SUGGESTION.DESCRIPTION.split("\n").map(
          (line, index) => (
            <span key={index}>{line}</span>
          ),
        )}
      </p>

      <div className="mt-13 inline-flex w-[766.40px] flex-col items-start justify-start">
        <div className="inline-flex items-center justify-between self-stretch overflow-hidden rounded-tl-lg rounded-tr-lg bg-[#555555] px-4 py-2">
          <div className="justify-start text-sm font-normal text-[#B4B4B4]">
            Bash
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative h-4 w-4 overflow-hidden">
              <CopyIcon />
            </div>
            <div className="justify-start text-sm font-normal text-zinc-400">
              Copy code
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-3.5 self-stretch overflow-hidden rounded-br-lg rounded-bl-lg bg-[#252525] p-6">
          <div className="justify-start self-stretch text-start font-mono text-lg font-medium text-white">
            {INSTALL_CONSTANTS.SUGGESTION.COMMAND}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
