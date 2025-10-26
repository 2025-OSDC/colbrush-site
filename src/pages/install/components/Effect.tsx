import Line from "@assets/svgs/line.svg?react";
import { INSTALL_CONSTANTS } from "../constants";

const Effect = () => {
  const { TITLE, BEFORE, AFTER } = INSTALL_CONSTANTS.EFFECT;
  const cardClass =
    "relative max-w-md flex-1 overflow-hidden rounded-xl bg-neutral-400/10 p-6 md:p-8";
  const itemClass =
    "text-center text-sm md:text-base lg:text-lg text-neutral-400 whitespace-normal md:whitespace-nowrap";
  const labelClass = "flex flex-col items-center gap-1";

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 md:gap-16">
        <h2 className="text-center text-2xl font-semibold text-[#8144FF] md:text-3xl">
          {TITLE}
        </h2>

        <div className="flex w-full flex-col items-center gap-7">
          {/* Desktop: BEFORE/AFTER 레이블을 가로로 배치 */}
          <div className="hidden items-center gap-12 md:gap-20 lg:flex">
            <div className={labelClass}>
              <h3 className="text-center text-xl font-semibold text-white md:text-2xl">
                {BEFORE.LABEL}
              </h3>
              <p className="text-base whitespace-nowrap text-neutral-400 md:text-lg">
                {BEFORE.DESCRIPTION}
              </p>
            </div>

            <Line />

            <div className={labelClass}>
              <h3 className="text-center text-xl font-semibold text-white md:text-2xl">
                {AFTER.LABEL}
              </h3>
              <p className="text-base whitespace-nowrap text-neutral-400 md:text-lg">
                {AFTER.DESCRIPTION}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:gap-24">
            {/* BEFORE 카드 */}
            <div className="flex flex-col gap-4">
              {/* Mobile/Tablet: 카드 위에 레이블 표시 */}
              <div className={`${labelClass} lg:hidden`}>
                <h3 className="text-center text-xl font-semibold text-white md:text-2xl">
                  {BEFORE.LABEL}
                </h3>
                <p className="text-base text-neutral-400 md:text-lg">
                  {BEFORE.DESCRIPTION}
                </p>
              </div>
              <div className={`${cardClass} border border-neutral-400`}>
                <div className="flex flex-col items-center gap-8 md:gap-11">
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
            </div>

            {/* AFTER 카드 */}
            <div className="flex flex-col gap-4">
              {/* Mobile/Tablet: 카드 위에 레이블 표시 */}
              <div className={`${labelClass} lg:hidden`}>
                <h3 className="text-center text-xl font-semibold text-white md:text-2xl">
                  {AFTER.LABEL}
                </h3>
                <p className="text-base text-neutral-400 md:text-lg">
                  {AFTER.DESCRIPTION}
                </p>
              </div>
              <div
                className={`${cardClass} border border-violet-500 shadow-[0px_0px_12px_12px_rgba(136,77,255,0.21)] lg:p-12`}
              >
                <div className="flex flex-col items-center gap-8 md:gap-12">
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
    </div>
  );
};

export default Effect;
