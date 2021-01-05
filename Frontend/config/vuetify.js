import colors from "vuetify/es5/util/colors";

export default {
  treeShake: true,
    defaultAssets: undefined,
    customVariables: ["~/assets/variables.scss"],
    theme: {
    dark: false,
      themes: {
      light: {
        primary: "#0a61f7",
          accent: "#00aeef",
          secondary: colors.amber.lighten3,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
      },
      dark: {
        primary: "#334aC0",
          accent: "#00aeef",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
      }
    }
  }
};
