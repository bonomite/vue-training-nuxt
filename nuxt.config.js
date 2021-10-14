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
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', type: 'image/png', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
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
    '@nuxtjs/google-analytics',
    '@nuxtjs/svg',
    '@nuxt/image',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faHome'],
      regular: ['faAdjust'],
    },
  },

  googleAnalytics: {
    id: 'UA-134339276-1',
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 360,
      sm: 550,
      md: 768,
      lg: 850,
      xl: 1024,
      xxl: 1200,
      xxxl: 1500,
    },
  },

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
      '~/assets/scss/variables.scss',
      '~/assets/scss/main.scss',
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
