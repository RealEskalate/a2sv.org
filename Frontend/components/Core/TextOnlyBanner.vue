<template v-slot:activator="{ on, attrs }">
  <v-parallax src="/" class="main-gradient" height="450" jumbotron>
    <v-container>
      <h1
        class="motto text-center white--text"
        style="
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
        style="bottom: 0; right: 0; position: absolute; max-width: 50vw!important; z-index: -1;"
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
