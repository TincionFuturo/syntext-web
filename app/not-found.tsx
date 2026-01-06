"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Fondo de partículas */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>
      {/* 404 Glitch */}
      <motion.h1
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7], x: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="text-9xl font-black text-white/20 select-none mb-2"
        style={{ letterSpacing: "0.1em" }}
      >
        404
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl font-mono text-primary mb-4"
      >
        SYSTEM ERROR: Coordinates Not Found
      </motion.div>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        La página que buscas ha sido eliminada o no existe en este servidor.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-black font-bold rounded-full shadow hover:scale-105 transition-transform text-lg"
      >
        Regresar a la Base
      </Link>
    </div>
  );
}
