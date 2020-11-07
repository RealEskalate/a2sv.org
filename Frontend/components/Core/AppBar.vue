<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      class="px-md-8"
      :class="{ 'shadow-sm': true, 'main-gradient': isColored }"
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      >
        <v-icon :color="isColored ? 'white' : 'primary'" large>
          {{ mdiMenu }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-img
        alt="A2SV LOGO"
        class="mx-5 logo"
        contain
        :src="getLogo"
      />
      <v-tabs
        v-if="$vuetify.breakpoint.mdAndUp"
        centered
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
  mdiNewspaper,
  mdiCalendar,
  mdiInformation
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
          icon: mdiInformation,
          title: "About Us",
          to: "/about"
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
          icon: mdiNewspaper,
          title: "News",
          to: "/news"
        }
      ]
    };
  },
  computed: {
    isColored() {
      return this.$store.getters.getColor === "colored";
    },
    getLogo() {
      return this.isColored ? "./logo-white.png" : "./logo-blue.png";
    }
  },
  created() {
    this.$store.dispatch("setActiveLink", "light");
  }
};
</script>
<style scoped>
.v-tabs .v-tab {
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
  font-size: 16px;
}
.logo {
  width: 110px;
}
  @media screen and (max-width: 900px) {
    .logo {
      width: 50px;
    }
  }
</style>
