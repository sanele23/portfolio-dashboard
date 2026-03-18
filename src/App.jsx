import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { Sidebar, MobileSidebar, Header } from "./components/layout";
import {
  OverviewSection,
  ProjectsSection,
  TechStackSection,
  ExperienceSection,
} from "./pages";

const sectionComponents = {
  overview: <OverviewSection />,
  projects: <ProjectsSection />,
  techstack: <TechStackSection />,
  experience: <ExperienceSection />,
};

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.99 },
};

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Outer shell — creates the inset floating look */}
      <div className="h-screen p-1.5 md:p-2 bg-google-grey-200 dark:bg-google-grey-900 transition-colors">
        <div className="flex h-full rounded-2xl overflow-hidden border border-google-grey-300 dark:border-google-grey-700 bg-white dark:bg-google-grey-800 shadow-google-modal">
          <Sidebar
            activeSection={activeSection}
            onNavigate={setActiveSection}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          <MobileSidebar
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            activeSection={activeSection}
            onNavigate={setActiveSection}
          />

          <div className="flex-1 flex flex-col overflow-hidden rounded-2xl">
            <Header onMenuToggle={() => setMobileMenuOpen(true)} />

            <main className="flex-1 overflow-y-auto p-3 md:p-5 bg-white dark:bg-google-grey-800 transition-colors relative">
              {/* Subtle gradient mesh background */}
              <div className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-20">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative z-10 max-w-6xl mx-auto"
                >
                  {sectionComponents[activeSection] || <OverviewSection />}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
