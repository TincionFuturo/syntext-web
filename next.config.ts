import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }, // Para las fotos de prueba
      { protocol: "https", hostname: "i.ibb.co" },            // <--- AGREGA ESTA LÍNEA (ImgBB)
      { protocol: "https", hostname: "drive.google.com" },    // (Opcional, pero no recomendado por velocidad)
    ],
  },
};

export default nextConfig;