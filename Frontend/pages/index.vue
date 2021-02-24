<template>
  <div>
    <v-responsive ref="videoContainer" :aspect-ratio="16/9" max-height="100vh" style="margin-top: -75px">
      <video id="videoBG" autoplay loop muted>
        <source
          src="https://res.cloudinary.com/dfc7snpy5/video/upload/v1613543897/a2sv/A2SV_website_Lv3_wt6fo6.mp4"
        >
      </video>
      <v-btn
        outlined
        dark
        large
        fab
        absolute
        bottom
        right
        left
        class="mb-12 d-none d-lg-block mx-auto pa-3 pt-4"
        @click="$vuetify.goTo(target, options)"
      >
        <v-icon large v-text="mdiChevronDoubleDown" />
      </v-btn>
    </v-responsive>

    <v-container
      id="first-container"
      class="my-md-12 py-10 pa-5 pa-sm-10 text-center text-md-left"
      style="background: url('bg.svg')"
    >
      <v-row class="my-md-4" style="justify-content: center;">
        <v-col cols="12" md="12" class=" d-flex align-center">
          <div class="text-center">
            <h1 class="mb-8" :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
              Africa to Silicon Valley
            </h1>
            <p class="text-body text-center">
              A2SV upskills high-potential university students, connects them with internship interviews at the world’s top tech companies, and create digital solutions to urgent problems in their home countries together. The program is free for students, making the opportunity available for youth who have talent but lack the means to use it.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="my-md-10 " style="justify-content: center;">
        <v-col cols="12" md="6">
          <cld-image
            style="border: 2px solid #d4e5ff; border-radius: 200px"
            loading="lazy"
            crop="scale"
            responsive
            fetch-format="auto"
            quality="auto"
            class="z-index-1 overflow-hidden "
            public-id="https://res.cloudinary.com/dfc7snpy5/image/upload/v1613802639/a2sv/africa3_aj1i05.jpg"
          />
        </v-col>
        <v-col cols="12" md="6" class="my-md-2 d-flex align-center">
          <div class="text-center">
            <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
              Who We Are
            </h1>
            <p class="text-body text-center">
              A2SV was founded by <b>Emre Varol</b>, former competitive programmer and machine learning engineer who worked at <b>Google Research, Palantir,</b> and Liftoff for 7 years. He moved to Ethiopia in October 2019 to train youth with just as much potential, but less opportunity  and launched A2SV through a partnership with Addis Ababa Institute of Technology, the best technical university in the country. In July 2020,<b> Burak Saglam</b>, former <b>International Math Olympiad medalist,</b> and <b>Erden Oktay</b>(MSc Tufts University), senior software engineer, joined.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="my-md-10 mt-12">
        <v-col cols="12" md="6" class="my-md-12 d-flex align-center">
          <div>
            <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
              360° Training
            </h1>
            <p class="text-body">
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
          <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
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
            public-id="https://res.cloudinary.com/dfc7snpy5/image/upload/v1612601149/lidselam.png"
          />
        </v-col>
        <v-col cols="12" md="6" class="my-md-12 d-flex align-center">
          <div>
            <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
              Social Projects
            </h1>
            <p class="text-body text-center text-md-left">
              Students work on social projects with industry experts to address
              the most pressing problems in their community.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-10">
        <v-col cols="10" md="8" class="mx-auto text-center">
          <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp}">
            Internships
          </h1>
          <p class="text-body text-center">
            Students who passed the interviews get 3-month internships to gain
            experience in building scalable products that are commonly used
            around the world.
          </p>
        </v-col>
      </v-row>

      <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp,'text-center':$vuetify.breakpoint.smAndUp}">
        Achievements
      </h1>
      <v-row class="px-md-10 my-12">
        <v-col md="7" cols="12" class="text-center text-md-left d-md-flex align-center">
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template #opposite>
                <span
                  :class="{'timeline-year-txt': $vuetify.breakpoint.smAndDown}"
                  class="headline font-weight-bold"
                  v-text="year.year"
                />
              </template>
              <div class="py-3">
                <div>
                  <p :class="{'text-medium': $vuetify.breakpoint.smAndDown, 'timeline-txt': $vuetify.breakpoint.mdAndUp}" v-html="year.desc">
                    {{ year.desc }}
                  </p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col class="mx-auto px-12 d-md-flex align-center" md="5" cols="12">
          <div>
            <v-sparkline
              :height="graphHeight"
              :gradient="['#0D60F7', '#05AEEE', '#05E576']"
              :smooth="4"
              type="bar"
              show-labels
              label-size="15"
              auto-line-width
              :value="[2, 27, 62]"
              :labels="['2%', '27%', '62%']"
            >
              <template #label="item" style="color: red">
                {{ item.value }}
              </template>
            </v-sparkline>
            <v-row class="text-center">
              <v-col cols="4" class="py-1">
                <b>AVERAGE</b>
              </v-col>
              <v-col cols="4" class="py-1">
                <b>A2SV 2020</b>
              </v-col>
              <v-col cols="4" class="py-1">
                <b>A2SV 2021</b>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center py-1">
                <b>Google Internship Interviews Acceptance Rate Comparison</b>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center py-0">
                A2SV students are 30 times more likely to pass Google internship interviews than average candidates.
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <h1 :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-5':$vuetify.breakpoint.smAndUp, 'text-center':$vuetify.breakpoint.smAndUp}">
        Impact Stories
      </h1>
      <v-row class="pa-lg-12 pa-sm-5">
        <v-col
          v-for="(story, i) in getImpactStories"
          :key="i"
          class="mx-auto"
          cols="12"
          md="6"
        >
          <v-card outlined style="height: 100%" class="mx-md-5 my-3" color="#efefff">
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
                border: 2px solid #66666C55;
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
    <v-container class="my-12 py-12">
      <v-col sm="12" justify="center" align="center" class="my-10">
        <a href="https://www.undp.org/content/undp/en/home/sustainable-development-goals.html" target="_blank">
          <v-img
            sm="6"
            max-height="38em"
            max-width="38em"
            src="un/un_logo.png"
          />
        </a>
      </v-col>

      <v-row class="mb-12" justify="center">
        <v-col
          v-for="(u, ind) in un"
          :key="ind"
          class="d-flex child-flex"
          md="2"
          sm="4"
          cols="6"
        >
          <v-card class="mx-auto shadow box" :href="u.link" target="_blank">
            <v-img
              aspect-ratio="1"
              :src="'/un/' + u.img"
            />
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-md-10 py-12">
        <div class="col-md-11 ml-auto mr-auto text-center">
          <h1 style="line-height:1.2" :class="{'subheading': $vuetify.breakpoint.smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp}" class="my-5">
            Do you want to contribute to the digital transformation of Africa?
          </h1>
          <v-btn
            x-large
            color="primary"
            class="text-capitalize mt-10 mb-5 box shadow"
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
import { mdiChevronDoubleDown } from "@mdi/js";

