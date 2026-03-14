import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Header({ onMenuToggle }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center h-16 px-4 md:px-6 bg-white dark:bg-google-grey-900 border-b border-google-grey-200 dark:border-google-grey-700 gap-4 transition-colors">
      {/* Hamburger (mobile) */}
      <button
        onClick={onMenuToggle}
        className="p-2 rounded-full hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors lg:hidden text-google-grey-700 dark:text-google-grey-300"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors text-google-grey-700 dark:text-google-grey-300"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Title */}
      <span className="text-sm font-medium text-google-grey-700 dark:text-google-grey-300 hidden lg:block">
        Portfolio Dashboard
      </span>
    </header>
  );
}
