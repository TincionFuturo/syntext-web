"use client";
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 flex flex-col items-center justify-center mt-8">
      <span className="text-xl font-bold text-white mb-4">Syntext.</span>
      <div className="flex gap-6 mb-4">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
      </div>
      <span className="text-gray-500 text-sm">© 2026 Syntext. Hecho con 💙 en Guatemala.</span>
    </footer>
  );
}
