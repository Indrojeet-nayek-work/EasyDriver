/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        fun: {
          green: "#CDE9D6",
          blue: "#D2E4FD",
          yellow: "#FFF1CB",
          pink: "#F8D3CF",
          "green-dark": "#A8D4B8",
          "blue-dark": "#A8C8F9",
          "yellow-dark": "#F5E29B",
          "pink-dark": "#F2B8B3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
