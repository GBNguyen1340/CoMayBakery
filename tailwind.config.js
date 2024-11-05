/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "wisp-pink": {
          50: "#fef2f4",
          100: "#fde6e9",
          200: "#fbd0d9",
          300: "#f7aab9",
          400: "#f27a93",
          500: "#e63f66",
          600: "#d42a5b",
          700: "#b21e4b",
          800: "#951c45",
          900: "#801b40",
          950: "#470a1f",
        },
      },
    },
  },
  plugins: [],
};
