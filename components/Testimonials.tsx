"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Syntext transformó nuestra operación. El sistema de cotización aumentó nuestros clientes potenciales en un 40% la primera semana.",
    author: "Carlos M.",
    role: "Gerente The Platinum Moving",
    real: true,
  },
  {
    text: "Necesitaba automatizar mis inventarios y la solución fue impecable. Ahorro 10 horas de trabajo manual a la semana.",
    author: "Ana R.",
    role: "Founder TechStore",
    real: false,
  },
  {
    text: "La seguridad era mi prioridad. La auditoría y blindaje de mi web superó mis expectativas.",
    author: "David L.",
    role: "CEO FinTech GT",
    real: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-black mb-12">
          Lo que dicen mis <span className="text-primary">Aliados</span>
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              className="relative bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[260px] shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12 -z-10" />
              <p className="text-lg text-gray-200 mb-6 relative z-10">{t.text}</p>
              <div className="mt-auto">
                <span className="block font-bold text-primary text-base">
                  {t.author}
                </span>
                <span className="block text-sm text-gray-400 font-semibold">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
