module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue', 'node_modules/vue-tailwind/dist/*.js'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#353535',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
