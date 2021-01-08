import Vue from "vue";
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "eskalate" },
  components: {
    CldImage,
    CldTransformation
  }
});