/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto", "Verdana", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fcfcf9',
      'black': '#0e0e09',
      'hpg': {
        100: '#c5c5b4',
        200: '#a7a797',
        300: '#8f8f82',
        400: '#7a7a6e',
        500: '#66665e',
        600: '#53534c',
        700: '#40403c',
        800: '#2e2e2b',
        900: '#1e1e17',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
