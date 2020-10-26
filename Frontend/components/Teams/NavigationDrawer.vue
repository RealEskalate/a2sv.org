<template>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      width="30em"
      style="position: fixed;"
    >
      <v-row class="mt-12 mb-4">
        <v-avatar
          class="ma-0"
          size="160"
          tile
        >
          <v-img src="https://acumen.org/wp-content/uploads/2016/09/AKK-Photo-1-580x580.jpg" />
        </v-avatar>

        <v-col style="margin-left: 2em;">
          <h3 class="nav-name my-2"> CARLYLE Caption</h3>
          <p class="nav-job"> Associate Director, Internal Communications & Engagement</p>
        </v-col>
      </v-row>
      <v-row class="mx-lg-3">
        <p class="details">
          As Associate Director of Internal Communications and Engagement, Carla oversees engagement and
          communications for Acumen’s community of 350+ donors and produces major brand and fundraising
          activations around the world--from Palo Alto to London to Nairobi--to elevate and deepen the impact
          of Acumen’s work tackling poverty. Previously at Acumen, Carla has managed Acumen’s brand across eight
          global offices, co-led the roll out of Acumen’s rebranding by agency Johnson Banks, and driven grant writing and reporting.
          Carla joined Acumen in 2012 from Vancouver, Canada where she spent almost four years as an Associate with Renewal Funds to launch Renewal2, a CAD $35 million venture capital fund investing in organic food and sustainable consumer goods companies. Carla holds a bachelor of business administration degree with a double major in communications from Simon Fraser University,
          as well as an honors certificate in sustainability from the Segal Graduate School of Business.
        </p>
      </v-row>
    </v-navigation-drawer>
</template>

<script>
export default {
props :['drawer'],
data() {
    return {

    }
  },
}
</script>
<style >
.nav-name{
  font-size: large;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: 100;
  margin: 0px !important;
}
.nav-job{
  font-size: medium;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0px !important;
}
.details{
  /* font-family: caecilial; */
  font-style: italic;
  font-weight: 300;
  width: 170em;
  font-size: medium;
  margin-left: 4em;
}
</style>