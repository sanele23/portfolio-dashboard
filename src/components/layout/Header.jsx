import { Menu, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Header({ onMenuToggle }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center h-14 px-4 md:px-5 bg-white/80 dark:bg-google-grey-800/80 backdrop-blur-lg border-b border-google-grey-200/30 dark:border-google-grey-700/30 gap-3 transition-colors rounded-tr-2xl">
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
        className="p-2 rounded-full hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors text-google-grey-700 dark:text-google-grey-300 relative overflow-hidden"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={dark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Title */}
      <span className="text-sm font-medium text-google-grey-700 dark:text-google-grey-300 hidden lg:block">
        Portfolio Dashboard
      </span>
    </header>
  );
}
