"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "The Platinum Moving S.X",
    desc: "Plataforma web para gestión de servicios de mudanza. Diseño optimizado para captación de clientes.",
    tags: ["React", "UX/UI", "Comercial"],
    image:
      "https://i.ibb.co/v6MTtDWg/LOGO-COLORES-CORPORATIVOS-Y-SECUNDARIOS-SOLO-LEON-Mesa-de-trabajo-1.png",
    link: "https://theplatinummovingsx.com/",
    linkLabel: "Visitar Sitio",
  },
  {
    title: "Syntext Portfolio",
    desc: "Mi espacio personal. Desarrollo moderno con animaciones fluidas y contacto serverless.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    linkLabel: "Ver Código",
  },
  {
    title: "Sistema de Gestión",
    desc: "Prototipo para control de inventarios y automatización de tareas administrativas.",
    tags: ["Python", "Database", "Backend"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
    linkLabel: "Ver Demo",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-28 w-full flex flex-col items-center py-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="glass overflow-hidden rounded-2xl flex flex-col shadow-lg group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
          >
            {/* Imagen */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
            {/* Contenido */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white/10 text-primary rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-primary hover:text-black font-semibold transition-all"
              >
                {p.linkLabel}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}