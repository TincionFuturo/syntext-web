import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fuente moderna (sin patitas)
import "./globals.css"; // <--- ¡ESTA LÍNEA ES LA MAGIA!
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Syntext | Tu Socio Tecnológico en Guatemala",
    template: "%s | Syntext",
  },
  description:
    "Desarrollo web moderno, automatización y soluciones digitales a medida para emprendedores y empresas en Guatemala. Convierte tu idea en código.",
  keywords: ["Desarrollo Web", "Guatemala", "Programador", "Next.js", "React", "Automatización", "Sitios Web"],
  authors: [{ name: "Adailson Sarceño" }],
  creator: "Syntext",
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "https://syntext.vercel.app",
    title: "Syntext | Desarrollo Web Profesional",
    description: "Transformamos ideas en soluciones digitales de alto impacto. Mira mi portafolio.",
    siteName: "Syntext Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Syntext Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntext | Desarrollo Web",
    description: "Soluciones digitales a medida en Guatemala.",
    images: ["/logo.png"],
  },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ParticlesBackground />
        <WhatsAppBtn />
        {children}
      </body>
    </html>
  );
}