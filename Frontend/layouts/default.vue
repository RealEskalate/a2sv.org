<template>
  <v-app id="inspire">
    <app-bar />
    <v-main class="grey lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from '~/components/Core/AppBar'
import AppFooter from '~/components/Core/AppFooter'
export default {
  components: { AppBar, AppFooter },
}
</script>

<style>
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1) !important;
}

.shadow {
  box-shadow: 0 0.35rem 0.75rem rgba(0, 0, 0, 0.07) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-none {
  box-shadow: none !important;
}
</style>
