/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'zodiak': ['Zodiak', 'serif'],
        'stardom': ['Stardom', 'sans-serif'],
        'bespoke': ['Bespoke Serif', 'serif']
      }
    },
  },
  darkMode: "class",

  plugins: [ 
    require('@tailwindcss/aspect-ratio'),
  ],
}
