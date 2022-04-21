import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Online Exhibition',
    title: 'exhibition-nuxt',
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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      },
    ],
  },

  // loading: '~/components/LoadingBar.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Customize the progress-bar color
  loading: {
    color: 'DodgerBlue',
    height: '5px',
    continuous: true,
    duration: 3000,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAOYG98M7oDw0W2lgdhRo8X1jzl7olk5Rw',
          authDomain: 'exhibition-thaihealth.firebaseapp.com',
          projectId: 'exhibition-thaihealth',
          storageBucket: 'exhibition-thaihealth.appspot.com',
          messagingSenderId: '915621515107',
          appId: '1:915621515107:web:48fcb52cd40ec115b90d56',
          measurementId: 'G-JLR1M08D1X',
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true,
        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true,
    options: {
      customProperties: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
}
