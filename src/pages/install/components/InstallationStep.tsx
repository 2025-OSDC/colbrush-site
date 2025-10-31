import Code from "../../../components/code";
import CodeBlock from "../../../components/codeblock";
import Description from "../../../components/description";
import { INSTALL_CONSTANTS } from "../constants";
import StepItem from "./StepItem";

const InstallationStep = () => {
  return (
    <div className="w-full bg-[#8144FF1F] py-8 sm:py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xl font-semibold text-white sm:mb-12 sm:text-2xl lg:mb-16 lg:text-[2rem]">
          {INSTALL_CONSTANTS.INSTALLATION.MAIN_TITLE}
        </p>

        <div className="mb-20 flex flex-col gap-12 sm:gap-16 lg:gap-20">
          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP1.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP1.TITLE}
          >
            <CodeBlock>
              <div className="text-sm font-normal text-white sm:text-base lg:text-lg">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.PNPM}
              </div>
              <div className="text-sm font-normal text-[#909090] sm:text-base lg:text-lg">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.COMMENT}
              </div>
              <div className="text-sm font-normal text-white sm:text-base lg:text-lg">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.NPM}
              </div>
            </CodeBlock>

            <p className="mt-3 text-sm font-normal text-[#909090] sm:text-base lg:text-lg">
              {INSTALL_CONSTANTS.INSTALLATION.STEP1.DESCRIPTION.split("\n").map(
                (line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ),
              )}
            </p>
          </StepItem>

          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP2.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP2.TITLE}
          >
            <CodeBlock>
              <div className="text-sm font-normal sm:text-base lg:text-lg">
                <span className="text-blue-500">
                  {INSTALL_CONSTANTS.CODES.THEME}
                </span>
                <span className="text-white"> {`{`}</span>
              </div>
              <div className="text-sm font-normal sm:text-base lg:text-lg">
                <span className="text-pink">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.PRIMARY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink">
                  {
                    INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES
                      .PRIMARY_VALUE
                  }
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="text-sm font-normal sm:text-base lg:text-lg">
                <span className="text-pink">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.SECONDARY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink">
                  {
                    INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES
                      .SECONDARY_VALUE
                  }
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="text-sm font-normal sm:text-base lg:text-lg">
                <span className="text-pink">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.GRAY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink">
                  {
                    INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES
                      .GRAY_VALUE
                  }
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="text-sm font-normal text-white sm:text-base lg:text-lg">{`}`}</div>
            </CodeBlock>

            <Description className="mt-3 leading-7 sm:leading-8">
              {INSTALL_CONSTANTS.INSTALLATION.STEP2.DESCRIPTION_PREFIX}
              <Code className="text-white">
                {INSTALL_CONSTANTS.CODES.INDEX_CSS}
              </Code>
              {INSTALL_CONSTANTS.INSTALLATION.STEP2.DESCRIPTION_SUFFIX}
            </Description>

            <Description className="leading-7 sm:leading-8">
              <Code className="text-white">
                {INSTALL_CONSTANTS.CODES.THEME}
              </Code>
              {INSTALL_CONSTANTS.INSTALLATION.STEP2.EXPLANATION}
            </Description>
          </StepItem>

          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP3.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP3.TITLE}
          >
            <CodeBlock>
              <div className="text-sm font-normal text-white sm:text-base lg:text-lg">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.COMMAND}
              </div>
            </CodeBlock>

            <Description className="mt-3 leading-7 sm:leading-8">
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.DESCRIPTION}
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.COLOR_BLIND_TYPES.map(
                (type, index) => (
                  <span key={type} className="leading-7 sm:leading-8">
                    <Code className="text-white">{type}</Code>
                    {index <
                      INSTALL_CONSTANTS.INSTALLATION.STEP3.COLOR_BLIND_TYPES
                        .length -
                        1 && " , "}
                  </span>
                ),
              )}
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.DESCRIPTION_SUFFIX}
            </Description>
            <Description className="mt-[5px] leading-7 sm:leading-8">
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_DESCRIPTION_PREFIX}
              <Code className="text-white">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_EXAMPLE}
              </Code>
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_DESCRIPTION_SUFFIX}
            </Description>
          </StepItem>
        </div>
      </div>
    </div>
  );
};

export default InstallationStep;
