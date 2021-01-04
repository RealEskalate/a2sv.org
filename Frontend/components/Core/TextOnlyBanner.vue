<template v-slot:activator="{ on, attrs }">
  <v-parallax src="/" class="blue-bg" height="450" jumbotron>
    <v-container>
      <h1
        class="display-2 text-center blue-black text-uppercase"
        style="
        font-weight: 800;
          font-size: 65px !important;
          line-height: 72px !important;
        "
      >
        {{ title }}
      </h1>
      <p class="col-md-8 mx-auto text-center mt-6 blue-black" style="font-size: 25px;">
        {{ description }}
      </p>
      <slot />
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

<style>
.blue-bg {
  background: #e8f5fd;
}
</style>
