/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./src/App.js","./src/forms/RegForm.js", "./src/forms/LoginForm.js","./src/forms/Profile.js"],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [ require('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio'),
],
}

