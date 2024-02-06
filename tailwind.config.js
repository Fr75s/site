/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'display': ['Outfit']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'planet': {
        100: '#f2f6ff',
        200: '#dbdfe7',
        300: '#bdc0c7',
        400: '#989ba1',
        500: '#7c7f8e',
        600: '#474954',
        700: '#31333a',
        800: '#26282d',
        850: '#1e2126',
        900: '#16171a',
        950: '#080c19',
      },
      'blue': '#74aaff',
      'deepblue': '#5a8eff',
      'blurple': '#7474ff',
      'purple': '#aa74ff'
    },
  },
  plugins: [],
}

