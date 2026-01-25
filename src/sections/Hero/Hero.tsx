import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section
      className="h-screen overflow-hidden relative md:p-0 md:h-[850px] sm:h-[750px]"
      id="home"
    >
      <ParticlesBackground />
      
      <div className="container h-full">
        <div className="flex flex-wrap items-start lg:items-center h-full">
          <HeroContent 
            firstName="Surya"
            lastName=""
            badge="Software Engineer"
            description="Crafting seamless web experiences with React and Next.js."
          />
          
          <HeroImage 
            src="/images/hero/22268.jpg"
            alt="Portfolio Hero"
          />
        </div>
      </div>
    </section>
  );
}
