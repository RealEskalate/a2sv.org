<template>
  <v-app-bar app color="grey lighten-5" elevate-on-scroll class="shadow">
    <v-tabs centered class="ml-n9" color="primary darken-1">
      <v-tab v-for="link in links" :key="link.to" :to="link.to">
        {{ link.title }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          title: 'Team',
          to: '/team',
        },
        {
          title: 'Support Us',
          to: '/support',
        },
        {
          title: 'Events',
          to: '/events',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'News',
          to: '/news',
        },
      ],
    }
  },
}
</script>
<style>
@import 'node_modules/vuetify/dist/vuetify.min.css';
.v-tab {
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
  font-size: 16px;
}
</style>
