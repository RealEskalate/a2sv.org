<template>
  <v-app id="inspire">
    <app-bar />
    <v-main class="grey lighten-5">
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from "~/components/core/AppBar";
import AppFooter from "~/components/core/AppFooter";
export default {
  components: { AppBar, AppFooter }
};
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
.v-pagination__item,
.v-pagination__navigation {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1) !important;
}
.blue-black {
  color: #1C202B!important;
}
.blackish {
  color: #545465;
  font-size: 18px;
  line-height: 32px;
  font-family: 'Nunito', sans-serif;
}
.button-fill-bottom {
  color: #2b2a35;
  box-shadow: inset 0 0 0 #2b2a35 !important;
  transition: ease-in 0.5s !important;
}
.button-fill-bottom:hover {
  color: white!important;
  box-shadow: inset 0 -80px 0 #2b2a35 !important;
}

.display-1, .display-2 {
  color: #2b2a35!important;
}
</style>
