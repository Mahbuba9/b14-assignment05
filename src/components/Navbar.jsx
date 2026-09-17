import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 md:flex md:items-center md:justify-between items-center">
        <div className="flex items-center gap-3 justify-start">
          <button
            className="md:hidden text-gray-800 p-2 -ml-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <a href="#home" className="hidden md:flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
              DS
            </span>
            <span className="text-gray-900 font-semibold text-lg">
              Dev <span className="text-pink-500 font-bold">Stack</span>
            </span>
          </a>
        </div>

        <a href="#home" className="flex md:hidden items-center gap-2 justify-center">
          <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
            DS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 justify-center">
          {NAV_LINKS.map(function (link, i) {
            const href = "#" + link.toLowerCase();
            const linkClass =
              i === 0
                ? "text-sm text-pink-500 font-medium"
                : "text-sm text-gray-600 hover:text-gray-900 transition-colors";
            return (
              <a key={link} href={href} className={linkClass}>
                {link}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 justify-end">
          <button className="text-xs sm:text-sm text-gray-700 hover:text-gray-900">
            Sign In
          </button>
          <button className="text-xs sm:text-sm text-white bg-gray-900 px-3 sm:px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-gray-100">
          {NAV_LINKS.map(function (link) {
            const href = "#" + link.toLowerCase();
            return (
              
                <a key={link}
                href={href}
                className="text-sm text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}