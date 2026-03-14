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
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-white dark:bg-google-grey-900 transition-colors">
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

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuToggle={() => setMobileMenuOpen(true)} />

          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-google-grey-50 dark:bg-google-grey-800 transition-colors">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {sectionComponents[activeSection] || <OverviewSection />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
