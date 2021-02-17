<template v-slot:activator="{ on, attrs }">
  <div class="blue-bg" :class="{'banner-sm': $vuetify.breakpoint.smAndDown, 'banner-lg': $vuetify.breakpoint.mdAndUp}">
    <v-container>
      <v-row>
        <v-col class="col-lg-6">
          <h1
            :class="{'small-text': $vuetify.breakpoint.smAndDown, 'main-text': $vuetify.breakpoint.mdAndUp}"
            class="text-center header-title animate-pop-in"
          >
            {{ title }}
          </h1>
          <p
            :class="{'small-text-subt': $vuetify.breakpoint.smAndDown, 'header-subtitle':$vuetify.breakpoint.mdAndUp}"
            class="col-md-9 mx-auto text-center  blue-black animate-pop-in"
          >
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
.banner-lg{
  padding: 4rem 0 8rem 0;
}
.banner-sm{
  padding: 4rem 0 4rem 0;
  }
.main-text {
  font-weight: 800;
  font-size: 68px !important;
  line-height: 72px !important;
  margin: 9% 0 2% 0;
  color: #0a61f7!important;
}
.small-text {
  margin: 9% 0 2% 0;
  color: #0a61f7!important;
}
.small-text-subt{
  font-size: 1.22rem;
  animation-delay: 1s;
  margin-top: 1em;
}

.header-title {
  animation-delay: .8s;
}

.header-subtitle {
  animation-delay: 1s;
  font-size: 25px;
  margin-top: 1.2em;
}
</style>
