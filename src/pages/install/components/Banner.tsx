import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";
import bannerImage from "../../../assets/images/banner.webp";

const Banner = () => {
  return (
    <div className="relative flex h-135 w-full items-center justify-center">
      <div className="absolute inset-0 h-full w-full" />
      <img
        src={bannerImage}
        alt="Banner"
        className="absolute inset-0 m-auto w-[805px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[50px] px-4">
        <p className="flex w-full flex-col items-center gap-3 text-5xl font-bold text-white text-shadow-lg">
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
