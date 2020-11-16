<template>
  <div>
    <Banner
      img-width="10rem"
      img="/illustrations/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    />

    <v-container style="margin-top: -90px">
      <v-row class="mb-10">
        <template v-for="(support, i) in support_ways">
          <v-col
            :key="i"
            cols="10"
            sm="6"
            md="3"
            class="mx-auto"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="shadow-sm d-flex flex-column"
                style="height: 100%; background-color: rgba(255, 255, 255, 0.9)"
                :elevation="hover ? 10 : 2"
                :class="{ 'on-hover': hover }"
              >
                <!-- <v-img :src="support.image" class="mt-5" style="max-height: 15rem" /> -->
                <v-card-title class="justify-center" style="color: #545465">
                  {{ support.title | uppercase }}
                </v-card-title>
                <v-card-text class="text-center mt-3">
                  {{ support.description }} 
                  <div v-if="support.title === 'Donate'" class="mt-3">
                    Support A2SV from as little as $1 – and it only takes a minute. Thank you!
                  </div>
                  <div v-else class="mt-3">
                    <span class="display-2" style="display: block">
                      {{ supports[support.title].number }}
                    </span>
                    <span style="font-weight: bold">{{ supports[support.title].text }}</span>
                  </div>
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
            </v-hover>
          </v-col>
        </template>
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
        image: "/donate.svg",
        description:
          "Help upskill more developers and launch new digital solution in Africa.",
        button_text: "Go To PayPal"
      },
      {
        title: "Interviews",
        image: "/interview.svg",
        description:
          "Connect our students with your company for internship positions.",
        button_text: "Contact Us"
      },
      {
        title: "Mentorship",
        image: "/mock.svg",
        description: "We want experienced people to guide our students.",
        button_text: "Contact Us"
      },
      {
        title: "Q & A",
        image: "/question.svg",
        description:
          "Share your story with us and let's have a fun Q & A session.",
        button_text: "Request"
      }
    ],
    supports: {
      "Interviews": {
        number: "5",
        text: "companies working with us"
      },
      "Mentorship": {
        number: "10+",
        text: "mentors joined our team"
      },
      "Q & A": {
        number: "20+",
        text: "Q & As so far"
      }
    },
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
