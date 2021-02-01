<template>
  <div>
    <v-app-bar
      app
      height="75"
      elevate-on-scroll
      class="px-md-8 shadow"
    >
      <v-app-bar-nav-icon
        v-if="$device.isMobile"
        @click="drawer = !drawer"
      >
        <v-icon color="primary" large>
          {{ mdiMenu }}
        </v-icon>
      </v-app-bar-nav-icon>
      <div class="mx-5" style="min-width: 100px">
        <v-img
          width="11vw"
          max-width="130px"
          min-width="80px"
          alt="A2SV LOGO"
          class="logo"
          src="/logos/logo-blue.png"
        />
      </div>
      <v-tabs
        v-if="$device.isDesktopOrTablet"
        centered
        optional
        color="primary"
      >
        <v-tab v-for="link in links" :key="link.to" :to="link.to" class="blue-black">
          {{ link.title }}
        </v-tab>
      </v-tabs>

      <v-spacer />

      <v-btn v-if="!onSupportUs" tile color="primary" class="pa-5" to="/support">
        <v-icon v-if="$device.isMobile">
          {{ mdiGift }}
        </v-icon>
        <span v-else>
          Support Us
        </span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$device.isMobile"
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
  mdiInformation,
  mdiGift
} from "@mdi/js";

export default {
  data() {
    return {
      drawer: false,
      mdiMenu,
      mdiGift,
      onSupportUs: false,
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
          icon: mdiInformation,
          title: "About Us",
          to: "/about"
        }
      ]
    };
  },
  watch: {
    $route(to) {
      this.onSupportUs = to.path === "/support";
    }
  },
  created() {
    this.onSupportUs = this.$route.path === "/support";
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
