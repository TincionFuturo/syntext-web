import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Aquí le decimos a Tailwind dónde buscar tus clases
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Agregado por seguridad
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0C10",
        surface: "#1F2833",
        primary: "#66FCF1",    // Tu Cyan Neón
        secondary: "#45A29E",
      },
    },
  },
  plugins: [],
};
export default config;