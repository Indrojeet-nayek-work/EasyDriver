/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf8f5",
          100: "#f4f0ea",
          200: "#e8ddd0",
          300: "#d8c7b3",
          400: "#c4ab91",
          500: "#b08968",
          600: "#9d7956",
          700: "#846148",
          800: "#6d503f",
          900: "#594238",
        },
        neutral: {
          cream: "#fef9f3",
          beige: "#f7f1e8",
          "warm-white": "#fdfcfa",
          "soft-grey": "#f5f4f2",
          "muted-grey": "#e8e6e3",
          "warm-grey": "#d1ccc4",
          "medium-grey": "#a8a199",
          charcoal: "#4a453e",
          "deep-brown": "#3c362f",
        },
        accent: {
          "warm-brown": "#8b7355",
          "light-brown": "#a68b5b",
          "muted-brown": "#6b5b47",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.3" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        gentle:
          "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        warm: "0 4px 20px -2px rgba(139, 115, 85, 0.15)",
      },
    },
  },
  plugins: [],
};
