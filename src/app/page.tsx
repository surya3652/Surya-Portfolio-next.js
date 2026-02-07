import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import MarqueeText from "@/components/shared/MarqueeText";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";
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
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Marquee Text 1 */}
        <MarqueeText items={marqueeItems1} speed={40} />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
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
