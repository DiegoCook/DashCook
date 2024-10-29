# Iniciar proyecto con Nuxt 2

```terminal
-> yarn create nuxt-app tornerias-argentinas-web
-> cd tornerias-argentinas-web
-> code .
```

La configuración inicial de `nuxt.config.js`

```js
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Admin',
    title: 'Hielo&Aventura - Admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    MODE: process.env.MODE,
    HYA_URL: (process.env.MODE === 'development') ? process.env.HYA_URL_DEV : process.env.HYA_URL_PROD,
    BASE_URL: (process.env.MODE === 'development') ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/vars.scss',
    '~assets/scss/mixins.scss',
    '~assets/scss/app.scss'
  ],
  styleResources: {
    scss: [
      'assets/scss/vars.scss',
      'assets/scss/mixins.scss',
      'assets/scss/app.scss'
    ]
  },

  loadingIndicator: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuetify' },
    { src: '~/plugins/vuelidate' },
    { src: '~/plugins/filters.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/plugins/vuetify.js',
    treeShake: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
```

El plugin de `Vuetify`

```js
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#3686C3',
        secondary: '#0CB4B5',
        tertiary: '#E8B455',
        cancel: '#FF7B43',
        error: '#E85555',
        white: '#FFFFFF',
        blacktext: '#2A2A2A',
        greytextdark: '#9d9d9d',
        greytext: '#CCCCCC',
        bodycolor: '#F7F7F7',
        bgsearch: '#F5F5F7',
        accent: '#82B1FF',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    values: {}
  }
})
```

Se instala `Vuelidate`:

```terminal
-> yarn add vuelidate
```

El plugin de `Vuelidate`

```js
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
```

Se instala `style-resources`

```terminal
-> yarn add -D @nuxtjs/style-resources
```

Agregar al `buildModules` de `nuxt-config.js`.

```js
buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],
```

Agregar los archivos a consultar en el `nuxt-config`

```js
css: [
    '~assets/scss/vars.scss',
    '~assets/scss/mixins.scss',
    '~assets/scss/app.scss'
  ],
styleResources: {
    scss: [
      'assets/scss/vars.scss',
      'assets/scss/mixins.scss',
      'assets/scss/app.scss'
    ]
  },
```

Se instala `sass` y `sass-loader`:

```terminal
-> yarn add --dev sass sass-loader@10
```

Se instala `eslint-plugin-sass`:

```terminal
yarn add --dev eslint-plugin-sass
```
