<template>
  <div>
    <div style="height: 90vh;" class="video-container">
      <div
        class="d-flex align-center justify-center my-3"
        style="height: 100%; z-index: 2; position: relative;"
      >
        <div
          class="pa-8 text-center col-md-9"
          style="color: #FFF;"
        >
          <h2
            :class="{ paused }"
            class="display-4 text-bold rainbow-link py-3"
            style="font-weight: 900"
          >
            Talent is everywhere, opportunity is not.
          </h2>
          <p
            class="mt-7 text-center hero-subtitle pa-5"
          >
            African students deserves equal opportunities as the rest of the world.
          </p>
          <v-btn
            outlined
            tile
            dark
            class="mt-md-12 mt-sm-5 d-block mx-auto"
            @click="$vuetify.goTo(target, options)"
          >
            Explore
          </v-btn>
        </div>
      </div>
      <video
        id="videoBG"
        autoplay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/eskalate/video/upload/e_auto_brightness,f_auto,q_auto:best/v1610454190/video/homepage_video_1_gegjid.mp4"
        >
      </video>
      <div class="overlay"></div>
    </div>
    <v-container class="mt-md-12 pa-5" style="background: url('bg.svg')">
      <v-row class="my-md-6">
        <v-col sm="12" md="6" class="my-md-12">
          <h1 class="my-5 display-2">
            360° training
          </h1>
          <p style="font-size: 1.5rem;">
            A2SV upskills students with a 360° software engineering program
            that focuses on problem solving and personal development.
          </p>
        </v-col>
        <v-col sm="12" md="6" style="margin-top: -5%">
          <cld-image
            loading="lazy"
            crop="scale"
            width="550"
            fetch-format="auto"
            radius="250"
            quality="auto"
            class="d-inline-flex mx-auto z-index-1"
            public-id="a2sv/group"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="10" md="8" class="mx-auto">
          <h1 class="my-5 display-2 text-center">
            Internship interviews
          </h1>
          <p class="text-body">
            Students have internship interviews with top tech companies such as Google and Palantir.
          </p>
        </v-col>
      </v-row>
      <v-row id="main-content" class="mt-12">
        <v-col sm="12" md="6" class="mt-12">
          <cld-image
            style="border: 2px solid #d4e5ff; border-radius: 200px"
            loading="lazy"
            crop="scale"
            width="500"
            radius="250"
            fetch-format="auto"
            quality="auto"
            class="d-inline-flex mx-auto z-index-1"
            public-id="a2sv/social_projects"
          />
          <v-img
            width="10vw"
            max-width="9rem"
            class="d-inline-block tracksym"
            src="https://res.cloudinary.com/eskalate/image/upload/v1611563687/a2sv/tracksym.svg"
          />
        </v-col>
        <v-col sm="12" md="6" class="my-md-12">
          <h1 class="my-5 display-2">
            Social Projects
          </h1>
          <p class="text-body">
            Students work on social projects with industry experts to address the most pressing problems
            in their community.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="10" md="8" class="mx-auto">
          <h1 class="my-5 display-2 text-center">
            Internships
          </h1>
          <p class="text-body">
            Students who passed the interviews get 3-month internships to gain experience
            in building scalable products that are commonly used around the world.
          </p>
        </v-col>
      </v-row>

      <v-row class="px-md-10 my-12">
        <div class="col-md-8 mx-auto text-center">
          <h1 class="display-2 my-3 text-left">
            What have we done so far?
          </h1>
          <p class="mt-md-7 text-body">
            A2SV was founded in Nov 2019 in Ethiopia. After 3-month training, our first group has achieved a
            remarkable 27% success rate at Google internship interviews. Considering Google's internship
            acceptance rate is only 2%, an A2SV student is 13.5 times more likely to succeed than an average candidate.
            <br>
            As a response to the COVID-19 outbreak, our first group has built a digital symptom tracking system,
            <a href="https://tracksym.app" target="_blank">Tracksym</a>. We are currently collaborating with
            Ethiopian Ministry of Health to make it a part of the official response.
          </p>
        </div>
        <v-col class="mx-auto" md="4" sm="10">
          <v-sparkline
            height="250"
            :gradient="['#5EF7B7','#0CBB72']"
            :smooth="5"
            type="bar"
            show-labels
            label-size="18"
            auto-line-width
            :value="[2, 27]"
            :labels="['2%', '27%']"
          />
          <span style="font-size: small">
            Google intern acceptance rate <b>vs</b> What we have achieved within 3 months
          </span>
        </v-col>
        <div
          class="my-5 pa-0 mx-auto overflow-hidden d-block"
        >
          <v-row>
            <p class="col-12 text-center display-1 font-weight-bold pb-8">
              Impact story
            </p>
            <v-card
              v-for="(story, i) in getImpactStories"
              :key="i"
              outlined
              class="col-md-5 col-10 mx-auto"
              color="#efefff"
            >
              <p class="quote pa-5" style="height: 65%">
                {{ story.content }}
              </p>
              <v-col class="mx-auto" cols="4">
                <cld-image
                  loading="lazy"
                  crop="scale"
                  height="100"
                  radius="max"
                  fetch-format="auto"
                  quality="auto"
                  class="d-block mx-auto"
                  :public-id="story.image"
                />
              </v-col>
              <h1
                class="mx-auto text-center blue-black"
                style="font-size: 20px; font-weight: 800"
              >
                {{ story.name }}
              </h1>
              <v-card-subtitle class="text-center">
                {{ story.title }}
              </v-card-subtitle>
            </v-card>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <div class="grey lighten-4 text-center">
      <partners />
    </div>
    <v-container>
      <v-row class="my-md-10 py-12">
        <div class="col-md-11 ml-auto mr-auto text-center">
          <h1 class="display-2 blackish text-center" style="line-height: 70px;">
            Do you want to contribute to the digital transformation of Africa?
          </h1>
          <v-btn
            x-large
            outlined
            class="text-capitalize mt-10 mb-5 button-fill-bottom"
            to="/support"
          >
            Support us
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Partners from "@/components/core/Partners";
import {mapGetters} from "vuex";

