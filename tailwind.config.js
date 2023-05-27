module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#64ffda',
      primaryLight: 'rgba(100, 255, 218, 0.07)',
      secondary: '#0a192f',
      secondaryLight: '#172a45',
      secondaryLighter: '#020c1b',
      secondaryLightest: '#ccd6f6',
      tertiary: '#8892b0',
      tertiaryLight: '#a8b2d1',
      tertiaryLighter: '#ccd6f6',
    },
    blend: 'screen',
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
