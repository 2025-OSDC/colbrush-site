import { Logo } from "./icons/Logo";
import { LogoText } from "./icons/LogoText";

export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff23] px-4 py-4 sm:px-8 sm:py-5 lg:px-28 lg:py-6">
      <div className="mx-auto h-full w-full">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-white text-xs font-normal sm:text-sm">
                Developed by Team ColorBrush
              </p>
              <p className="text-white text-xs font-normal sm:text-sm">
                Contributors: 윤수호, 김연진, 윤혜성, 이준희, 노하영
              </p>
            </div>

            <p className="text-gray-100 text-xs font-normal sm:text-sm">
              Copyright© 2025. colbrush. All rights reserved.
            </p>
          </div>

          <div className="flex items-end gap-2 sm:gap-3">
            <Logo
              width={28}
              height={28}
              className="sm:h-[32px] sm:w-[32px] lg:h-[37px] lg:w-[37px]"
            />
            <LogoText
              width={100}
              height={30}
              className="sm:h-[35px] sm:w-[115px] lg:h-[40px] lg:w-[132px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
