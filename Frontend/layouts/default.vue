<template>
  <v-app id="inspire">
    <app-bar />
    <v-main class="grey lighten-5">
      <nuxt />
      <scroll-to-top />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from "~/components/core/AppBar";
import AppFooter from "~/components/core/AppFooter";
import ScrollToTop from "~/components/core/ScrollToTop";
export default {
  components: { ScrollToTop, AppBar, AppFooter }
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

.animate-pop-in {
  animation: pop-in .6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #5668c6;
}
::-webkit-scrollbar-thumb:hover {
  background: #5668c6aa;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes fade-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: translateY(-4rem) scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: none;
  }
  50% {
    opacity: .8;
    transform: scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

.text-body {
  font-size: 21px;
  font-weight: 400;
  line-height: 37.8px;
  color: #545465;
  text-align: left;
}
</style>