export default {
  name: "LandingPage",
  components: {
    Partners
  },
  data() {
    return {
      target: 1000,
      paused: false,
      options: {
        duration: 1000,
        offset: 200,
        easing: "easeInOutCubic"
      }
    };
  },
  head: {
    title: "Welcome"
  },
  computed: {
    ...mapGetters("resources", ["getImpactStories"])
  },
  created() {
    this.$store.dispatch("resources/fetchImpactStories");
    setTimeout(() => {
      this.paused = true;
    }, 3000);
  }
};
</script>
<style scoped>
.quote {
  position: relative;
  padding-left: 1em;
  font-weight: 100;
  line-height: 2em;
  font-size: 1.125em;
  font-family: Nunito, sans-serif;
}
.quote:before, .quote:after {
  content: '\201C';
  font-family: 'Sanchez';
  font-size: 40px;
  color: #334aC0;
}
.quote:after {
  content: '\201D';
}
.tracksym {
  margin-left: -6%;
  margin-top: 3%;
  position: absolute;
  cursor: pointer;
  z-index: 0;
}
a {
  text-decoration: none;
}
.cld-image img{
  z-index: 1!important;
}
.display-2 {
  font-weight: 800;
  font-size: 50px!important;
}
.text-body {
  font-size: 22px;
}

/* animations */

@keyframes rainbow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.rainbow-link  {
  -webkit-text-stroke-color: transparent;
  background: -moz-linear-gradient(to left, #20ffc0 0%, #e9e708 10%, #ff6606 20%, #ba07e7 30%, #08adff 40%, #20ffc0 50%, #e9e708 60%, #ff6606 70%, #ba07e7 80%, #08adff 90%, #20ffc0 100%);
  background: linear-gradient(to left, #20ffc0 0%, #e9e708 10%, #ff6606 20%, #ba07e7 30%, #08adff 40%, #20ffc0 50%, #e9e708 60%, #ff6606 70%, #ba07e7 80%, #08adff 90%, #20ffc0 100%);
  background-size: 400% 100%;
  background-repeat: repeat-x;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  animation: rainbow 10.5s linear infinite;
}
.paused {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}
.hero-subtitle {
  font-size: 1.5em!important;
}

#videoBG {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -3%;
}

@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width:100vw;
  }
}
.video-container .overlay {
  object-fit: cover;
  top: 0;
  width: 100vw;
  height: 93.5vh;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
