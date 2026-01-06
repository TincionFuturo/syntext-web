
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-x-hidden">
        {/* HERO Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Tu idea, hecha <br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(102,252,241,0.5)]">
              Código.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
            Desarrollo web moderno, automatización y soluciones a medida para tu emprendimiento.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#servicios" className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(102,252,241,0.6)] transition-all transform hover:scale-105">Ver Servicios</a>
            <a href="#proyectos" className="px-8 py-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all">Portafolio</a>
          </div>
          {/* Indicador de Scroll Animado */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </section>
        {/* TechStack Marquee */}
        <TechStack />
        {/* Sobre Mí */}
        <About />
        {/* Servicios */}
        <Services />
        {/* Testimonios */}
        <Testimonials />
        {/* Proyectos */}
        <Projects />
        {/* Contacto */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}