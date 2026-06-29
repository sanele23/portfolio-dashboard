import { useState, useEffect, useMemo } from "react";
import { Menu, X, Search, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import profileImg from "../../assets/profile-image.png";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Overview");

  const sections = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        id: link.href.replace("#", ""),
      })),
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const offsetY = window.scrollY + 160;
      let current = sections[0]?.label ?? "Overview";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= offsetY) {
          current = section.label;
        }
      }

      setActiveLabel(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  useEffect(() => {
    const onHotkey = (e) => {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = e.target?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        const skills = document.getElementById("skills");
        skills?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("keydown", onHotkey);
    return () => window.removeEventListener("keydown", onHotkey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-outline-variant"
          : "bg-background/85 border-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8 h-20 flex items-center gap-3 md:gap-5">
        {/* Left cluster */}
        <div className="min-w-0 flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-sm text-google-grey-100 hover:bg-google-grey-800/80 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="min-w-0 hidden sm:flex items-center gap-3 text-google-grey-100 font-mono tracking-wider">
            <span className="text-2xl font-bold leading-none">SYS_ARCH</span>
            <span className="text-google-grey-500 text-2xl leading-none">//</span>
            <span className="text-2xl font-bold uppercase leading-none">{activeLabel}</span>
            <span className="text-google-grey-600 text-2xl leading-none">/</span>
            <span className="text-google-grey-500 text-sm md:text-[0.95rem] truncate">
              status:<span className="text-google-grey-300">online</span>
            </span>
          </div>
        </div>

        {/* Command bar */}
        <button
          onClick={() => {
            const skills = document.getElementById("skills");
            skills?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden md:flex flex-1 max-w-xl items-center gap-3 h-14 px-6 border border-outline-variant/90 bg-google-grey-900/70 hover:border-google-grey-400/50 transition-colors text-google-grey-500"
          aria-label="Open command actions"
        >
          <Search size={27} className="text-google-grey-500" strokeWidth={1.6} />
          <span className="font-mono uppercase tracking-[0.16em] text-[0.68rem] lg:text-[0.82rem] truncate">
            Press '/' for commands...
          </span>
        </button>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1.5 md:gap-2">
          <button
            onClick={toggleTheme}
            className="h-14 w-14 inline-flex items-center justify-center text-google-grey-300 hover:text-white hover:bg-google-grey-800/80 transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title="Display settings"
          >
            <Settings size={25} strokeWidth={1.8} />
          </button>

          <a
            href="#contact"
            className="h-14 w-14 inline-flex items-center justify-center text-google-grey-300 hover:text-white hover:bg-google-grey-800/80 transition-colors font-mono text-2xl font-bold"
            aria-label="Jump to contact section"
            title="Quick action"
          >
            &gt;_
          </a>

          <a
            href="#overview"
            className="h-14 w-14 shrink-0 overflow-hidden border border-outline-variant hover:border-google-grey-300 transition-colors"
            aria-label="Go to top"
          >
            <img
              src={profileImg}
              alt="Profile avatar"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </a>
        </div>
      </div>

      {/* Navigation drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40"
              aria-label="Close navigation overlay"
            />

          <motion.div
            initial={{ x: -28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -28, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute left-4 top-20 z-50 w-[min(86vw,340px)] border border-outline-variant bg-background/95 backdrop-blur-xl shadow-google-modal"
          >
            <nav className="p-3" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = link.label === activeLabel;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-xs font-mono tracking-[0.2em] transition-all uppercase border-l-2 ${
                      active
                        ? "text-white border-white bg-google-grey-800/65"
                        : "text-google-grey-300 border-transparent hover:text-white hover:border-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-2 px-1">
                <a
                  href="mailto:sanele23@live.com"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-xs font-mono font-bold text-center bg-white hover:bg-google-grey-100 text-black transition-all uppercase tracking-[0.2em]"
                >
                  Reach Out!
                </a>
              </div>
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
