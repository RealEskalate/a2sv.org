<template>
  <v-app-bar app color="white" class="shadow" flat>
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
          icon: 'mdi-chart-bubble',
          title: 'Support Us',
          to: '/support',
        },
      ],
    }
  },
}
</script>
