<template>
  <div>
    <banner
      img="team.svg"
      img-width="15rem"
      title="Meet our team"
      description="Gathered from different parts of the world, from different domains for the same goal: Optimize the circumstances for humankind to shine the true potential of the world."
    />
    <div v-if="getTeamValues" class="mb-12 pa-8 py-md-12" style="background: linear-gradient(90deg, #2C3A8B 0,#286DF7 100%);">
      <h1 class="display-2 mb-6 mb-md-12 text-center" style="color: #ffffff !important;">
        Our Virtues
      </h1>
      <v-row>
        <v-col
          v-for="(title, i) in Object.keys(getTeamValues.Virtues)"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="pa-5"
        >
          <v-card class="pa-5 shadow-lg d-flex align-center justify-center white--text" color="transparent" height="100%">
            <div>
              <h1 class="overline text-center mb-5 mt-3" style="font-size: xx-large !important;">
                {{ title }}
              </h1>
              <p class="text-center caption" style="font-size: larger !important;">
                {{ getTeamValues.Virtues[title] }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
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

        <v-col
          v-for="(member, i) in getTeamMembers"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="pa-5 py-0"
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

export default {
  components: {
    Banner
  },
  head: {
    title: "Team"
  },
  computed: {
    ...mapGetters("team", ["getTeamMembers", "getTeamValues"])
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
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #5668c6;
}
::-webkit-scrollbar-thumb:hover {
  background: #5668c6;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.virtues p {
  font-size: calc(13px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}

.display-2 {
  font-weight: 800;
  font-size: 3em !important;
}

</style>
