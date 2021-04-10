module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://github.com',
        changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
      },
      '^/api1': {
        target: 'https://api.github.com',
        changeOrigin: true,
            pathRewrite: {
                '^/api1': '/'
            }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
