module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  head: {
    noscript: [
      { innerHTML: 'You need javascript to run!' }
    ],
    title: 'Task Cards',
    base: { target: '_blank', href: '/' },
    meta: [
      { charset: 'utf-8' },

      { hid: 'og:title', property: 'og:title', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },

      { httpEquiv: 'Expires', content: '0' },
      { httpEquiv: 'Pragma', content: 'no-cache' },
      { httpEquiv: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/bootstrap.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[chunkhash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js'
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|scss|css)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
