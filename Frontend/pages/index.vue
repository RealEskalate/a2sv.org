<template>
  <v-container class="mt-md-12">
    <v-row class="my-12">
      <v-col cols="12" sm="5">
        <h2 class="motto">
          Creating opportunities for african students
        </h2>
        <p
          class="blackish mt-md-7"
          style="
              font-size: 22px;
              line-height: 36px;
              font-family: Lato, sans-serif !important;
            "
        >
          A2SV offers training program that initially focuses on
          problem-solving and personal development.
        </p>
        <v-btn class="text-capitalize" color="primary">
          Learn More
        </v-btn>
      </v-col>
      <v-col cols="12" sm="7" class="px-5 mx-auto" max-height="60vh">
        <v-card class="shadow-sm overflow-hidden">
          <vue-plyr>
            <video
              preload="none"
              poster="/lidia.webp"
              src="/video.webm"
              width="750px"
              style="background: transparent !important"
            />
          </vue-plyr>
        </v-card>
      </v-col>
    </v-row>

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
      <v-card
        max-width="900"
        class="shadow-sm my-5 pa-0 mx-auto overflow-hidden"
      >
        <v-row>
          <v-col class="pa-0" cols="12" sm="6">
            <v-img
              cover
              src="/ise.webp"
              style="height: 100%"
            />
          </v-col>
          <v-col class="pa-12" cols="12" sm="6">
            <p
              style="line-height: 30px; font-size: 17px"
            >
              Before I joined A2SV, I was clueless on what path to take in order
              to become a good programmer. But after I joined the A2SV team, it
              showed me one better direction to reach the level that I want to
              get to. The challenges and the problems we solve every day has
              showed to pay attention to the important parts of any problem and
              come up with an efficient solution. <br>
              <v-card-subtitle
                style="font-size: 16px"
              >
                Ise Boge, 4th year SE student
              </v-card-subtitle>
            </p>
          </v-col>
        </v-row>
      </v-card>
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
                <v-img :src="'/' + icon.logo" :width="icon.width" />
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
</template>
<script>
export default {
  name: "LandingPage",
  data() {
    return {
      icons: [
        { logo: "google-icon.svg", width: "2rem" },
        { logo: "palantir-icon.svg", width: "30rem" },
        { logo: "coinbase-icon.svg", width: "15rem" },
        { logo: "eskalate-icon.svg", width: "3rem" }
        // { logo: 'aau-icon.webp', width: '3rem' },
      ],
      actions: [
        { image: "/train.svg", action: "Learn More", description: "First training initially focuses on problem-solving and personal development.", link: "/" },
        { image: "/mock.svg", action: "Learn More", description: "Mock interviews with peers, other trainees, and industry professionals.", link: "/" },
        { image: "/work.svg", action: "Learn More", description: "Trainees work on social projects with industry experts.", link: "/" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("setActiveLink", "light");
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
