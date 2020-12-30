<template>
  <div>
    <video-background
      src="/videoplayback.mp4"
      poster="/team/lidia.webp"
      :style="`height: ${$vuetify.breakpoint.mdAndUp ? '75vh' : '100vh'}`"
      style="max-height: 900px; margin-top: -65px;"
      overlay="linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(51,73,192,0.2) 20%)"
    >
      <div
        class="d-flex align-center justify-center"
        style="height: 100%"
      >
        <v-container
          class="pa-8 text-center"
          :style="`width: ${$vuetify.breakpoint.mdAndUp ? '50%' : '90%'}`"
          style="background: rgba(250, 250, 250, 0.55)"
        >
          <h2 class="motto">
            Opportunities for African Students
          </h2>
          <p
            class="grey--text text--darken-2 mt-7"
            style="
              font-size: 22px;
              line-height: 36px;
              font-family: Lato, sans-serif !important;
            "
          >
            A2SV - Africa to Silicon Valley, offers training program that initially focuses on
            problem-solving and personal development.
          </p>
        </v-container>
      </div>
    </video-background>

    <v-container class="mt-md-12">
      <v-row class="my-12 py-12 px-5">
        <v-col
          v-for="(action, i) in actions"
          :key="'action' + i"
          cols="12"
          sm="10"
          md="4"
          class="px-md-10"
        >
          <v-card class="shadow-sm pa-5" style="height: 100%;">
            <v-img :src="action.image" style="max-height: 15rem" />
            <p class="body-1 mt-8 mb-6 text-center">
              {{ action.description }}
            </p>
            <v-card-actions>
              <v-btn
                small
                depressed
                outlined
                color="primary"
                style="
                    bottom: 1rem;
                    left: 33%;
                    position: absolute;
                  "
                class="text-capitalize"
              >
                {{ action.action }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="px-10 my-12">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="display-1 font-weight-bold">
            Within 3 months
          </h2>
          <p class="mt-md-7 blackish" style="font-size: 1.5em">
            First trainees achieved an unheard rate of 27% acceptance at
            Google software engineering internship interviews.
          </p>
        </div>
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
            <v-col class="pa-12" cols="12" sm="6" style="margin-left: -5em; margin-top: -2em;">
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
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <div class="grey lighten-4 mt-10 text-center">
      <v-container>
        <h1 class="display-1 mb-10 mt-5" style="color: #2b2a35; font-weight: 700">
          We are closely working with
        </h1>
        <v-slide-group class="my-6">
          <template v-for="(icon, n) in icons">
            <v-slide-item :key="n" class="align-self-center">
              <v-img :src="icon" color="grey" contain height="40" width="128" />
            </v-slide-item>
            <v-responsive
              v-if="n < 3"
              :key="`divider-${n}`"
              class="text-center"
              height="56"
              width="48"
            >
              <v-divider vertical />
            </v-responsive>
          </template>
        </v-slide-group>
      </v-container>
    </div>
    <v-container>
      <v-row class="my-md-10 py-12">
        <div class="col-md-11 ml-auto mr-auto text-center">
          <h1 class="display-2 blackish text-center" style="line-height: 70px;">
            The solutions are within reach. Your support will help us to train more smart students across Africa.
          </h1>
          <v-btn
            x-large
            outlined
            class="text-capitalize mt-10 mb-5 button-fill-bottom"
            color="primary"
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
export default {
  name: "LandingPage",
  data() {
    return {
      icons: [
        "./partners/google.svg",
        "./partners/coinbase.svg",
        "./partners/palantir.svg",
        "./partners/aau.svg"
        // { logo: 'aau-icon.webp', width: '3rem' },
      ],
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


</style>
