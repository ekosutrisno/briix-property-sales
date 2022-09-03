const tailwind = require('tailwindcss');

module.exports = {
  siteName: 'Briix Properties Sales',
  siteDescription: 'Briix Properties Sales Homepage Website',
  titleTemplate: '%s - Briix',
  plugins: [],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
}