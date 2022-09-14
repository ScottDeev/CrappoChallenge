/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        'bg-cta': "linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%);",
     },
    },
  },
  plugins: [],
}
