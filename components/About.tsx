"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
        {/* Izquierda: Texto */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Más que código, creo <span className="text-primary">Soluciones</span>.
          </h2>
          <p className="text-gray-300 text-lg">
            Soy estudiante de Ingeniería en Sistemas en Guatemala, apasionado por la Ciberseguridad y el Diseño. Mi meta es ayudar a emprendedores a digitalizarse y crecer en el mundo digital.
          </p>
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">+2</span>
              <span className="text-xs text-gray-400">Años programando</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">100%</span>
              <span className="text-xs text-gray-400">Compromiso</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">24/7</span>
              <span className="text-xs text-gray-400">Soporte</span>
            </div>
          </div>
        </motion.div>
        {/* Derecha: Imagen */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <div className="glass p-2 rounded-2xl rotate-3 shadow-lg w-64 h-80 flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop"
              alt="Sobre mí"
              width={256}
              height={320}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
