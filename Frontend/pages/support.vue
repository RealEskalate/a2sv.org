<template>
  <div>
    <Banner
      img-width="10rem"
      img="/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    />

    <v-container style="margin-top: -90px">
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
  head: {
    title: "Support Us"
  },
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
