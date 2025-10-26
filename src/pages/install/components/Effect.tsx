import Line from "@assets/svgs/line.svg?react";
import { INSTALL_CONSTANTS } from "../constants";

const Effect = () => {
  const { TITLE, BEFORE, AFTER } = INSTALL_CONSTANTS.EFFECT;
  const cardClass =
    "relative max-w-md flex-1 overflow-hidden rounded-xl bg-neutral-400/10 p-8";
  const itemClass = "text-center text-lg text-neutral-400 whitespace-nowrap";

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-16">
        <h2 className="text-center text-3xl font-semibold text-[#8144FF]">
          {TITLE}
        </h2>

        <div className="flex w-full flex-col items-center gap-7">
          <div className="flex items-center gap-12 md:gap-20">
            <div className="flex w-24 flex-col items-center gap-1">
              <h3 className="text-center text-2xl font-semibold text-white">
                {BEFORE.LABEL}
              </h3>
              <p className="text-lg whitespace-nowrap text-neutral-400">
                {BEFORE.DESCRIPTION}
              </p>
            </div>

            <Line />

            <div className="flex w-32 flex-col items-center gap-1">
              <h3 className="text-center text-2xl font-semibold text-white">
                {AFTER.LABEL}
              </h3>
              <p className="text-lg whitespace-nowrap text-neutral-400">
                {AFTER.DESCRIPTION}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:gap-24">
            <div className={`${cardClass} border border-neutral-400`}>
              <div className="flex flex-col items-center gap-11">
                {BEFORE.ITEMS.map((item, idx) => (
                  <p key={idx} className={itemClass}>
                    {item.hasBr ? (
                      <>
                        {item.text} <br /> {item.subtext}
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div
              className={`${cardClass} border border-violet-500 shadow-[0px_0px_12px_12px_rgba(136,77,255,0.21)] lg:p-12`}
            >
              <div className="flex flex-col items-center gap-12">
                {AFTER.ITEMS.map((item, idx) => (
                  <p key={idx} className={itemClass}>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
