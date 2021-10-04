export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'universal',

  loading: {
    color: 'red',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-training-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      lang: 'scss',
      src: '~/assets/scss/main.scss',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fetches.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/comps',
      '~/components/shared',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  axios: {
    // proxy: true
  },

  styleResources: {
    scss: [
      '~/assets/scss/*.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['nypr-design-system-vue'],
  },
  googleFonts: {
    text: 'Learning',
    families: {
      Yaldevi: {
        wght: [500, 700],
      },
      Roboto: {
        ital: [900],
      },
    },
  },
}
