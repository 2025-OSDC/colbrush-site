import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";
import bannerImage from "../../../assets/images/banner.webp";

const Banner = () => {
  return (
    <div className="relative flex h-96 w-full items-center justify-center md:h-115 lg:h-135">
      <div className="absolute inset-0 h-full w-full" />
      <img
        src={bannerImage}
        alt="Banner"
        className="absolute inset-0 m-auto w-full object-cover sm:w-[600px] md:w-[700px] lg:w-[805px]"
      />
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
