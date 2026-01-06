import React from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-surface glass shadow-lg">
      <div className="flex items-center gap-2">
        <Code2 className="text-primary w-7 h-7" />
        <span className="text-xl font-bold tracking-tight text-primary">Syntext</span>
      </div>
      <div className="flex gap-6 text-secondary font-medium">
        <a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a>
        <a href="/#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
        <a href="/academy" className="hover:text-primary transition-colors">Academy</a>
        <a href="/#contacto" className="hover:text-primary transition-colors">Contacto</a>
        <a href="/#contacto" className="ml-4 px-4 py-2 bg-primary text-black rounded-full font-semibold hover:bg-primary/80 transition-colors">Cotizar</a>
      </div>
    </nav>
  );
}
