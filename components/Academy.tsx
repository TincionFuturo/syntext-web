"use client";
import { motion } from "framer-motion";
import { GraduationCap, Users, BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function Academy() {
  return (
    <section id="academy" className="scroll-mt-28 w-full py-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto items-center">
        {/* Columna Izquierda: Instructor */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="glass p-4 rounded-2xl flex flex-col items-center w-64">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Instructor Syntext"
              width={224}
              height={224}
              className="object-cover rounded-xl mb-4"
            />
            <span className="text-lg font-bold text-primary">Lead Instructor & Senior Dev</span>
          </div>
        </motion.div>
        {/* Columna Derecha: Oferta */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl font-bold mb-2">Syntext <span className="text-primary">Academy</span></h2>
          <h3 className="text-xl text-gray-300 mb-4">Aprende tecnología real con expertos que construyen el futuro.</h3>
          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex items-center gap-2 text-gray-200"><Users className="w-5 h-5 text-primary" /> Mentoria 1 a 1</li>
            <li className="flex items-center gap-2 text-gray-200"><GraduationCap className="w-5 h-5 text-primary" /> Cursos de Ciberseguridad</li>
            <li className="flex items-center gap-2 text-gray-200"><BrainCircuit className="w-5 h-5 text-primary" /> Bootcamps de Código</li>
          </ul>
          <a href="#contacto" className="px-8 py-3 bg-primary text-black font-bold rounded-full shadow hover:scale-105 transition-transform w-fit flex items-center gap-2">
            Ver Planes de Estudio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
