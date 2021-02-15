<template>
  <div>
    <banner
      img="aboutus.svg"
      img-width="15rem"
      title="Africa to Silicon Valley"
      description="Empowering Young Software Engineers for Tech-Driven Change in Africa "
    />
    <v-container class="text-center mt-12 px-12">
      <div v-if="getAboutUs">
        <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
          {{ getAboutUs.whatWeDo.title }}
        </h1>
        <p class="text-body text-center" v-html="getAboutUs.whatWeDo.content" />
      </div>
      <!-- wistia video player -->
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <div>
          <div
            class="wistia_responsive_padding"
            style="padding: 56.25% 0 0 0; position: relative"
          >
            <div
              class="wistia_responsive_wrapper"
              style="
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
              "
            >
              <div
                class="wistia_embed wistia_async_5ds01h3w7i videoFoam=true"
                style="height: 100%; position: relative; width: 100%"
              >
                <div
                  class="wistia_swatch"
                  style="
                    height: 100%;
                    left: 0;
                    opacity: 0;
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    transition: opacity 200ms;
                    width: 100%;
                  "
                >
                  <img
                    src="https://fast.wistia.com/embed/medias/5ds01h3w7i/swatch"
                    style="
                      filter: blur(5px);
                      height: 100%;
                      object-fit: contain;
                      width: 100%;
                    "
                    alt=""
                    aria-hidden="true"
                    onload="this.parentNode.style.opacity=1;"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-lazy>
    </v-container>
    <v-container :class="{'mt-12': $vuetify.breakpoint.mdAndUp }" class="text-center  px-12">
      <div v-if="getAboutUs">
        <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
          {{ getAboutUs.problemWeSolve.title }}
        </h1>
        <p class="text-body text-center" v-html="getAboutUs.problemWeSolve.content" />
      </div>
    </v-container>
    <v-container :class="{'invisible': $vuetify.breakpoint.smAndDown }" class="py-12 text-center">
      <div v-if="getAboutUs">
        <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
          {{ getAboutUs.howWeDoIt.title }}
        </h1>
        <p
          class="text-body text-center"
          v-html="getAboutUs.howWeDoIt.content"
        />
      </div>

      <v-timeline class="my-12 hidden-sm-and-down">
        <v-timeline-item
          v-for="(phase, i) in getLearnPaths"
          :key="i"
          class="d-flex align-center"
          color="primary lighten-1"
          small
        >
          <div
            class="py-4"
            :class="`text-${evenPhase(i) ? 'right' : 'left'}`"
            style="height: 100%"
          >
            <h1 v-if="getLearnPaths"  class="font-weight-light primary--text">
              {{ phase.title }}
            </h1>
            <v-divider
              class="primary lighten-5 my-4"
              :class="`float-${evenPhase(i) ? 'right' : 'left'}`"
              style="width: 75px; border-width: 2px; border-radius: 2px"
            />
            <br>
            <br>
            <p
              class="text-body font-weight-light"
              :class="`text-${evenPhase(i) ? 'right' : 'left'}`"
              v-html="phase.subtitle"
            />
          </div>

          <template #opposite>
            <carousel-3d
              v-if="phase.list"
              style="min-height: 400px"
              :border="0"
              :perspective="20"
              :inverse-scaling="300"
              :space="300"
              autoplay
              :display="3"
              :autoplay-timeout="5000"
              width="350"
            >
              <slide
                v-for="(item, j) in phase.list"
                :key="j"
                class="overflow-visible"
                :index="j"
                style="height: auto; background-color: transparent"
              >
                <v-card class="shadow-sm" shaped>
                  <v-img
                    style="opacity: 0.85"
                    class="align-end"
                    height="150px"
                    :src="getFullPath(item.image)"
                  />
                  <v-card-title
                    class="primary--text pb-2"
                    v-text="item.title"
                  />
                  <v-card-text v-text="item.content" />
                </v-card>
              </slide>
            </carousel-3d>
            <v-img v-else src="illustrations/aboutus.svg" />
          </template>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container :class="{'invisible': $vuetify.breakpoint.mdAndUp }" class="py-12 text-center px-4">
      <div v-if="getAboutUs">
        <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
          {{ getAboutUs.howWeDoIt.title }}
        </h1>
        <p
          class="text-body text-center"
          v-html="getAboutUs.howWeDoIt.content"
        />
      </div>

      <v-row v-for="(phase, i) in getLearnPaths"
          :key="i">
          <h1 v-if="getLearnPaths"  class="mx-4 font-weight-light primary--text">
            {{ phase.title }}
          </h1>
          <p
              class="text-body mx-4 font-weight-light"
              v-html="phase.subtitle"
            />
        <template >
            <carousel-3d
              v-if="phase.list"
              style="min-height: 400px"
              :border="0"
              :perspective="20"
              :inverse-scaling="300"
              :space="300"
              autoplay
              :display="3"
              :autoplay-timeout="5000"
              width="250"
            >
              <slide
                v-for="(item, j) in phase.list"
                :key="j"
                class="overflow-visible"
                :index="j"
                style="height: auto; background-color: transparent"
              >
                <v-card class="shadow-sm" shaped>
                  <v-img
                    style="opacity: 0.85"
                    class="align-end"
                    height="150px"
                    :src="getFullPath(item.image)"
                  />
                  <v-card-title
                    class="primary--text pb-2"
                    v-text="item.title"
                  />
                  <v-card-text v-text="item.content" />
                </v-card>
              </slide>
            </carousel-3d>
            <v-img v-else src="illustrations/aboutus.svg" />
          </template>
      </v-row>

    </v-container>
    <Card
      v-if="getAboutUs"
      :main-title="getAboutUs.whatWeHopeToAchieve.title"
      :content="getAboutUs.whatWeHopeToAchieve.content2"
    />
    <section :class="{'pt-10': $vuetify.breakpoint. smAndDown}" class="grey lighten-4 text-center" style="margin-top: -48px">
      <Partners :message="message" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiArrowDownBoldHexagonOutline } from "@mdi/js";
import Banner from "@/components/core/TextOnlyBanner";
import Partners from "@/components/core/Partners";
import Card from "@/components/core/Card";

export default {
  components: {
    Banner,
    Partners,
    Card
  },
  data() {
    return {
      isActive: false,
      mdiArrowDownBoldHexagonOutline,
      message: "Current Interview Partners"
    };
  },
  head: {
    title: "About Us"
  },
  computed: {
    ...mapGetters("resources", ["getLearnPaths"]),
    ...mapGetters("resources", ["getAboutUs"])
  },
  watch : {
    isActive(val) {
      if (val) {
        this.loadWistiaScripts();
      }
    }
  },
  created() {
    this.$store.dispatch("resources/setLearningPaths");
    this.$store.dispatch("resources/setAboutUs");
  },
  methods: {
    getFullPath(publicId) {
      return `https://res.cloudinary.com/eskalate/image/upload/q_auto:best,f_auto,w_600${publicId}`;
    },
    evenPhase(phase) {
      const num = parseInt(phase.split("-")[1]);
      return num % 2 === 0;
    },
    loadWistiaScripts() {
      if (!process.browser)
        return;
      [
        "https://fast.wistia.com/assets/external/E-v1.js",
        "https://fast.wistia.com/embed/medias/5ds01h3w7i.jsonp"
      ].forEach(link => {
        const script = document.createElement("script");
        script.src = link;
        document.body.appendChild(script);
      });

    }
  }
};
</script>

<style lang="sass">
</style>
<style scoped>

.text-body {
  font-weight: 300;
}
.invisible{
  content-visibility:hidden;
}
</style>
