// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1373px', // Create a custom width class
      },
      colors: {
        tableyellow: 'rgba(254, 191, 0, 1)',
        subText: 'rgba(51,51,51,1)'
      },
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"]

      },

    },
  },
  plugins: [],
};