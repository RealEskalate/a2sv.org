<template v-slot:activator="{ on, attrs }">
  <div id="inspire">
    <v-parallax src="/" class="parallax" height="450" jumbotron>
      <v-container>
        <v-row>
          <v-col md="4" xl="5">
            <h1
              class="motto text-center"
              style="
                font-family: Lato, sans-serif;
                color: white !important;
                font-size: 58px !important;
                line-height: 68px !important;
              "
            >
              A passionate team
            </h1>
            <p class="text-center mt-5" style="font-size: 20px">
              Diversity is at the core of our Vision, Mission, and Values.
            </p>
          </v-col>
          <v-col
            md="8"
            xl="6"
            class="pr-xl-12"
            style="bottom: 0; position: absolute; right: 0; padding-bottom: 0"
          >
            <v-img src="/team.webp" style="min-height: 10rem" />
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </div>
</template>
<script>
export default {
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
