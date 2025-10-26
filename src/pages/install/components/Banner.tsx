import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";
import GradientBlinds from "../../../components/animations/GradientBlinds";

const Banner = () => {
  return (
    <div className="relative flex h-96 w-full items-center justify-center md:h-115 lg:h-135">
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[#060010] sm:w-[600px] md:w-[700px] lg:w-[805px]">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={30}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 md:gap-10 lg:gap-[50px]">
        <p className="flex w-full flex-col items-center gap-2 text-2xl font-bold text-white text-shadow-lg md:gap-3 md:text-4xl lg:text-5xl">
          {INSTALL_CONSTANTS.BANNER.DESCRIPTION.split("\n").map(
            (line, index) => (
              <span key={index}>{line}</span>
            ),
          )}
        </p>
        <Button onClick={() => window.open(GITHUB_URL, "_blank")}>
          {INSTALL_CONSTANTS.GET_STARTED}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
