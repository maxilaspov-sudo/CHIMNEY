import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#1E3A5F",
          600: "#172E4D",
          700: "#0F2238",
          800: "#091929",
          900: "#040D17",
        },
        orange: {
          400: "#FB923C",
          500: "#F97316",
          600: "#EA6C0A",
          700: "#C2550B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
