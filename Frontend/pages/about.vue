<template>
  <div>
    <banner
      img-width="15rem"
      title="About A2SV"
      description="Africa to silicon valley company is founded to help african students to find internship in big companies."
    />
    <v-container class="text-center mt-12 px-12">
      <div>
        <h1 class="mb-8 sub-titles">
          What we do
        </h1>
        <p v-if="getAboutUs" class="text-body" v-html="getAboutUs.whatWeDo.content" />
        <p class="text-body">
          For more information, please watch the following video, take
          a look at the
          <a href="https://www.youtube.com/watch?v=qy00E8FklC0&list=PL2y7PkGshr4srXSNlU7YW3QIbR_xsVCiF" target="_blank">
            lecture videos</a>.
        </p>
      </div>
      <!-- wistia video player -->
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
      <div>
        <h1 class="my-12 sub-titles">
          How we do it
        </h1>
        <p v-if="getAboutUs" class="text-body" v-html="getAboutUs.howWeDoIt.content" />
      </div>
      <h1 v-if="getLearnPaths" class="display-1 my-6">
        {{ getLearnPaths["Phase-1"].title }}
      </h1>
      <p v-if="getLearnPaths" class="justify-center text-body mb-10" v-html="getLearnPaths['Phase-1'].subtitle" />

      <carousel-3d
        v-if="getLearnPaths"
        style="min-height: 350px"
        :border="0"
        :perspective="20"
        :inverse-scaling="50"
        :space="350"
        autoplay
        :autoplay-timeout="5000"
        width="400"
      >
        <slide
          v-for="(item, i) in getLearnPaths['Phase-1'].list"
          :key="i"
          class="overflow-visible"
          :index="i"
          style="height: auto; background-color: transparent"
        >
          <v-card class="shadow" outlined shaped>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="getFullPath(item.image)"
            >
              <v-card-title class="mr-3" v-text="item.title" />
            </v-img>
            <v-card-text v-text="item.content" />
          </v-card>
        </slide>
      </carousel-3d>

      <v-icon size="100" class="mb-5" style="margin-top: -20px">
        {{ mdiArrowDownBoldHexagonOutline }}
      </v-icon>

      <h1 v-if="getLearnPaths" class="display-1 my-6">
        {{ getLearnPaths["Phase-2"].title }}
      </h1>
      <p v-if="getLearnPaths" class="justify-center text-body mb-10" v-html="getLearnPaths['Phase-2'].subtitle" />
      <carousel-3d
        v-if="getLearnPaths"
        style="min-height: 400px"
        :border="0"
        :perspective="20"
        :inverse-scaling="50"
        :space="350"
        autoplay
        :autoplay-timeout="5000"
        width="400"
      >
        <slide
          v-for="(item, i) in getLearnPaths['Phase-2'].list"
          :key="i"
          class="overflow-visible"
          :index="i"
          style="height: auto; background-color: transparent"
        >
          <v-card class="shadow" outlined shaped>
            <v-img class="align-end" height="200px" :src="getFullPath(item.image)" />
            <v-card-title class="primary--text pb-0" v-text="item.title" />
            <v-card-text v-text="item.content" />
          </v-card>
        </slide>
      </carousel-3d>
    </v-container>

    <div class="grey lighten-4 mt-10 text-center">
      <Partners :message="message" />
    </div>
    <v-container>
      <v-icon size="100" class="my-5 d-block mx-auto text-center">
        {{ mdiArrowDownBoldHexagonOutline }}
      </v-icon>
      <div v-if="getLearnPaths">
        <h1 class="display-1 text-center my-6">
          Phase-3
        </h1>
        <p class="text-body col-md-10 mx-auto" v-html="getLearnPaths['Phase-3'].subtitle" />
      </div>
      <div v-if="getAboutUs" class="mt-10">
        <h1 class="mb-5 text-center sub-titles">
          What we hope to achieve
        </h1>
        <p class="text-body col-md-10 mx-auto" v-html="getAboutUs.whatWeHopeToAchieve.content" />
      </div>
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
      mdiArrowDownBoldHexagonOutline,
      message: "At the end of phase 2, trainees will interview with our partner companies."
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
    }
  }
};
</script>

<style scoped>
.sub-titles {
  font-size: 60px;
  line-height: 60px;
  font-weight: 800;
  font-family: Lato, Nunito, sans-serif;
}
.display-1 {
  font-weight: 700;
}
</style>
