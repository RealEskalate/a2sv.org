<template>
  <div>
    <clientOnly>
      <video-background
        src="https://res.cloudinary.com/eskalate/video/upload/e_auto_brightness,f_auto,q_auto:best/v1610454190/video/homepage_video_1_gegjid.mp4"
        :style="`height: ${$vuetify.breakpoint.mdAndUp ? '90vh' : '100vh'}`"
        style="max-height: 900px;"
        overlay="rgba(0, 0, 0, 0.25)"
      >
        <div
          class="d-flex align-center justify-center my-3"
          style="height: 100%"
        >
          <div
            class="pa-8 text-center col-md-9"
            style="color: #FFF"
          >
            <h2 :class="{paused}" class="display-3 text-bold box-with-text py-3" style="font-weight: 900">
              Talent is everywhere, opportunity is not.
            </h2>
            <p
              class="mt-7 text-body text-center white--text"
              style="font-family: Lato, sans-serif !important;"
            >
              A2SV helps African students get equal opportunities as the rest of the world.
            </p>
            <v-btn
              outlined
              tile
              dark
              class="mt-md-12 mt-sm-5"
              @click="$vuetify.goTo(target, options)"
            >
              Explore
            </v-btn>
          </div>
        </div>
      </video-background>
    </clientOnly>

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
          <v-img src="/landing/group.webp" />
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
            loading="lazy"
            crop="scale"
            width="400"
            fetch-format="auto"
            quality="auto"
            class="d-inline-flex mx-auto"
            public-id="a2sv/social_projects"
          />
          <v-img
            width="10rem"
            class="d-inline-block tracksym"
            src="https://eskalate.io/img/tracksym.svg"
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

      <v-row class="px-10 my-12">
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
        <v-col class="mx-auto" md="4" sm="6">
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
          class="my-5 pa-0 mx-auto overflow-hidden"
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
    Partners,
    VideoBackground: () => import("vue-responsive-video-background-player")
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
  },
  mounted() {
    setTimeout(() => {
        this.paused = true;
      }, 1200);
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
  margin-left: -10%;
  margin-top: 3%;
  position: absolute;
  cursor: pointer;
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

.box-with-text {
  font: bold 26vmax/.8 "Lato";
  line-height: 1.5em !important;
  background: rgba(46, 43, 229, 0.6);
  display: table;
  color: white;
  mix-blend-mode: multiply
}

@-webkit-keyframes stripes {
  to {
    background-size:100% 100%;
  }
}

@keyframes stripes {
  to {
    background-size:100% 100%;
  }
}
.box-with-text {
  margin: auto;
  background: linear-gradient( crimson , crimson) turquoise no-repeat 0% 50%;
  background: -webkit-linear-gradient( #0a61f7, #0a61f7) #f70a61 no-repeat 0% 50%;
  background-size: 0 100%;
  -webkit-animation: stripes 2s ease-in infinite;
  animation: stripes 2s ease-in infinite;
}
.paused {
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}
</style>