export default {
  name: "LandingPage",
  components: {
    Partners
  },
  data() {
    return {
      mdiChevronDoubleDown,
      paused: false,
      target: "#first-container",
      options: {
        duration: 1000,
        offset: 0,
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
          color: "pink",
          year: "November, 2019",
          desc: "A2SV was founded in Ethiopia."
        },
        {
          color: "success",
          year: "February, 2020",
          desc: "We formed partnerships with Google, Palantir and Coinbase."
        },
        {
          color: "accent",
          year: "March, 2020",
          desc:
            "27% of our first group of trainees passed Google internship interviews after 3 months of training."
        },
        {
          color: "warning",
          year: "October, 2020",
          desc:
            "Our students created a COVID-19 tracking app -<a href= 'https://tracksym.app/' target='_blank'> TrackSym </a> - for Ethiopia’s Ministry of Health."
        },
        {
          color: "primary",
          year: "January, 2021",
          desc:
            "62% of our first group of trainees passed Google internship interviews after the second round of training."
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
      if (this.$vuetify.breakpoint.lgAndUp) return 400;
      if (this.$vuetify.breakpoint.mdAndUp) return 450;
      return 250;
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
.timeline-year-txt {
  font-size: medium  !important;
}
.box:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1) !important;
}
.unbox:hover {
  box-shadow: rgb(75, 69, 69) 0 5px 15px !important;
}
/* animations */

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
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
