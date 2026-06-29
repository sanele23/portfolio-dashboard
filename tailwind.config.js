/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora"', "system-ui", "sans-serif"],
        headline: ['"Sora"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', "ui-monospace", "monospace"],
      },
      colors: {
        background: "#0F0F0F",
        surface: "#151515",
        "surface-low": "#1A1A1A",
        "surface-high": "#222222",
        outline: "rgba(255, 255, 255, 0.2)",
        "outline-variant": "rgba(255, 255, 255, 0.1)",
        primary: "#FFFFFF",
        "on-primary": "#000000",
        "on-surface": "#F0F0F0",
        "on-surface-variant": "#A0A0A0",
        google: {
          blue: "#FFFFFF",
          "blue-hover": "#EDEDED",
          red: "#FF8888",
          yellow: "#E0E0E0",
          green: "#BACAC3",
          grey: {
            50: "#F0F0F0",
            100: "#DADADA",
            200: "#BDBDBD",
            300: "#A0A0A0",
            400: "#8B8B8B",
            500: "#6B6B6B",
            600: "#4C4C4C",
            700: "#2B2B2B",
            800: "#1A1A1A",
            900: "#0F0F0F",
          },
        },
        brand: {
          primary: "#FFFFFF",
          "primary-hover": "#EDEDED",
          secondary: "#BACAC3",
        },
      },
      boxShadow: {
        google: "0 0 0 1px rgba(255,255,255,0.08)",
        "google-hover": "0 0 0 1px rgba(255,255,255,0.22)",
        "google-modal": "0 12px 48px rgba(0,0,0,0.45)",
        ambient: "0 18px 50px rgba(0,0,0,0.36)",
        "ambient-dark": "0 22px 60px rgba(0,0,0,0.48)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grid-drift": "gridDrift 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridDrift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
