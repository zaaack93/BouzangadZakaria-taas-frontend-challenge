module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://github.com',
        changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
