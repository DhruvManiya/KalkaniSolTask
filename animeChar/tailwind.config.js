/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: '#f58166',
        Teal: '#16a085',
        Green: '#2ecc71',
        Blue: '#3498db',
        Yellow: '#fcd949',
      }
    },
  },
  plugins: [],
}