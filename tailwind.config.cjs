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
      'white': '#fafafa',
      'realwhite': '#ffffff',
      'black': '#070705',
      'red': {
        100: '#ff0000',
        600: 'rgb(220 38 38)',
        700: 'rgb(185 28 28)',
      },
      'hpg': {
        100: '#40403c',
        200: '#3a3a36',
        300: '#33332f',
        400: '#2d2d29',
        500: '#272722',
        600: '#1b1b16',
        700: '#161612',
        800: '#12120d',
        900: '#0e0e09',
        1000: '#0c0c08'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
