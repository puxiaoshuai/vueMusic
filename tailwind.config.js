module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue'
  ],
  content: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
