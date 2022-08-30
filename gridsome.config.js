const tailwind = require('tailwindcss');

module.exports = {
  siteName: 'Briix Properties Sales',
  siteDescription: 'Briix Properties Sales Homepage Website',
  titleTemplate: '%s - Briix',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
}