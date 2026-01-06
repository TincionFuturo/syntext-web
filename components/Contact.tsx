"use client";
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xwvplpwo");

  return (
    <section id="contacto" className="scroll-mt-28 w-full flex flex-col items-center py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Izquierda: Texto e info */}
        <div className="flex flex-col justify-center items-start md:items-start text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hablemos de tu proyecto</h2>
          <p className="text-gray-300 mb-4">¿Listo para cotizar? Cuéntame tu idea y te ayudo a llevarla a la realidad.</p>
          <div className="text-gray-400 text-base">
            <span className="block mb-2">Email: <a href="mailto:sarcenoronaldo97@gmail.com" className="text-primary">sarcenoronaldo97@gmail.com</a></span>
            <span className="block">Instagram: <a href="https://instagram.com/adailsonsarceno" target="_blank" rel="noopener" className="text-primary">@adailsonsarceno</a></span>
          </div>
        </div>
        {/* Derecha: Formulario */}
        <div className="glass bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center">
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
              <span className="text-xl font-semibold text-green-400">¡Mensaje enviado!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <label htmlFor="name" className="text-gray-200 font-medium">Nombre</label>
              <input id="name" type="text" name="name" required className="bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary/50 outline-none" />
              <ValidationError prefix="Nombre" field="name" errors={state.errors} />

              <label htmlFor="email" className="text-gray-200 font-medium">Email</label>
              <input id="email" type="email" name="email" required className="bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary/50 outline-none" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message" className="text-gray-200 font-medium">Mensaje</label>
              <textarea id="message" name="message" required rows={5} className="bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:border-primary/50 outline-none resize-none" />
              <ValidationError prefix="Mensaje" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting} className="mt-4 px-8 py-3 bg-primary text-black font-bold rounded-full transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed">
                {state.submitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
