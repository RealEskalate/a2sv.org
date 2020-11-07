<template>
  <v-navigation-drawer
    v-model="navDrawer"
    absolute
    right
    temporary
    width="30em"
    style="position: fixed; max-width: 80vw!important;"
  >
    <v-row class="mt-12 mb-4">
      <v-avatar class="ma-0" size="160" tile>
        <v-img
          :src="baseUrl + '/img' + member.img"
        />
      </v-avatar>

      <v-col style="margin-left: 2em">
        <h1 class="nav-name my-2">
          {{ member.name }}
        </h1>
        <p class="blackish">
          {{ member.team }}
        </p>
        <p class="blackish">
          {{ member.career }}
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-lg-3">
      <p class="details mx-6">
        {{ member.description }}
      </p>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    "drawer": Boolean,
    "userId": {
      type: Number, default: 0
    }
  },
  data() {
    return {
      navDrawer: this.drawer,
      baseUrl: process.env.baseUrl
    };
  },
  computed: {
    ...mapGetters("team", ["getTeamMemberDetails"]),
    member() {
      return this.getTeamMemberDetails(this.userId);
    }
  },
  watch: {
    drawer (val) {
      this.navDrawer = val; // not to change props value directly.
    },
    navDrawer(val) {
      if (val === false)
        this.$emit("toggle-drawer");
    }
  }
};
</script>
<style>
.nav-name {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 100;
  margin: 0 !important;
}
.nav-job {
  font-size: medium;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0 !important;
}
.details {
  font-weight: 300;
  width: 170em;
  font-size: 18px;
}
</style>
