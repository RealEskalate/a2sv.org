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
    "~plugins/vue-carousel-3d.client"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "nuxt-compress"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/device"
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
    baseURL: "https://a2sv-org-api-wtupbmwpnq-uc.a.run.app/"
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify,

  purgeCSS,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },
  loading: {
    color: "#00aeef"
  },
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false
  }
};
