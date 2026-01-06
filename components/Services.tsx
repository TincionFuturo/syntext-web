"use client"; // <--- ¡ESTA ES LA LÍNEA QUE FALTA!

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Bot, Server } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Desarrollo Web',
    desc: 'Landing pages modernas, rápidas y responsivas.',
  },
  {
    icon: Bot,
    title: 'Automatización',
    desc: 'Scripts de Python para ahorrar tiempo en tareas repetitivas.',
  },
  {
    icon: Server,
    title: 'Mantenimiento',
    desc: 'Soporte técnico, actualizaciones y optimización.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-28 py-20 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Mis <span className="text-primary">Servicios</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="glass p-8 rounded-2xl flex flex-col gap-4 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="p-3 bg-white/5 w-fit rounded-xl">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}