import createMeta from "./service/meta"

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FRONTEND CONFERENCE 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createMeta(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Limelight' },
      { rel: 'stylesheet',  href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin:'anonymous' }
    ],
  },
  css:[
    "~/assets/scss/app.scss"
  ],
  generate: {
    fallback: true,
    routes: [
      '/posts/yumemi',
      '/posts/typesquare',
      '/posts/impath',
      '/posts/after_party',
      '/posts/unconference',
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.yml$/,
        use: [
          {
            loader: require.resolve('json-loader')
          },
          {
            loader: require.resolve('yaml-loader')
          }
        ],
      })
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

