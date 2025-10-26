import Code from "../../../components/code";
import { MagicIcon } from "../../../components/icons/MagicIcon";
import { PaletteIcon } from "../../../components/icons/PaletteIcon";
import { PeopleIcon } from "../../../components/icons/PeopleIcon";
import { SlidersIcon } from "../../../components/icons/SlidersIcon";
import { WindowIcon } from "../../../components/icons/WindowIcon";
import Description from "../../../components/description";
import { INSTALL_CONSTANTS } from "../constants";
import FeatureItem from "./FeatureItem";

const Explanation = () => {
  return (
    <div>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6 sm:py-18 lg:gap-20 lg:px-8 lg:py-24">
        <FeatureItem
          icon={<PeopleIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.COLOR_BLIND_SUPPORT.TITLE}
        >
          <Description className="leading-7 sm:leading-8">
            {[
              INSTALL_CONSTANTS.CODES.PROTANOPIA,
              INSTALL_CONSTANTS.CODES.DEUTERANOPIA,
              INSTALL_CONSTANTS.CODES.TRITANOPIA,
            ].map((type, index, array) => (
              <span key={type}>
                <Code className="text-white">{type}</Code>
                {index < array.length - 1 && " , "}
              </span>
            ))}
            {INSTALL_CONSTANTS.EXPLANATION.COLOR_BLIND_SUPPORT.DESCRIPTION}
          </Description>
        </FeatureItem>

        <FeatureItem
          icon={<MagicIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.AUTO_GENERATION.TITLE}
        >
          <Description className="leading-7 sm:leading-8">
            <Code className="text-white">{INSTALL_CONSTANTS.CODES.THEME}</Code>
            {INSTALL_CONSTANTS.EXPLANATION.AUTO_GENERATION.DESCRIPTION}
          </Description>
        </FeatureItem>

        <FeatureItem
          icon={<WindowIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.TITLE}
        >
          <Description className="leading-7 sm:leading-8">
            {INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.DESCRIPTION_PREFIX}
            <Code className="text-white">
              {INSTALL_CONSTANTS.CODES.THEME_PROVIDER}
            </Code>
            {INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.DESCRIPTION_SUFFIX}
          </Description>
        </FeatureItem>

        <FeatureItem
          icon={<PaletteIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.THEME_SWITCHER.TITLE}
        >
          <Description>
            {INSTALL_CONSTANTS.EXPLANATION.THEME_SWITCHER.DESCRIPTION}
          </Description>
        </FeatureItem>

        <FeatureItem
          icon={<SlidersIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.CUSTOMIZATION.TITLE}
        >
          <Description>
            {INSTALL_CONSTANTS.EXPLANATION.CUSTOMIZATION.DESCRIPTION}
          </Description>
        </FeatureItem>
      </div>
    </div>
  );
};

export default Explanation;
