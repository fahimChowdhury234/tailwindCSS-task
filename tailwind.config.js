/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand': '#5259b3',
        'light-gray': '#f5f6fa',
        'gray': '#6d7174',
        'dark-gray': '#3b444a',
        'dark': '#30363d'
      }
    },
  },
  plugins: [],
}