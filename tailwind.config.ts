import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f3",
          100: "#d6ebe0",
          200: "#a9d5bd",
          300: "#74ba93",
          400: "#3f9b6a",
          500: "#1d8050",
          600: "#136840",
          700: "#0e5234",
          800: "#0b3f29",
          900: "#082e1f",
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706",
        },
        ink: {
          DEFAULT: "#0b1d17",
          soft: "#2a3a33",
          mute: "#5b6b65",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "splash-logo": "splashLogo 1.2s ease-out forwards",
        "splash-tagline": "splashTagline 0.8s ease-out 0.6s forwards",
        "scan-line": "scanLine 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        splashLogo: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "60%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        splashTagline: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { top: "0%" },
          "50%": { top: "100%" },
          "100%": { top: "0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
