<template>
  <div>
    <banner
      img="team.svg"
      img-width="15rem"
      title="Meet our team"
      description="Gathered from different parts of the world, from different domains for the same goal: Optimize the circumstances for humankind to shine the true potential of the world."
      scroll-target="#virtues"
    />
    <div id="virtues">
      <Card
        v-if="getTeamValues"
        :main-title="mainTitle"
        :content="getTeamValues.virtues"
      />
    </div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <template v-if="!getTeamMembers">
          <v-col
            v-for="i in 4"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            class="pa-5"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            />
          </v-col>
        </template>
      </v-row>
      <!-- Advisors -->
      <h1
        v-if="getTeamMembers"
        class="display-2 my-6 text-center"
      >
        Our Advisors & Mentors
      </h1>
      <v-row no-gutters>
        <v-col
          v-for="(member, i) in getAdvisors"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="pa-5 py-0 mx-auto"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              class="transparent frame overflow-hidden"
            >
              <v-container class="px-0" :class="{'tint' : hover}">
                <cld-image
                  loading="lazy"
                  crop="scale"
                  width="200"
                  radius="max"
                  fetch-format="auto"
                  quality="auto"
                  class="d-block mx-auto"
                  :public-id="changeFormat(member.image)"
                />
                <v-card-title class="mx-auto text-center">
                  <p class="text-center mx-auto">
                    {{ member.name }}
                  </p>
                </v-card-title>
                <v-card-subtitle class="text-center">
                  {{ member.title }}
                </v-card-subtitle>
                <div class="details">
                  <h4>{{ member.name }}</h4>
                  <p> {{ member.description }} </p>
                </div>
              </v-container>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <!-- Team -->
      <h1
        v-if="getTeamMembers"
        class="display-2 my-6 text-center"
      >
        Our Team
      </h1>
      <v-row no-gutters>
        <v-col
          v-for="(member, i) in getTeamMembers"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="pa-5 py-0 mx-auto"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              class="transparent frame overflow-hidden"
            >
              <v-container class="px-0" :class="{'tint' : hover}">
                <cld-image
                  loading="lazy"
                  crop="scale"
                  width="200"
                  radius="max"
                  fetch-format="auto"
                  quality="auto"
                  class="d-block mx-auto"
                  :public-id="changeFormat(member.image)"
                />
                <v-card-title class="mx-auto text-center">
                  <p class="text-center mx-auto">
                    {{ member.name }}
                  </p>
                </v-card-title>
                <v-card-subtitle class="text-center">
                  {{ member.title }}
                </v-card-subtitle>
                <div class="details">
                  <h4>{{ member.name }}</h4>
                  <p> {{ member.description }} </p>
                </div>
              </v-container>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Banner from "@/components/core/TextOnlyBanner";
import Card from "@/components/core/Card";

export default {
  components: {
    Banner,
    Card
  },
  data: () => ({
    mainTitle: "Our Virtues"
  }),
  head: {
    title: "Team"
  },
  computed: {
    ...mapGetters("team", ["getTeamMembers", "getAdvisors", "getTeamValues"])
  },
  created() {
    this.$store.dispatch("team/fetchMembers");
    this.$store.dispatch("team/fetchTeamValues");
  },
  methods: {
    changeFormat(url) {
      return url.substr(0, url.indexOf("."));
    }
  }
};
</script>
<style scoped>
.tint {
  background-color: #eee;
}
.frame {
  text-align: center;
  position: relative;
}
.frame .details {
  height: 95%;
  width: 100%;
  padding: 5% 8%;
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(90deg);
  transform-origin: 50%;
  background: rgba(255,255,255,0.9);
  opacity: 0;
  transition: all 0.4s ease-in;
  font-size: 14px;
  font-style: normal;
  overflow-y:scroll;
}
.frame:hover .details {
  transform: translate(-50%, -50%) rotateY(0deg);
  opacity: 1;
}
.virtues p {
  font-size: calc(13px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}

.display-2 {
  font-weight: 800;
  font-size: 3em !important;
}

</style>
