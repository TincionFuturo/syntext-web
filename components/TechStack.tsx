"use client";
import { motion } from "framer-motion";
import { Code2, Terminal, ShieldCheck, Database, Cpu, Palette } from "lucide-react";

const techs = [
  { name: "Next.js", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "Ciberseguridad", icon: ShieldCheck },
  { name: "Tailwind", icon: Palette },
  { name: "React", icon: Code2 },
  { name: "IoT", icon: Cpu },
];

// Duplicar el array para efecto infinito
const marqueeTechs = [...techs, ...techs, ...techs];

export default function TechStack() {
  return (
    <div className="relative bg-black border-y border-white/5 h-24 w-full overflow-hidden flex items-center">
      {/* Degradado izquierdo */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      {/* Degradado derecho */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex items-center gap-16 min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {marqueeTechs.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div key={tech.name + i} className="flex items-center gap-3 text-gray-200 text-lg font-medium">
              <Icon className="w-7 h-7 text-primary" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
