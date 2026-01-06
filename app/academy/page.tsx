"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppBtn from '@/components/WhatsAppBtn';
import ParticlesBackground from '@/components/ParticlesBackground';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Rocket, Code } from 'lucide-react';
import Image from 'next/image';

export default function AcademyPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      {/* Hero Academy */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative py-24">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-7xl font-bold mb-6">
          Syntext <span className="text-primary">Academy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Formación de alto nivel con instructores que viven el código día a día.
        </motion.p>
      </section>
      {/* El Instructor */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 px-4 max-w-5xl mx-auto">
        <motion.div initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex flex-col items-center">
          <div className="glass p-6 rounded-2xl flex flex-col items-center w-72">
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Instructor Syntext" width={256} height={256} className="object-cover rounded-xl mb-4" />
            <span className="text-lg font-bold text-primary mb-1">Conoce a tu Mentor</span>
            <span className="text-sm text-gray-400">Lead Instructor & Senior Dev</span>
            <p className="text-gray-300 text-center mt-4">Experto técnico que se mete en todo: backend, frontend, infraestructura y más.</p>
            <a href="https://wa.me/50212345678" target="_blank" rel="noopener" className="mt-6 px-6 py-2 bg-primary text-black rounded-full font-semibold hover:scale-105 transition-transform">Agendar Mentoria</a>
          </div>
        </motion.div>
        {/* Oferta Educativa */}
        <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="glass p-6 rounded-2xl flex flex-col items-center">
            <Code className="w-8 h-8 text-primary mb-2" />
            <span className="text-lg font-bold mb-1">Cursos Técnicos</span>
            <p className="text-gray-400 text-center">Aprende programación, frameworks y herramientas modernas.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center">
            <Lightbulb className="w-8 h-8 text-primary mb-2" />
            <span className="text-lg font-bold mb-1">Asesoría de Proyectos</span>
            <p className="text-gray-400 text-center">Ideal para tesis, startups y proyectos que necesitan guía experta.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center">
            <Rocket className="w-8 h-8 text-primary mb-2" />
            <span className="text-lg font-bold mb-1">Bootcamps Intensivos</span>
            <p className="text-gray-400 text-center">Sumérgete en experiencias prácticas y acelera tu aprendizaje.</p>
          </div>
        </motion.div>
      </section>
      {/* Call to Action */}
      <section className="py-16 flex flex-col items-center justify-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6 text-center">
          ¿Listo para aprender?
        </motion.h2>
        <a href="https://wa.me/50212345678" target="_blank" rel="noopener" className="px-8 py-3 bg-primary text-black font-bold rounded-full shadow hover:scale-105 transition-transform w-fit flex items-center gap-2">
          Habla con el Instructor
        </a>
      </section>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
