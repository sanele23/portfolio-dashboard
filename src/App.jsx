import { ThemeProvider } from "./context/ThemeContext";
import { Navbar, Footer } from "./components/layout";
import OverviewSection from "./pages/OverviewSection";
import TechStackSection from "./pages/TechStackSection";
import ProjectsSection from "./pages/ProjectsSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-google-grey-900 text-google-grey-900 dark:text-google-grey-50 transition-colors duration-200">
        <Navbar />
        <main>
          {/* Hero / Overview — id used by "Back to top" links */}
          <div id="overview">
            <OverviewSection />
          </div>

          {/* Tech Stack */}
          <div id="skills">
            <TechStackSection />
          </div>

          {/* Projects */}
          <div id="work">
            <ProjectsSection />
          </div>

          {/* Experience & Education */}
          <div id="experience">
            <ExperienceSection />
          </div>

          {/* Contact */}
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
