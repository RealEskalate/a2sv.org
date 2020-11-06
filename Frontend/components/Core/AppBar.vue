<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      :class="{ shadow: true, 'colored-app-bar': isColored }"
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      >
        <v-icon :color="isColored ? '#fff' : '#1f1e1e'">
          {{ mdiMenu }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-img
        :src="getLogo"
        contain
        class="logo"
        style="max-height: 48px; width: 20rem"
        alt="A2SV LOGO"
      />
      <v-tabs
        v-if="$vuetify.breakpoint.mdAndUp"
        centered
        color="primary darken-1"
      >
        <v-tab v-for="link in links" :key="link.to" :to="link.to">
          {{ link.title }}
        </v-tab>
      </v-tabs>
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
  mdiHelp,
  mdiNewspaper,
  mdiCalendar
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
          icon: mdiNewspaper,
          title: "News",
          to: "/news"
        },
        {
          icon: mdiHelp,
          title: "Support Us",
          to: "/support"
        }
      ]
    };
  },
  computed: {
    isColored() {
      return this.$store.getters.getColor === "colored";
    },
    getLogo() {
      return this.isColored ? "./logo-white.svg" : "./logo-blue.svg";
    }
  },
  created() {
    this.$store.dispatch("setActiveLink", "light");
  }
};
</script>
<style>
.v-tabs .v-tab {
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
  font-size: 16px;
}
.colored-app-bar {
  background: rgb(73, 102, 247);
  background: -moz-linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 80%
  );
  background: -webkit-linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 80%
  );
  background: linear-gradient(
    121deg,
    rgba(73, 102, 247, 1) 0%,
    rgba(130, 83, 255, 1) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4966f7",endColorstr="#8253ff",GradientType=1);
}
.colored-app-bar .v-tab {
  color: white !important;
}
.colored-app-bar .v-slide-group__content,
.colored-app-bar .colored.v-tabs-bar__content {
  color: white !important;
}
@media only screen and (min-width: 1400px) and (max-width: 1480px) {
  .logo {
    margin-left: 2.5vw;
  }
}
@media only screen and (min-width: 1480px) {
  .logo {
    margin-left: 5%;
  }
}
</style>
