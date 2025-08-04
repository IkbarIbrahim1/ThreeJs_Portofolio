/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        // Primary dark theme colors (blue-purple)
        primary: {
          DEFAULT: "#0F0F23",
          100: "#1a1a2e",
          200: "#16213e",
          300: "#1e3a8a",
          400: "#3b82f6",
          500: "#6366f1",
        },
        secondary: {
          DEFAULT: "#4c1d95",
          100: "#581c87",
          200: "#6b21a8",
          300: "#7c3aed",
          400: "#8b5cf6",
          500: "#a855f7",
        },
        accent: {
          DEFAULT: "#f97316",
          100: "#fb923c",
          200: "#fdba74",
          300: "#fed7aa",
          coral: "#ff6b6b",
          warm: "#ff8e53",
        },
        neutral: {
          DEFAULT: "#374151",
          100: "#1f2937",
          200: "#374151",
          300: "#4b5563",
          400: "#6b7280",
          500: "#9ca3af",
        },
        // Keep some legacy colors for compatibility
        black: {
          DEFAULT: "#000",
          100: "#1a1a2e",
          200: "#16213e",
          300: "#1e3a8a",
          500: "#3b82f6",
          600: "#1f2937",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#f8fafc",
          700: "#e2e8f0",
          600: "#cbd5e1",
          500: "#94a3b8",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
