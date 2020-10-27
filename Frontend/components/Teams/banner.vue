<template v-slot:activator="{ on, attrs }">

  <v-parallax
    dark
    class="hero mb-3"

    src="https://i.ibb.co/xMHdzk6/team-hero-3.jpg"
  >

    <v-row
      align="center"
      justify="end"
    >
      <v-col
        class="mr-8"
        cols="4"
      >
        <h3 class="text-uppercase font-weight-thin">
          Meet Our Team
        </h3>
        <v-divider></v-divider>
        <br>
        <h1 class="text-uppercase ">
            Talented Students
        </h1>
        <h2 class="text-uppercase font-weight-thin upper-case">
          Working together for the common good
        </h2>


      </v-col>

    </v-row>
  </v-parallax>
</template>
<style>
.hero {
  margin: -1em;
  /* https://i.ibb.co/y82WVwJ/team-hero.jpg
    https://i.ibb.co/KsQGgwh/team-hero-2.jpg */
}
.theme--light.v-divider {
    border-color:whitesmoke !important;
}
</style>