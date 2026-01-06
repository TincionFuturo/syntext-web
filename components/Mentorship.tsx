"use client";
import { motion } from "framer-motion";
import { GraduationCap, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Mentorship() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-black to-[#0B0C10] flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
        {/* Izquierda: Imagen */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full flex items-center justify-center bg-black">
            <span className="absolute inset-0 rounded-full border-4 border-primary animate-pulse" />
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Instructor Syntext"
              width={256}
              height={256}
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
        {/* Derecha: Info */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full w-fit font-mono mb-2">Syntext Academy</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Domina la Tecnología con Expertos</h2>
          <p className="text-gray-300 text-lg mb-4">No solo creamos software, también formamos a la próxima generación de desarrolladores. Aprende con nuestro Lead Instructor en sesiones personalizadas.</p>
          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex items-center gap-2 text-gray-200"><GraduationCap className="w-5 h-5 text-primary" /> Cursos Intensivos (Programación, Redes, Ciberseguridad).</li>
            <li className="flex items-center gap-2 text-gray-200"><Users className="w-5 h-5 text-primary" /> Mentoria 1 a 1 para resolver dudas complejas.</li>
            <li className="flex items-center gap-2 text-gray-200"><Lightbulb className="w-5 h-5 text-primary" /> Consultoría Técnica para proyectos estancados.</li>
          </ul>
          <a href="#contacto" className="px-8 py-3 bg-primary text-black font-bold rounded-full shadow hover:scale-105 transition-transform w-fit flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Agendar Clase
          </a>
        </motion.div>
      </div>
    </section>
  );
}
