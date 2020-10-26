<template>
<div>
<hero />
<navigation-drawer :drawer="drawer" />
<v-container class="grey lighten-5">
    <h1 class="text-center my-3">
          THE TEAM
    </h1>
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
</div>

</template>

<script>
import item from '~/components/Teams/item'
import NavigationDrawer from '~/components/Teams/NavigationDrawer'
import Hero from '~/components/Teams/Hero'
export default {
  data () {
    return {
      drawer : null,
    }
  }
}
</script>

<style>

</style>
