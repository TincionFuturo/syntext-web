"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/50237013897"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-black shadow-lg animate-bounce hover:scale-110 transition-transform"
      aria-label="Chatea por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
