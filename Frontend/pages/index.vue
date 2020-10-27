<template>
  <v-container class="mt-12">
    <v-container>
      <v-row style="mt-10">
        <v-col cols="12" sm="5">
          <h2 class="motto">Creating opportunities for african students</h2>
          <p
            class="description blackish mt-md-7"
            style="
              font-size: 22px;
              line-height: 36px;
              font-family: Lato, sans-serif !important;
            "
          >
            A2SV offers training program that initially focuses on
            problem-solving and personal development.
          </p>
          <button class="btn">Learn More</button>
        </v-col>
        <v-col cols="12" sm="7" class="px-5 mx-auto" max-height="60vh">
          <v-sheet class="elevation-4">
            <vue-plyr>
              <video
                poster="/banner.jpg"
                src="/video.webm"
                width="750px"
                style="background: transparent !important"
              ></video>
            </vue-plyr>
          </v-sheet>
        </v-col>
      </v-row>
      <div class="about-us my-10">
        <div class="row">
          <v-col cols="10" sm="6" md="3" class="mx-auto">
            <v-card class="shadow" style="height: 100%; padding: 5px">
              <v-img src="/train.svg" style="max-height: 15rem" />
              <v-card-text>
                First training initially focuses on problem-solving and personal
                development.
              </v-card-text>
              <v-card-actions>
                <button class="btn programmes" style="position: absolute">
                  Learn More
                </button>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="10" sm="6" md="3" class="mx-auto">
            <v-card class="shadow" style="padding: 5px">
              <v-img src="/mock.svg" style="max-height: 15rem" />
              <v-card-text>
                Mock interviews with peers, other trainees, and industry
                professionals in the Silicon valley.
              </v-card-text>
              <v-card-actions>
                <button class="btn programmes">Learn More</button>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="10" sm="6" md="3" class="mx-auto">
            <v-card class="shadow" style="height: 100%; padding: 5px">
              <v-img src="/work.svg" style="max-height: 15rem" />
              <v-card-text>
                Trainees work on social projects with industry experts.
              </v-card-text>
              <v-card-actions>
                <button class="btn programmes" style="position: absolute">
                  Learn More
                </button>
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </div>
      <div class="about-us mt-md-5">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="page-titles">Achievements</h2>
            <p class="description blackish mt-md-7">
              First trainees achieved an unheard rate of 27% acceptance at
              Google software engineering internship interviews.
            </p>
          </div>
          <v-card
            class="row col-sm-8 px-0 py-0 shadow mx-auto my-4"
            style="border-radius: 10px"
          >
            <v-img
              src="/banner.jpg"
              class="col-sm-6"
              style="max-height: 26rem; vertical-align: top"
            />
            <p
              class="col-sm-6 blackish px-5 py-4"
              style="line-height: 30px; font-size: 17px"
            >
              Before I joined A2SV, I was clueless on what path to take in order
              to become a good programmer. But after I joined the A2SV team, it
              showed me one better direction to reach the level that I want to
              get to. The challenges and the problems we solve every day has
              showed to pay attention to the important parts of any problem and
              come up with an efficient solution. <br />
              <b class="blackish" style="font-size: 16px"
                >Mohammed Alewi, 4th year SE student</b
              >
            </p>
          </v-card>
        </div>
      </div>
    </v-container>

    <v-row class="my-md-10">
      <h2 class="page-titles col-12 mb-5 text-center mx-auto">You can help</h2>
      <v-col cols="12" sm="5" class="mx-auto" style="height: 100%">
        <v-card class="shadow px-5 py-10" min-height="268">
          <h1 class="ml-5 mb-3" style="font-family: Lato, sans-serif">
            Become A2SV partner
          </h1>
          <p class="donate-p px-5">
            Interview these folks for software engineering internship positions
            at your company.
          </p>
          <p class="px-5 donate-p">Our partners are:</p>
          <v-row class="mx-auto px-3">
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
          <v-card-actions>
            <button class="btn mt-2 mb-0">Learn More</button>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="5" class="mx-auto">
        <v-card
          class="shadow px-5 py-10 donate"
          height="100%"
          style="border-radius: 10px"
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
              dark
              outlined
              style="
                border-color: #d4c1c1 !important;
                bottom: 3.2rem;
                position: absolute;
              "
              >Donate</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      icons: [
        { logo: 'google-icon.svg', width: '2rem' },
        { logo: 'palantir-icon.svg', width: '30rem' },
        { logo: 'coinbase-icon.svg', width: '15rem' },
        { logo: 'eskalate-icon.svg', width: '3rem' },
        // { logo: 'aau-icon.webp', width: '3rem' },
      ],
    }
  },
}
</script>
<style>
@import 'node_modules/vuetify/dist/vuetify.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.css';
.motto {
  font-family: Lato, serif !important;
  color: #334ac0 !important;
  font-size: clamp(1rem, 0.4231rem + 2.5641vw, 3.5rem) !important;
  line-height: 8vh;
  font-weight: 900;
}
.page-titles {
  font-family: Lato, serif !important;
  color: #2b2a35;
  font-size: 36px;
  line-height: 30px;
  font-weight: 800;
}
.blackish {
  color: #545465;
  font-size: 18px;
  line-height: 32px;
  font-family: 'Nunito', sans-serif;
}
.donate {
  border-radius: 10px;
  background: linear-gradient(91.56deg, #5772f6 0, #8253ff 122.55%);
  color: #f1f0f0 !important;
}
.donate-p {
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.2px;
  font-family: 'Nunito', sans-serif;
}
.btn {
  background-color: #5772f6;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 18px;
  text-decoration: none;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.btn:hover {
  background: #5772f6 linear-gradient(to bottom, #5772f6 5%, #8253ff 100%);
}
.btn:active {
  position: relative;
  background: #5772f6 !important;
  top: 1px;
}
.btn:focus {
  background-color: #5772f6;
}
.shadow {
  --plyr-color-main: #334ac0;
  /*--plyr-video-control-color: #fff;*/
}
.v-tab {
  font-family: Lato, sans-serif !important;
  text-transform: capitalize !important;
  font-size: 16px;
  line-height: 16px;
}
.programmes {
  max-width: 8rem;
  bottom: 1rem;
  font-size: 12.5px;
}
</style>
