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
        <div
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
        </div>
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
          <h2 class="display-2 font-weight-bold">
            Achievements
          </h2>
          <p class="mt-md-7 blackish">
            First trainees achieved an unheard rate of 27% acceptance at
            Google software engineering internship interviews.
          </p>
        </div>
        <div
          max-width="900"
          class="my-5 pa-0 mx-auto overflow-hidden"
          style="background-image: url('back.png'); background-size: cover;"
        >
          <v-row>
            <v-col class="pa-0" cols="12" sm="6">
              <v-img
                cover
                src="/ise_transparent.png"
                style="height: 100%"
              />
            </v-col>
            <v-col class="pa-12" cols="12" sm="6" style="margin-left: -5em; margin-top: -2em;">
              <p class="display-2 font-weight-bold pb-8">
                IMPACT STORY
              </p>
              <p
                style="line-height: 27px; font-size: 17px; font-style:italic;"
              >
                <span class="mx-3" style="font-size: x-large; font-weight: 600;">" </span>  Before I joined A2SV, I was clueless on what path to take in order
                to become a good programmer. But after I joined the A2SV team, it
                showed me one better direction to reach the level that I want to
                get to. The challenges and the problems we solve every day has
                showed to pay attention to the important parts of any problem and
                come up with an efficient solution. <span class="mx-2" style="font-size: x-large; font-weight: 600;">"</span> <br>
                <v-card-subtitle
                  style="font-size: 16px"
                >
                  Ise Boge, 4th year SE student
                </v-card-subtitle>
              </p>
            </v-col>
          </v-row>
        </div>
      </v-row>

      <v-row class="my-md-10 py-12">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="display-2 font-weight-bold">
            You Can Help
          </h2>
        </div>
        <v-row class="my-5 container">
          <v-col cols="12" sm="6" class="px-md-12">
            <v-card class="shadow-sm px-5 py-10" min-height="268">
              <h1 class="ml-5 mb-3" style="font-family: Lato, sans-serif">
                Become A2SV partner
              </h1>
              <p class="donate-p px-5">
                Interview these folks for software engineering internship positions
                at your company.
              </p>
              <p class="px-5 donate-p">
                Our partners are:
              </p>
              <v-row class="mx-auto px-3 my-5">
                <v-col
                  v-for="icon in icons"
                  :key="icon.logo"
                  cols="3"
                  align-self="center"
                  class="mx-auto"
                >
                  <v-img :src="icon.logo" :width="icon.width" />
                </v-col>
              </v-row>
              <v-card-actions class="mt-8">
                <v-btn
                  color="primary px-3"
                  style="
                bottom: 1.5rem;
                left: 37%;
                position: absolute;
              "
                  class="text-capitalize"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" class="px-md-12">
            <v-card
              class="shadow-sm px-5 py-10 donate"
              height="100%"
            >
              <h1
                class="text-center mb-3 text--white"
                style="font-family: Lato, sans-serif"
              >
                Donate Now
              </h1>
              <p class="donate-p px-5">
                Your donation can help A2SV to train more students across Africa.
              </p>
              <v-card-actions>
                <v-btn
                  outlined
                  color="white"
                  style="
                bottom: 1.5rem;
                left: 41%;
                position: absolute;
              "
                  class="px-3"
                >
                  Donate
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
        { logo: "./icons/google-icon.svg", width: "2rem" },
        { logo: "./icons/palantir-icon.svg", width: "30rem" },
        { logo: "./icons/coinbase-icon.svg", width: "15rem" },
        { logo: "./icons/eskalate-icon.svg", width: "3rem" }
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
  background: linear-gradient(90deg, #00aeef 0, #334aC0 122.55%);
  color: #f1f0f0 !important;
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
</style>
