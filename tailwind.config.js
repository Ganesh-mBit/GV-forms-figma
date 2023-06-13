/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        secondary: '#7A7A7A',
        error: '#D86161',
        card_bg: '#FFFFFF',
        card_border: '#E6E6E6',
        font_white: '#FFFFFF',
        font_dark: '#212121',
        font_light: '#FAFAFA',
      }
    },
  },
  plugins: [],
}

