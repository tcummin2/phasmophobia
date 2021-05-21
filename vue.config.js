module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Time Since The Boys Played Phasmophobia'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/phasmophobia/'
  : '/'
}
