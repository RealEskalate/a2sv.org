<template>
  <div>
    <banner />
    <navigation-drawer :drawer="drawer" />
    <v-container class="grey lighten-5">
      <h1 class="text-center my-3">THE TEAM</h1>
      <v-row no-gutters>
        <v-col
          v-for="n in 12"
          :key="n"
          cols="12"
          sm="4"
          class="my-4"
          @click.stop="drawer = !drawer"
        >
          <item />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-card flat class="row col-sm-8 px-0 py-0 mx-auto my-8">
      <v-img
        src="/banner.jpg"
        class="col-sm-6"
        style="max-height: 26rem; vertical-align: top"
      />
      <p
        class="col-sm-6 blackish px-5 py-4"
        style="line-height: 30px; font-size: 17px"
      >
        Join US on this Journey reach the level that I want to get to. The
        challenges and the problems we solve every day has showed to pay
        attention to the important parts of any problem and come up with an
        efficient solution. <br />

        <v-btn class="my-6" tile outlined> Work with us </v-btn>
      </p>
    </v-card>
  </div>
</template>

<script>
import item from '~/components/Teams/item'
import NavigationDrawer from '~/components/Teams/NavigationDrawer'
import Banner from '~/components/Teams/Banner'
export default {
  components: { Banner, item, NavigationDrawer },
  data() {
    return {
      drawer: null,
    }
  },
}
</script>

<style></style>
