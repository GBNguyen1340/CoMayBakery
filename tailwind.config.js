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
          50: "#fff4f7",
          100: "#ffe3ec",
          200: "#ffc7da",
          300: "#ff99b9",
          400: "#ff5a8a",
          500: "#ff2a5f",
          600: "#fc0630",
          700: "#dc001c",
          800: "#b50017",
          900: "#960517",
          950: "#5d0008",
        },
      },
    },
  },
  plugins: [],
};
