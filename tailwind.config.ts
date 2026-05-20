import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        smoke: "#111318",
        volt: "#E7FF3C",
        heat: "#FF4D1D"
      },
      boxShadow: {
        glow: "0 0 80px rgba(231,255,60,.18)"
      }
    }
  },
  plugins: []
};

export default config;
