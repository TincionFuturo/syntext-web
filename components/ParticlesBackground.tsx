"use client";
import { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "#0B0C10" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: "#66FCF1" },
          links: { enable: true, color: "#66FCF1", opacity: 0.2 },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
          opacity: { value: { min: 0.1, max: 0.5 } },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
