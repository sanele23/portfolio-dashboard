import { Menu } from "lucide-react";

export default function Header({ onMenuToggle }) {
  return (
    <header className="sticky top-0 z-30 flex items-center h-16 px-4 md:px-6 bg-white border-b border-google-grey-200 gap-4">
      {/* Hamburger (mobile) */}
      <button
        onClick={onMenuToggle}
        className="p-2 rounded-full hover:bg-google-grey-100 transition-colors lg:hidden text-google-grey-700"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Title */}
      <span className="text-sm font-medium text-google-grey-700 hidden lg:block">
        Portfolio Dashboard
      </span>
    </header>
  );
}
