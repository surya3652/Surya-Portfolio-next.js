"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles-bg"
      options={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              // area: 2000,
            },
          },
          color: {
            value: ["#000000"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 4, max: 8 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "right",
            random: false,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        detectRetina: false,
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}