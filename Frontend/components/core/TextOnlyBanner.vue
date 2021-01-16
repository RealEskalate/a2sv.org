<template v-slot:activator="{ on, attrs }">
  <div class="blue-bg" style="height: 70vh!important;">
    <v-container>
      <h1 class="display-2 text-center main-text">
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
  </div>
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

<style scoped>
.blue-bg {
  background: #e8f5fd;
}
.main-text {
  font-weight: 800;
  font-size: 68px !important;
  line-height: 72px !important;
  margin: 9% 0 2% 0;
  color: #0a61f7!important;
}
</style>
