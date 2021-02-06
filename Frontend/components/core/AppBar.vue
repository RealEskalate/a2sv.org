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

      <v-btn v-if="!onSupportUs" depressed color="primary" class="pa-5 text-capitalize" to="/support">
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
      <div class="mx-12 my-6">
        <v-img
          width="100%"
          alt="A2SV LOGO"
          class="logo"
          src="/logos/logo-blue.png"
        />
      </div>
      <v-list rounded>
        <v-list-item v-for="item in links" :key="item.title" color="primary" link :to="item.to">
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
  mdiAccountGroup,
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
          icon: mdiAccountGroup,
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

<style>
.v-tabs-slider-wrapper {
  height: 6px !important;
  border-top-left-radius: 5px !important;
  border-top-right-radius: 5px !important;
  overflow: hidden;
}
</style>
