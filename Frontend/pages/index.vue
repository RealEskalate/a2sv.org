<template>
  <div>
    <div style="height: 90vh" class="video-container">
      <div
        class="d-flex align-center justify-center my-3"
        style="height: 100%; z-index: 2; position: relative"
      >
        <div class="pa-8 text-center col-md-9 animate-pop-in" style="color: #fff">
          <h2
            :class="{
              paused,
              'display-4': $vuetify.breakpoint.mdAndUp,
              'display-2': $vuetify.breakpoint.smAndDown,
            }"
            class="text-bold rainbow-link py-3"
            style="font-weight: 900"
          >
            Talent is everywhere but opportunity is not
          </h2>
          <!-- <p class="mt-7 text-center hero-subtitle pa-5">
            African students deserves equal opportunities as the rest of the
            world.
          </p> -->
          <v-btn
            outlined
            tile
            dark
            x-large
            class="mt-md-12 mt-sm-5 d-block mx-auto"
            @click="$vuetify.goTo(target, options)"
          >
            Explore
          </v-btn>
        </div>
      </div>
      <video id="videoBG" autoplay loop muted>
        <source
          src="/a2sv homepage.mp4"
        >
      </video>
      <div class="overlay" style="height: 94vh" />
    </div>
    <v-container
      class="my-md-12 py-10 pa-5 pa-sm-10 text-center text-md-left"
      style="background: url('bg.svg')"
    >
      <v-row justify="center" class="my-5">
        <v-col cols="12"  class="my-md-12 d-flex align-center">
        <h1 class="display-2">
          We tick these UN Sustainable development goals
        </h1>
        </v-col>

        <v-col v-for="u in un" :key="u" class="d-flex child-flex col-md-2 col-sm-3" cols="6">
            <v-card class="mx-auto box" :href="u.link" target="_blank">
              <v-img
                :src="'/un/' + u.img"
              />
            </v-card>
        </v-col>
      </v-row>

      <v-row class="my-md-10 mt-12">
        <v-col cols="12" md="6" class="my-md-12 d-flex align-center">
          <div>
            <h1 class="my-5 display-2">
              360° training
            </h1>
            <p style="font-size: 1.5rem">
              A2SV upskills students with a 360° software engineering program
              that focuses on problem solving and personal development.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <cld-image
            style="border: 2px solid #d4e5ff; border-radius: 200px"
            loading="lazy"
            crop="scale"
            responsive
            fetch-format="auto"
            quality="auto"
            class="z-index-1 overflow-hidden"
            public-id="a2sv/group"
          />
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col cols="10" md="8" class="mx-auto text-center">
          <h1 class="my-5 display-2">
            Internship Interviews
          </h1>
          <p class="text-body text-center">
            Students have internship interviews with top tech companies such as
            Google and Palantir.
          </p>
        </v-col>
      </v-row>
      <v-row id="main-content" class="mb-12">
        <v-col cols="12" md="6" class="mt-12">
          <cld-image
            style="border: 2px solid #d4e5ff; border-radius: 200px"
            loading="lazy"
            crop="scale"
            responsive
            fetch-format="auto"
            quality="auto"
            class="z-index-1 overflow-hidden"
            public-id="a2sv/social_projects"
          />
        </v-col>
        <v-col cols="12" md="6" class="my-md-12 d-flex align-center">
          <div>
            <h1 class="my-5 display-2">
              Social Projects
            </h1>
            <p class="text-body text-center text-md-left">
              Students work on social projects with industry experts to address
              the most pressing problems in their community.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="10" md="8" class="mx-auto text-center">
          <h1 class="my-5 display-2">
            Internships
          </h1>
          <p class="text-body text-center">
            Students who passed the interviews get 3-month internships to gain
            experience in building scalable products that are commonly used
            around the world.
          </p>
        </v-col>
      </v-row>

      <v-row class="px-md-10 my-12">
        <h1 class="display-2 my-3">
          Since November 2019, A2SV has achieved the following:
        </h1>
        <v-col md="6" sm="12" class="text-center text-md-left">
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template #opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"

                  v-text="year.year"
                />
              </template>
              <div class="py-3">
                <div>
                  <p class="timeline-txt" v-html="year.desc">
                    {{ year.desc }}
                  </p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col class="mx-auto px-12 d-md-flex align-center" md="6" sm="8">
          <div>
            <v-sparkline
              :height="graphHeight"
              :gradient="['#5EF7B7', '#0CBB72']"
              :smooth="5"
              type="bar"
              show-labels
              label-size="18"
              auto-line-width
              :value="[2, 27, 54]"
              :labels="['2%', '27%', '54%']"
            />
            <span style="font-size: small">
              Google intern acceptance rate <b>vs</b> What we have achieved
              within 3 months <b>vs</b> What we have achieved after second round
              of training
            </span>
          </div>
        </v-col>
      </v-row>
      <h1 class="display-2 mt-12 text-center">
        Impact Stories
      </h1>
      <v-row class="pa-lg-12 pa-5">
        <v-col
          v-for="(story, i) in getImpactStories"
          :key="i"
          class="mx-auto"
          cols="12"
          md="6"
        >
          <v-card outlined style="height: 100%" class="mx-md-5" color="#efefff">
            <div
              class="d-flex align-center"
              :style="`height: ${
                $vuetify.breakpoint.smAndUp ? '350px' : '450px'
              }`"
            >
              <p class="quote pa-5 text-center">
                {{ story.content }}
              </p>
            </div>

            <div
              class="mx-auto overflow-hidden my-5"
              style="
                width: 210px;
                height: 210px;
                border: 2px solid #d4e5ff;
                border-radius: 200px;
              "
            >
              <cld-image
                loading="lazy"
                crop="scale"
                responsive
                fetch-format="auto"
                quality="auto"
                class="z-index-1 overflow-hidden"
                :public-id="story.image"
              />
            </div>

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
        </v-col>
      </v-row>
    </v-container>
    <div class="grey lighten-4 text-center">
      <partners />
    </div>
    <v-container>
      <v-row class="my-md-10 py-12">
        <div class="col-md-11 ml-auto mr-auto text-center">
          <h1 class="display-2 blackish text-center" style="line-height: 70px">
            Do you want to contribute to the digital transformation of Africa?
          </h1>
            <v-btn
              x-large
              color="primary"
              class="text-capitalize mt-10 mb-5 box"
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
import { mapGetters } from "vuex";

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
      },
      un:[
        {
          img:"1.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-3-good-health-and-well-being.html"
        },
        {
          img:"2.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-4-quality-education.html"
        },
        {
          img:"3.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-8-decent-work-and-economic-growth.html"
        },
        {
          img:"4.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-9-industry-innovation-and-infrastructure.html"
        },
        {
          img:"5.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-10-reduced-inequalities.html"
        },
        {
          img:"6.png",
          link: "https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-17-partnerships-for-the-goals.html"
        }
      ],
      years: [
        {
          color: "cyan",
          year: "February 2020",
          desc: "We formed partnerships with Google, Palantir and Coinbase."
        },
        {
          color: "green",
          year: "March 2020",
          desc:
            "27% of our first group of trainees passed Google internship interviews after 3 months of training."
        },
        {
          color: "orange",
          year: "October 2020 ",
          desc:
            "Our students created a COVID-19 tracking app -<a href= 'https://tracksym.app/' target='_blank'> TrackSym </a> - for Ethiopia’s Ministry of Health."
        },
        {
          color: "pink",
          year: "December 2020 ",
          desc:
            "54% of our first group of trainees passed Google internship interviews after the second round of training."
        }
      ]
    };
  },
  head: {
    title: "Welcome to Africa to Silicon Valley"
  },
  computed: {
    ...mapGetters("resources", ["getImpactStories"]),
    graphHeight() {
      if (this.$vuetify.breakpoint.lgAndUp) return 350;
      if (this.$vuetify.breakpoint.mdAndUp) return 400;
      return 200;
    }
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
  line-height: 1.6em;
  font-size: 1.125em;
  font-family: Nunito, sans-serif;
}
.quote:before,
.quote:after {
  content: '\201C';
  font-family: 'Sanchez', serif;
  font-size: 40px;
  color: #334ac0;
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
.cld-image img {
  z-index: 1 !important;
}
.display-2 {
  font-weight: 800;
  font-size: 3em !important;
}
.text-body {
  font-size: 22px;
}
.timeline-txt {
  font-size: large;
}
.box:hover {
  box-shadow: 0 5px 15px #4b4545 !important;
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

.rainbow-link {
  -webkit-text-stroke-color: transparent;
  background: -moz-linear-gradient(
    to left,
    #20ffc0 0%,
    #e9e708 10%,
    #ff6606 20%,
    #ba07e7 30%,
    #08adff 40%,
    #20ffc0 50%,
    #e9e708 60%,
    #ff6606 70%,
    #ba07e7 80%,
    #08adff 90%,
    #20ffc0 100%
  );
  background: linear-gradient(
    to left,
    #20ffc0 0%,
    #e9e708 10%,
    #ff6606 20%,
    #ba07e7 30%,
    #08adff 40%,
    #20ffc0 50%,
    #e9e708 60%,
    #ff6606 70%,
    #ba07e7 80%,
    #08adff 90%,
    #20ffc0 100%
  );
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
  font-size: 1.5em !important;
}

#videoBG {
  object-fit: cover;
  width: 100vw;
  height: 94vh;
  position: absolute;
  top: 0;
  left: 0;
}

@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width: 100vw;
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
