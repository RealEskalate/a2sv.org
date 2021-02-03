<template v-slot:activator="{ on, attrs }">
  <div class="blue-bg " style="padding: 4rem 0 8rem 0">
    <v-container>
      <v-row>
        <v-col class="col-lg-6">
          <h1 class="display-2 text-center main-text header-title animate-pop-in">
            {{ title }}
          </h1>
          <p class="col-md-9 mx-auto text-center mt-6 blue-black header-subtitle animate-pop-in" style="font-size: 25px;">
            {{ description }}
          </p>
          <slot />
        </v-col>
        <v-col class="col-md-6 hidden-md-and-down">
          <v-img

            :src="('/illustrations/' + img)"
          />
        </v-col>
      </v-row>
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

.header-title {
  animation-delay: .8s;
}

.header-subtitle {
  animation-delay: 1s;
}
</style>
