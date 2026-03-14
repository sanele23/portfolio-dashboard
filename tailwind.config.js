/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        google: {
          blue: "#1A73E8",
          "blue-hover": "#1765CC",
          red: "#EA4335",
          yellow: "#FBBC04",
          green: "#34A853",
          grey: {
            50: "#F8F9FA",
            100: "#F1F3F4",
            200: "#E8EAED",
            300: "#DADCE0",
            400: "#BDC1C6",
            500: "#9AA0A6",
            600: "#80868B",
            700: "#5F6368",
            800: "#3C4043",
            900: "#202124",
          },
        },
      },
      boxShadow: {
        google:
          "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)",
        "google-hover":
          "0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)",
        "google-modal":
          "0 8px 10px 1px rgba(60,64,67,0.15), 0 3px 14px 2px rgba(60,64,67,0.12), 0 5px 5px -3px rgba(60,64,67,0.2)",
      },
    },
  },
  plugins: [],
};
