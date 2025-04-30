// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Suranna', 'serif'],
        body: ['Palanquin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
