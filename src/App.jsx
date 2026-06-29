import { ThemeProvider } from "./context/ThemeContext";
import { Navbar, Footer } from "./components/layout";
import OverviewSection from "./pages/OverviewSection";
import TechStackSection from "./pages/TechStackSection";
import ProjectsSection from "./pages/ProjectsSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";
import { BackgroundGrid, CustomCursor } from "./components/ui";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background text-google-grey-50 selection:bg-white selection:text-black">
        <BackgroundGrid />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
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
