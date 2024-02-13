/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title': ['IBM Plex Mono'],
        'pargaph': ['Roboto']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
          'cardShadow': '-4px -4px 0px 0px rgba(134, 241, 226, 1)',
      },
    },
  },
  plugins: [],
}