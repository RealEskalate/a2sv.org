<template>
  <div>
    <banner
      img="aboutus.svg"
      img-width="15rem"
      title="About A2SV"
      description="Africa to silicon valley company is founded to help african students to find internship in big companies."
    />
    <v-container class="text-center mt-12 px-12">
      <div>
        <h1 class="my-12 sub-titles">
          What We Do
        </h1>
        <p
          v-if="getAboutUs"
          class="text-body"
          v-html="getAboutUs.whatWeDo.content"
        />
        <p class="text-body">
          For more information, please watch the following video, take
          a look at the
          <a href="https://www.youtube.com/watch?v=qy00E8FklC0&list=PL2y7PkGshr4srXSNlU7YW3QIbR_xsVCiF" target="_blank">
            lecture videos</a>.
        </p>
      </div>
      <!-- wistia video player -->
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <div>
          <script type="application/javascript" src="https://fast.wistia.com/embed/medias/f8996d67s9.jsonp" async />
          <script type="application/javascript" src="https://fast.wistia.com/assets/external/E-v1.js" async />
          <div class="wistia_responsive_padding my-10" style="padding:56.25% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
              <div class="wistia_embed wistia_async_f8996d67s9 videoFoam=true" style="height:100%;position:relative;width:100%">
                <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                  <img
                    src="https://fast.wistia.com/embed/medias/f8996d67s9/swatch"
                    style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
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
    <v-container class="py-12 text-center">
      <h1 class="my-12 sub-titles">
        How We Do It
      </h1>
      <p
        v-if="getAboutUs"
        class="text-body text-center"
        v-html="getAboutUs.howWeDoIt.content"
      />

      <v-timeline class="my-12">
        <v-timeline-item
          v-for="(phase, i) in getLearnPaths"
          :key="i"
          class="d-flex align-center"
          color="primary lighten-1"
          fill-dot
          small
        >
          <div class="py-4" :class="`text-${ evenPhase(i) ? 'right' : 'left' }`" style="height: 100%">
            <h1 v-if="getLearnPaths" class="font-weight-light primary--text">
              {{ phase.title }}
            </h1>
            <v-divider class="primary lighten-5 my-4" :class="`float-${ evenPhase(i) ? 'right' : 'left' }`" style="width: 75px; border-width: 2px; border-radius: 2px" />
            <br>
            <br>
            <p
              class="text-body font-weight-light"
              :class="`text-${ evenPhase(i) ? 'right' : 'left' }`"
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
                  <v-img style="opacity: 0.85" class="align-end" height="150px" :src="getFullPath(item.image)" />
                  <v-card-title class="primary--text pb-2" v-text="item.title" />
                  <v-card-text v-text="item.content" />
                </v-card>
              </slide>
            </carousel-3d>
            <v-img v-else src="illustrations/aboutus.svg" />
          </template>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <section class="grey lighten-4 mt-10 text-center">
      <Partners :message="message" />
    </section>

    <v-container v-if="getAboutUs" class="my-12 py-12 text-center">
      <h1 class="my-12 sub-titles">
        Our Goal
      </h1>
      <p class="text-body" v-html="getAboutUs.whatWeHopeToAchieve.content" />
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { mdiArrowDownBoldHexagonOutline } from "@mdi/js";
import Banner from "@/components/core/TextOnlyBanner";
import Partners from "@/components/core/Partners";

export default {
  components: {
    Banner,
    Partners
  },
  data() {
    return {
      isActive: false,
      mdiArrowDownBoldHexagonOutline,
      message: "Companies We Had Interviews With."
    };
  },
  head: {
    title: "About Us"
  },
  computed: {
    ...mapGetters("resources", ["getLearnPaths"]),
    ...mapGetters("resources", ["getAboutUs"])
  },
  created() {
    this.$store.dispatch("resources/setLearningPaths");
    this.$store.dispatch("resources/setAboutUs");
  },
  methods: {
    getFullPath(publicId) {
      return `https://res.cloudinary.com/eskalate/image/upload/q_auto:best,f_auto,w_600${publicId}`;
    },
    evenPhase(phase){
      const num = parseInt(phase.split("-")[1]);
      return num % 2 === 0;
    }
  }
};
</script>

<style lang="sass">

</style>
<style scoped>
.sub-titles {
  font-size: 60px;
  line-height: 60px;
  font-weight: 800;
  font-family: Lato, Nunito, sans-serif;
  text-align: center;
}
.text-body {
  text-align: center;
  font-weight: 300;
}
</style>
