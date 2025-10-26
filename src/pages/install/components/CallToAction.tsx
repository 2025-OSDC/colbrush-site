import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";

const CallToAction = () => {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden sm:h-[350px] lg:h-[465px]">
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="h-50 w-full bg-[radial-gradient(ellipse_130.00%_107.13%_at_50.00%_10.00%,_rgba(0,_0,_0,_0)_37%,_#6633EE_69%,_white_100%)] blur-[6px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center gap-3 px-4 text-center sm:gap-4 lg:gap-5">
        <p className="text-gray max-w-md text-sm font-normal text-[#909090] sm:max-w-lg sm:text-base lg:max-w-xl lg:text-xl">
          {INSTALL_CONSTANTS.CTA.SUBTITLE.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index === 0 && <br />}
            </span>
          ))}
        </p>
        <p className="mb-1 text-xl font-semibold text-white sm:mb-2 sm:text-2xl lg:text-3xl">
          {INSTALL_CONSTANTS.CTA.MAIN_TITLE}
        </p>
        <Button
          variant="purple"
          onClick={() => window.open(GITHUB_URL, "_blank")}
        >
          {INSTALL_CONSTANTS.GET_STARTED}
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
