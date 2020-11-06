<template>
  <div>
    <Banner />
    <navigation-drawer
      v-if="drawer"
      :drawer="drawer"
      :user-id="userId"
      @toggle-drawer="drawer = !drawer"
    />
    <v-container class="grey lighten-5">
      <h1 class="text-center my-5" style="color: #2b2a35">
        Core Team
      </h1>
      <v-row no-gutters>
        <v-col
          v-for="(member, i) in getTeamMembers"
          :key="i"
          cols="12"
          sm="4"
          class="my-4"
          @click="userId = i"
          @click.stop="drawer = !drawer"
        >
          <v-card class="mx-auto" max-width="344" tile flat>
            <div class="d-flex profile">
              <v-avatar class="ma-0" size="150" tile>
                <v-img :src="baseUrl + '/img' + member.img" />
              </v-avatar>

              <v-card-text class="headline">
                <div class="mb-1">
                  <p class="country">
                    Ethiopia
                  </p>
                </div>
                <div>
                  <p class="name">
                    {{ member.name }}
                  </p>
                </div>

                <div>
                  <p class="job">
                    {{ member.career }}
                  </p>
                </div>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Banner from "@/components/Core/Banner";

export default {
  components: {
    Banner,
    NavigationDrawer: () => import("~/components/Teams/NavigationDrawer")
  },
  data() {
    return {
      drawer: null,
      userId: null,
      baseUrl: process.env.baseUrl
    };
  },
  computed: {
    ...mapGetters("team", ["getTeamMembers"])
  },
  created() {
    this.$store.dispatch("team/fetchMembers");
  }
};
</script>

<style>
.headline div {
  margin-bottom: -0.3em;
}
.country {
  text-transform: uppercase;
  font-size: small;
  font-weight: 300;
  margin: 0 !important;
}
.name {
  font-size: large;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0 !important;
}
.job {
  font-family: unset;
  font-size: medium;
  font-weight: lighter;
  margin: 0 !important;
}
.v-avatar {
  border-radius: 0;
}
.profile:hover {
  cursor: pointer;
  background-color: rgb(49, 151, 235);
  color: white;
}
</style>
