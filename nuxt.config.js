module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FRONTEND CONFERENCE 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Webで働く全ての人のために、FRONTEND CONFERENCE 2018 11月24日 大阪グランフロント' },

      { property: 'og:title', content: 'FRONTEND CONFERENCE 2018' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Webで働く全ての人のために、FRONTEND CONFERENCE 2018 11月24日 大阪グランフロント' },
      { property: 'og:url', content: 'https://2018.kfug.jp/' },
      { property: 'og:image', content: 'https://2018.kfug.jp/ogp.jpg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://2018.kfug.jp/' },
      { name: 'twitter:title', content: 'FRONTEND CONFERENCE 2018' },
      { name: 'twitter:description', content: 'Webで働く全ての人のために、FRONTEND CONFERENCE 2018 11月24日 大阪グランフロント' },
      { name: 'twitter:image', content: 'https://2018.kfug.jp/ogp.jpg' }
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

