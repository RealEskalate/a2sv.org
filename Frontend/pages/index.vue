<template>
  <div>
    <video-background
      src="/videoplayback.mp4"
      poster="/team/lidia.webp"
      :style="`height: ${$vuetify.breakpoint.mdAndUp ? '75vh' : '100vh'}`"
      style="max-height: 900px; margin-top: -65px;"
      overlay="rgba(0, 0, 0, 0.25)"
    >
      <div
        class="d-flex align-center justify-center my-3"
        style="height: 100%"
      >
        <div
          class="pa-8 text-center col-md-9"
          style="color: #d9d9d9"
        >
          <h2 class="display-3 text-uppercase text-bold">
            Creating opportunities for African Students
          </h2>
          <p
            class="mt-7"
            style="
            font-size: 22px;
            line-height: 36px;
            font-family: Lato, sans-serif !important;
            "
          >
            Helping students get equal opportunities as the rest of the world.
          </p>
        </div>
      </div>
    </video-background>

    <v-container class="mt-md-12 pa-5" style="background: url('bg.svg')">
      <v-row class="my-md-6">
        <v-col sm="12" md="6" class="my-md-12">
          <h1 class="display-2 text-uppercase my-3" style="font-weight: 800">
            offers a 360° training
          </h1>
          <p class="" style="font-size: 1.5rem;">
            A2SV offers a 360° software engineer training program that initially
            focuses on problem-solving and personal development.
          </p>
        </v-col>
        <v-col sm="12" md="6" style="margin-top: -5%">
          <v-img src="/landing/group.webp" />
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col sm="12" md="6" class="mt-12">
          <v-img
            max-width="75%"
            class="d-inline-flex"
            src="/landing/selid.webp"
            style="z-index: 1"
          />
          <v-img
            width="12rem"
            class="d-inline-block tracksym"
            src="https://eskalate.io/img/tracksym.svg"
          />
        </v-col>
        <v-col sm="12" md="6" class="my-md-12">
          <h1 class="display-2 text-uppercase my-3" style="font-weight: 800">
            Develop scalable products
          </h1>
          <p style="font-size: 1.5rem;">
            Trainees work on social projects with industry experts.
            <a href="https://tracksym.app" target="_blank">Tracksym</a> is an ongoing project which the first
            trainees, closely worked with <a href="https://www.ephi.gov.et/" target="_blank">EPHI</a>,
            have worked on.
          </p>
        </v-col>
      </v-row>

      <v-row class="px-10 my-12">
        <div class="col-md-8 mx-auto text-center">
          <h1 class="display-2 text-uppercase my-3" style="font-weight: 800">
            Within 3 months
          </h1>
          <p class="mt-md-7 blackish" style="font-size: 1.5em">
            Statistics shows that google's internship acceptance rate is only <b>2%</b>.
            Our first trainees achieved an unheard rate of <b>27%</b> acceptance at
            Google software engineering internship interviews.
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
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                cover
                src="/team/ise_transparent.webp"
                style="height: 90%"
              />
            </v-col>
            <v-col class="pa-12" cols="12" sm="10" md="6" style="margin-left: -5em; margin-top: -2em;">
              <p class="quote">
                Before I joined A2SV, I was clueless on what path to take in order
                to become a good programmer. But after I joined the A2SV team, it
                showed me one better direction to reach the level that I want to
                get to. The challenges and the problems we solve every day has
                showed to pay attention to the important parts of any problem and
                come up with an efficient solution.
              </p>
              <span
                class="d-inline pl-md-4"
                style="font-size: 14px"
              >
                &ndash; Ise Boge, 4th year SE student
              </span>
              <br>
              <v-btn class="mt-5 button-fill-bottom" to="/">
                More Impact stories
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <div class="grey lighten-4 mt-10 text-center">
      <partners />
    </div>
    <v-container>
      <v-row class="my-md-10 py-12">
        <div class="col-md-11 ml-auto mr-auto text-center">
          <h1 class="display-2 blackish text-center" style="line-height: 70px;">
            Do you want to be part of the digital transformation of Africa?
          </h1>
          <v-btn
            x-large
            outlined
            class="text-capitalize mt-10 mb-5 button-fill-bottom"
            to="/support"
          >
            Join us
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Partners from "@/components/Core/Partners";

export default {
  name: "LandingPage",
  components: {
    Partners
  },
  data() {
    return {
      actions: [
        { image: "/train.svg", action: "Learn More", description: "First training initially focuses on problem-solving and personal development.", link: "/" },
        { image: "/mock.svg", action: "Learn More", description: "Mock interviews with peers, other trainees, and industry professionals.", link: "/" },
        { image: "/work.svg", action: "Learn More", description: "Trainees work on social projects with industry experts.", link: "/" }
      ]
    };
  },
  head: {
    title: "Welcome"
  },
  mounted() {
    this.$store.dispatch("setActiveLink", "transparent");
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.top.scrollY < 65) {
        this.$store.dispatch("setActiveLink", "transparent");
      } else {
        this.$store.dispatch("setActiveLink", "colored");
      }
    }
  }
};
</script>
<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.css';
.motto {
  font-family: Lato, serif !important;
  color: #334ac0 !important;
  font-size: clamp(2rem, 0.5rem + 2.6vw, 4rem) !important;
  line-height: clamp(3rem, 0.8rem + 2.8vw, 4rem) !important;
  font-weight: 900;
}
.blackish {
  color: #545465;
  font-size: 18px;
  line-height: 32px;
  font-family: 'Nunito', sans-serif;
}
.donate {
  border-radius: 10px;
}
.donate-p {
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
}
.plyr {
  --plyr-color-main: #334aC0;
  /*--plyr-video-control-color: #fff;*/
}

.quote {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid #334aC0;
  font-weight: 100;
  line-height: 2em;
  font-size: 1.25em;
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
.button-fill-bottom {
  color: #2b2a35;
  box-shadow: inset 0 0 0 #2b2a35 !important;
  transition: ease-in 0.5s !important;
}

.button-fill-bottom:hover {
  color: white!important;
  box-shadow: inset 0 -80px 0 #2b2a35 !important;
}

.display-1, .display-2 {
  color: #2b2a35!important;
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
</style>
