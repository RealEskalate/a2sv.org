import {MODES} from "nuxt-purgecss/lib/utils";

export default {
  mode: MODES.webpack,
  whitelist: [
    "v-application",
    "v-application--wrap",
    "container",
    "row",
    "spacer",
    "col",
    "[type=button]",
    "v-application p",
  ],
  whitelistPatterns: [
    /^v-((?!application).)*$/,
    /^v-((?!form).)*$/,
    /^v-((?!input).)*$/,
    /^v-((?!text).)*$/,
    /^v-((?!textarea).)*$/,
    /^theme--*/,
    /.*-transition/,
    /^v-.*/,
    /^col-.*/
  ],
  whitelistPatternsChildren: [
    /^v-((?!application).)*$/,
    /^theme--*/,
    /^post-content/,
    /^v-input/,
    /^swiper-.*/,
    /^pswp.*/,
    /^v-text-field.*/,
    /^v-progress-linear/
  ]
};
