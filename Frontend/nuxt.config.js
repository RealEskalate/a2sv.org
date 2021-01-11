import head from "./config/head";
import vuetify from "./config/vuetify";
import purgeCSS from "./plugins/purge-css";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/cloudinary",
    { src: "~plugins/vue-carousel-3d", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "nuxt-compress",
    "nuxt-purgecss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify,

  purgeCSS,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    analyze: true
  },
  loading: {
    color: "#00aeef"
  }
};
