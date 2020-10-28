<template v-slot:activator="{ on, attrs }">
  <v-parallax dark class="hero mb-3" :src="imageSrc">
    <v-row align="center" justify="end">
      <v-col class="mr-8" cols="4">
        <h3 class="text-uppercase font-weight-thin">{{ titleOne }}</h3>
        <v-divider></v-divider>
        <br />
        <h1 class="text-uppercase">{{ titleTwo }}</h1>
        <h2 class="text-uppercase font-weight-thin upper-case">
          {{ description }}
        </h2>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: 'HeroV2',
  props: {
    imageSrc: String,
    titleOne: String,
    titleTwo: String,
    description: String,
  },
}
</script>
<style scoped>
.hero {
  margin: -1em;
  /* https://i.ibb.co/y82WVwJ/team-hero.jpg
    https://i.ibb.co/KsQGgwh/team-hero-2.jpg */
}
.theme--light.v-divider {
  border-color: whitesmoke !important;
}
</style>
