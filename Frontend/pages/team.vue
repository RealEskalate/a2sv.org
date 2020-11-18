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
      <v-row no-gutters>
        <v-col
          class="d-flex pa-5"
          cols="12"
          sm="4"
        >
          <v-select
            :items="countries"
            label="Location"
            solo
          />
        </v-col>

        <v-col
          class="d-flex pa-5"
          cols="12"
          sm="4"
        >
          <v-select
            :items="titles"
            label="Title"
            solo
          />
        </v-col>

        <v-col
          class="d-flex pa-5"
          cols="12"
          sm="4"
        >
          <v-text-field
            label="Search"
            solo
            append-icon="mdi-map-marker"
          />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col
          v-for="(member, i) in getTeamMembers"
          :key="i"
          cols="12"
          sm="4"
          class="pa-5"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              tile
              class="shadow-sm overflow-hidden"
              @click="userId = i"
              @click.stop="drawer = !drawer"
            >
              <v-list-item class="px-0" :class="{'primary' : hover}">
                <v-list-item-avatar class="ma-0" size="120" tile>
                  <v-img :src="baseUrl + '/img' + member.img" height="100%" />
                </v-list-item-avatar>

                <v-list-item-content :class="{'white--text' : hover}" class="pl-5 my-0" style="height: 100%">
                  <span class="overline my-0">Ethiopia</span>
                  <span class="headline my-0">{{ member.name }}</span>
                  <span class="caption my-1">{{ member.career }}</span>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
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
      baseUrl: process.env.baseUrl,
      countries: ["Ethiopia", "Turkey", "USA"],
      titles: ["Trainee", "Trainer", "Partners"]
    };
  },
  head: {
    title: "Team"
  },
  computed: {
    ...mapGetters("team", ["getTeamMembers"])

  },
  created() {
    this.$store.dispatch("team/fetchMembers");
  }
};
</script>
<style scoped>
.headline {
    font-size: 1.22rem !important;
    line-height: 1.25rem;}
</style>