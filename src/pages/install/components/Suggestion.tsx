import { Logo } from "../../../components/icons/Logo";
import { LogoText } from "../../../components/icons/LogoText";
import { INSTALL_CONSTANTS } from "../constants";
import CopyIcon from "@assets/svgs/copy.svg?react";
import TextType from "../../../components/animations/TextType";

const Suggestion = () => {
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CONSTANTS.SUGGESTION.COMMAND);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="flex min-h-96 w-full flex-col items-center justify-center gap-2 px-4 py-8 text-center md:h-115 md:gap-3 md:py-0 lg:h-126">
      <Logo width={48} height={48} className="md:h-[58px] md:w-[58px]" />
      <LogoText width={140} height={40} className="md:h-[48px] md:w-[160px]" />
      <p className="flex w-full flex-col gap-1 self-stretch px-4 text-center text-base font-normal text-[#909090] md:text-lg">
        {INSTALL_CONSTANTS.SUGGESTION.DESCRIPTION.split("\n").map(
          (line, index) => (
            <span key={index}>{line}</span>
          ),
        )}
      </p>

      <div className="mt-8 inline-flex w-full max-w-[90%] flex-col items-start justify-start md:mt-13 md:max-w-[766.40px]">
        <div className="inline-flex items-center justify-between self-stretch overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-200 px-3 py-2 md:px-4">
          <div className="justify-start text-xs font-normal text-gray-50 md:text-sm">
            Bash
          </div>
          <button
            onClick={handleCopyCode}
            className="flex cursor-pointer items-center justify-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <div className="relative h-4 w-4 overflow-hidden">
              <CopyIcon />
            </div>
            <div className="justify-start text-xs font-normal text-gray-50 md:text-sm">
              Copy code
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-3.5 self-stretch overflow-hidden rounded-br-lg rounded-bl-lg bg-[#252525] p-4 md:p-6">
          <div className="justify-start self-stretch text-start font-mono text-sm font-medium break-all text-white md:text-base lg:text-lg">
            <TextType
              text={INSTALL_CONSTANTS.SUGGESTION.COMMAND}
              typingSpeed={50}
              className="inline-block"
              showCursor={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
