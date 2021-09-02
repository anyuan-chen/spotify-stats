module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Helvetica", "Arial"],
        body: ["Roboto", "Open Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
