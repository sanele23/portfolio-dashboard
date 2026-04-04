import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-google-grey-900/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#"
          className="font-headline text-lg font-bold tracking-tight text-google-grey-900 dark:text-white hover:text-brand-primary transition-colors"
        >
          SK&apos;s Portfolio
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-google-grey-700 dark:text-google-grey-300 hover:text-google-grey-900 dark:hover:text-white hover:bg-google-grey-100 dark:hover:bg-google-grey-800 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-google-grey-100 dark:hover:bg-google-grey-800 transition-colors text-google-grey-700 dark:text-google-grey-300"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Hire Me CTA */}
          <a
            href="mailto:sanele23@live.com"
            className="hidden md:inline-flex items-center bg-brand-primary hover:bg-brand-primary-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px active:scale-95"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-google-grey-100 dark:hover:bg-google-grey-800 transition-colors text-google-grey-700 dark:text-google-grey-300 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-google-grey-900/95 backdrop-blur-xl border-t border-google-grey-200/50 dark:border-google-grey-700/50"
          >
            <nav className="px-6 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-google-grey-700 dark:text-google-grey-300 hover:text-google-grey-900 dark:hover:text-white hover:bg-google-grey-100 dark:hover:bg-google-grey-800 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="mailto:sanele23@live.com"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-center bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg transition-all"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
