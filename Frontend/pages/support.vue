<template>
  <div>
    <Banner
      img-width="10rem"
      img="/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    />

    <v-container style="margin-top: -75px">
      <v-row class="mb-10">
        <v-col
          v-for="(support, i) in support_ways"
          :key="i"
          cols="10"
          sm="6"
          md="3"
          class="mx-auto"
        >
          <v-card
            class="shadow-sm d-flex flex-column"
            style="height: 100%"
          >
            <v-card-title class="justify-center" style="color: #545465">
              {{ support.title | uppercase }}
            </v-card-title>
            <v-card-text class="text-center">
              {{ support.description }}
            </v-card-text>
            <v-spacer />
            <v-card-actions class="justify-center">
              <v-btn v-if="support.title === 'Donate'" outlined class="text-capitalize my-3" color="primary">
                {{ support.button_text }}
              </v-btn>
              <v-btn
                v-else
                v-scroll-to="{
                  el: '#form_card',
                  offset: -60,
                }"
                outlined
                class="text-capitalize my-3"
                color="primary"
                @click="showForm(support.title)"
              >
                {{ support.button_text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div id="form_card">
        <InterviewForm v-if="getForm(0)" />
        <MentorshipForm v-if="getForm(1)" />
        <QandAForm v-if="getForm(2)" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Core/TextOnlyBanner";

export default {
  components: {
    Banner,
    InterviewForm: () => import("@/components/Support/InterviewForm"),
    MentorshipForm: () => import("@/components/Support/MentorshipForm"),
    QandAForm: () => import("@/components/Support/QandAForm")
  },
  filters: {
    uppercase(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be part of our journey",
      title_two: "Support us",
      description: "You are helping A2SV to train more students in Africa"
    },
    support_ways: [
      {
        title: "Donate",
        description:
          "Help upskill more developers and launch new digital solution in Africa",
        button_text: "Go To PayPal"
      },
      {
        title: "Interviews",
        description:
          "Connect our students with your company for internship positions",
        button_text: "Contact Us"
      },
      {
        title: "Mentorship",
        description: "We want experienced people to guide our students",
        button_text: "Contact Us"
      },
      {
        title: "Q & A",
        description:
          "Share your story with us and let's have a fun Q & A session",
        button_text: "Request"
      }
    ],
    form_type: "",
    forms: ["Interviews", "Mentorship", "Q & A"]
  }),
  methods: {
    showForm(title) {
      this.form_type = title;
    },
    getForm(id) {
      return this.form_type === this.forms[id];
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
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
.programmes {
  max-width: 8rem;
  bottom: 1rem;
  font-size: 12.5px;
}
.page-titles {
  font-family: Lato, serif !important;
  color: #2b2a35;
  font-size: 36px;
  line-height: 30px;
  font-weight: 800;
}
.card-outter {
  position: relative;
  padding-bottom: 200px;
}
.card-actions {
  position: absolute;
  bottom: 5px;
  left: 10px;
}
</style>
