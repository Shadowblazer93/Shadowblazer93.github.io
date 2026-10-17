import { useRef } from "react";
import { Anchor } from "./components/common/Anchor";
import { Footer } from "./components/layout/Footer";
import { FloatingHeader } from "./components/layout/FloatingHeader";
import { StickyHeader } from "./components/layout/StickyHeader";
import { AboutSection } from "./components/sections/AboutSection";
import { CcaSection } from "./components/sections/CcaSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { BackToTop } from "./components/ui/BackToTop";
import { useScrolledPast } from "./hooks/useScrolledPast";
import { ThemeProvider } from "./theme";

function Portfolio() {
  const headerRef = useRef<HTMLElement>(null);
  const showFloatingHeader = useScrolledPast(30);

  return (
    <>
      {/* The About link targets the top of the page, matching the original site. */}
      <Anchor id="about-me" />

      <div className="container">
        <StickyHeader ref={headerRef} />
        <FloatingHeader
          sourceRef={headerRef}
          visible={showFloatingHeader}
        />

        <h4 className="spacer-top-lg" />

        <AboutSection />

        <Anchor id="experience" />
        <br className="spacer-top" />
        <ExperienceSection />

        <Anchor id="cca" />
        <br className="spacer-top" />
        <CcaSection />

        <Anchor id="projects" />
        <br className="spacer-top" />
        <ProjectsSection />

        <BackToTop />

        <Anchor id="contact" />
        <ContactSection />

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
