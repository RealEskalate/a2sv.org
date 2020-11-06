<template v-slot:activator="{ on, attrs }">
  <v-parallax src="/" class="parallax" height="450" jumbotron>
    <v-container>
      <h1
        class="motto text-center"
        style="
          font-family: Lato, sans-serif;
          color: white !important;
          font-size: 72px !important;
          line-height: 68px !important;
        "
      >
        {{ title }}
      </h1>
      <p class="text-center mt-5" style="font-size: 20px">
        {{ description }}
      </p>
      <v-img
        :width="imgWidth"
        :src="img"
        style="bottom: 0; right: 0; position: absolute"
      />
    </v-container>
  </v-parallax>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-default-prop
  props: { "title": String, "description": String, "img": String, "imgWidth": String },
  mounted() {
    this.$store.dispatch("setActiveLink", "colored");
  }
};
</script>
<style>
/*@import 'node_modules/vuetify/dist/vuetify.min.css';*/
.parallax {
  background: rgb(73, 102, 247);
  background: -moz-linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 64%
  );
  background: -webkit-linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 64%
  );
  background: linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 64%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4966f7",endColorstr="#8253ff",GradientType=1);
}
</style>
