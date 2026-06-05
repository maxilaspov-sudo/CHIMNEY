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
        // navy stays for dark-overlay/secondary use
        navy: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#1E3A5F",
          600: "#172E4D",
          700: "#0F2238",
          800: "#091929",
          900: "#040D17",
        },
        // orange palette remapped to brand red — all existing orange-* classes become red
        orange: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#E05A5A",
          500: "#CC2229",  // primary brand red
          600: "#B01E24",  // hover
          700: "#8B1319",  // dark
          800: "#6B0F14",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
