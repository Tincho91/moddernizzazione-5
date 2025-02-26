import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#19247C",  // Azul oscuro en modo claro
          dark: "#0a0a0a",   // Negro azulado en modo oscuro
        },
        secondary: {
          light: "#F4F6FF",  // Azul muy claro en modo claro
          dark: "#262626",   // Gris oscuro en modo oscuro
        },
        textMain: {
          light: "#F4F6FF",  // ⚡ Texto blanco azulado en modo claro (antes era #1A1A1A)
          dark: "#d1d5db",   // Gris claro en modo oscuro
        },
        textSubtle: {
          light: "#DCE1FF",  // ⚡ Azul grisáceo claro (antes era #4A4D75)
          dark: "#9ca3af",   // Gris medio en modo oscuro
        },
        border: {
          light: "#F4F6FF",  // ⚡ Claro para contrastar mejor en modo claro
          dark: "#f5f5f5",   // Blanco/gris claro en modo oscuro
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
