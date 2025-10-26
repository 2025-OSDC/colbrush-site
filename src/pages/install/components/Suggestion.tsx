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
    <div className="flex min-h-96 md:h-115 lg:h-126 w-full flex-col items-center justify-center gap-2 md:gap-3 text-center px-4 py-8 md:py-0">
      <Logo
        width={48}
        height={48}
        className="md:w-[58px] md:h-[58px]"
      />
      <LogoText
        width={140}
        height={40}
        className="md:w-[160px] md:h-[48px]"
      />
      <p className="flex w-full flex-col gap-1 self-stretch text-center text-base md:text-lg font-normal text-[#909090] px-4">
        {INSTALL_CONSTANTS.SUGGESTION.DESCRIPTION.split("\n").map(
          (line, index) => (
            <span key={index}>{line}</span>
          ),
        )}
      </p>

      <div className="mt-8 md:mt-13 inline-flex w-full max-w-[90%] md:max-w-[766.40px] flex-col items-start justify-start">
        <div className="inline-flex items-center justify-between self-stretch overflow-hidden rounded-tl-lg rounded-tr-lg bg-[#555555] px-3 md:px-4 py-2">
          <div className="justify-start text-xs md:text-sm font-normal text-[#B4B4B4]">
            Bash
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative h-4 w-4 overflow-hidden">
              <CopyIcon />
            </div>
            <div className="justify-start text-xs md:text-sm font-normal text-zinc-400">
              Copy code
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-3.5 self-stretch overflow-hidden rounded-br-lg rounded-bl-lg bg-[#252525] p-4 md:p-6">
          <div className="justify-start self-stretch text-start font-mono text-sm md:text-base lg:text-lg font-medium text-white break-all">
            {INSTALL_CONSTANTS.SUGGESTION.COMMAND}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
