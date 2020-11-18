<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      class="px-md-8 shadow-sm"
      :class="{ 'transparent': $store.getters.getColor === 'transparent', 'main-gradient': $store.getters.getColor === 'colored' }"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      >
        <v-icon :color="isColored ? 'white' : 'primary'" large>
          {{ mdiMenu }}
        </v-icon>
      </v-app-bar-nav-icon>
      <div style="max-width: 110px; width: 10vw; min-width: 50px" class="mx-5">
        <v-img
          alt="A2SV LOGO"
          class="logo"
          :src="getLogo"
        />
      </div>
      <v-tabs
        v-if="$vuetify.breakpoint.mdAndUp"
        centered
        optional
        :color="isColored ? 'white' : 'primary'"
      >
        <v-tab v-for="link in links" :key="link.to" :class="{ 'white--text': isColored }" :to="link.to">
          {{ link.title }}
        </v-tab>
      </v-tabs>

      <v-spacer />

      <v-btn :color="isColored ? 'white' : 'primary'" depressed outlined to="/support">
        Support Us
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
    >
      <v-list rounded>
        <v-list-item v-for="item in links" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiMenu,
  mdiHome,
  mdiGroup,
  mdiCalendar,
  mdiInformation,
  mdiEmail
} from "@mdi/js";

export default {
  data() {
    return {
      drawer: false,
      mdiMenu,
      links: [
        {
          icon: mdiHome,
          title: "Home",
          to: "/"
        },
        {
          icon: mdiGroup,
          title: "Team",
          to: "/team"
        },
        {
          icon: mdiCalendar,
          title: "Events",
          to: "/events"
        },
        {
          icon: mdiInformation,
          title: "About Us",
          to: "/about"
        },
        {
          icon: mdiEmail,
          title: "Contact",
          to: "/contact"
        }
      ]
    };
  },
  computed: {
    isColored() {
      return ["colored", "transparent"].includes(this.$store.getters.getColor);
    },
    getLogo() {
      return this.isColored ? "./logos/logo-white.png" : "./logos/logo-blue.png";
    }
  },
  created() {
    this.$store.dispatch("setActiveLink", "transparent");
  }
};
</script>
<style scoped>
.v-tabs .v-tab {
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
  font-size: 16px;
}
</style>
