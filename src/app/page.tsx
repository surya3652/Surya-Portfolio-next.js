import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import MarqueeText from "@/components/shared/MarqueeText";
import Hero from "@/sections/Hero/Hero";
import AboutNew from "@/sections/About/AboutNew";
import Projects from "@/sections/Projects/Projects";
import SkillsNew from "@/sections/Skills/SkillsNew";
import Achievements from "@/sections/Achievements/Achievements";
import Contact from "@/sections/Contact/Contact";

// Marquee text data
const marqueeItems1 = ["React.js.", "Vue.js.", "Next.js.", "TypeScript."];
const marqueeItems2 = [
  "Machine Learning.",
  "Full Stack.",
  "Web Development.",
  "Innovation.",
];

export default function Home() {
  return (
    <>
      {/* Custom Cursor for desktop */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <AboutNew />
        
        {/* Marquee Text 1 */}
        <MarqueeText items={marqueeItems1} speed={40} />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <SkillsNew />
        
        {/* Marquee Text 2 */}
        <MarqueeText items={marqueeItems2} speed={50} reverse />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </>
  );
}
