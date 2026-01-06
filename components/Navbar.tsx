"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "/academy", label: "Academy" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image src="/logo.svg" alt="Syntext Logo" width={36} height={36} priority />
          <span className="font-black text-xl tracking-tight text-white">Syntext</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cotizar"
            className="ml-4 px-6 py-2 bg-primary text-black font-bold rounded-full shadow hover:scale-105 transition-transform"
          >
            Cotizar
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7 text-primary" />
        </button>
      </div>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link href="/" className="flex items-center gap-2 select-none" onClick={() => setIsOpen(false)}>
                <Image src="/logo.svg" alt="Syntext Logo" width={36} height={36} priority />
                <span className="font-black text-xl tracking-tight text-white">Syntext</span>
              </Link>
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="w-8 h-8 text-primary" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold text-white/90 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#cotizar"
                className="mt-8 px-10 py-4 bg-primary text-black font-bold rounded-full shadow-lg text-2xl hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Cotizar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
