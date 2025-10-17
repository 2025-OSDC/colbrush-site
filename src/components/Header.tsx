import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems, GITHUB_URL } from "../constants/navigation";
import { Logo } from "./icons/Logo";
import { GitHubIcon } from "./icons/GithubIcon";
import { LogoText } from "./icons/LogoText";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="relative w-full bg-[#ffffff04] border-b border-[#ffffff24] shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.17)]"
      style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.17)" }}
    >
      <div className="flex h-14 w-full items-center justify-between px-4 sm:h-16 sm:px-8 lg:px-24">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
            <Logo width={28} height={28} className="sm:h-8 sm:w-8" />
            <LogoText
              width={80}
              height={24}
              className="sm:h-[30px] sm:w-[100px]"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="hidden items-center gap-6 sm:flex lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-sm font-normal transition-colors hover:text-gray-100 lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-white flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 transition-colors hover:bg-gray-50 sm:gap-2.5 sm:px-2.5 sm:py-2"
          >
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <GitHubIcon width={16} height={16} className={`sm:h-5 sm:w-5 text-white group-hover:text-black transition-colors`} />
              <span className="text-white text-xs font-normal transition-colors group-hover:text-black sm:text-sm">
                GitHub
              </span>
            </div>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-6 w-6 flex-col items-center justify-center space-y-1 sm:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`bg-white block h-0.5 w-5 transition-transform ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`bg-white block h-0.5 w-5 transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`bg-white block h-0.5 w-5 transition-transform ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 z-50 w-full border-b border-[#ffffff24] bg-bg sm:hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white px-4 py-3 text-base font-normal transition-colors hover:text-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
