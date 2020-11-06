<template>
  <div>
    <Banner
      img-width="10rem"
      img="/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    />

    <v-container style="margin-top: -5%">
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
            class="shadow"
            style="height: 100%; padding: 5px; background-color: white"
          >
            <v-img :src="support.image" style="max-height: 15rem" />
            <v-card-title style="color: #545465">
              {{ support.title | uppercase }}
            </v-card-title>
            <v-card-text>
              {{ support.description }}
            </v-card-text>
            <v-card-actions class="card-actions">
              <button v-if="support.title === 'Donate'" class="btn programmes">
                {{ support.button_text }}
              </button>
              <button
                v-else
                v-scroll-to="{
                  el: '#form_card',
                  offset: -60,
                }"
                class="btn programmes"
                @click="showForm(support.title)"
              >
                {{ support.button_text }}
              </button>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div id="form_card">
        <InterviewForm v-if="form_type['Interviews']" />
        <MentorshipForm v-if="form_type['Mentorship']" />
        <QandAForm v-if="form_type['Q & A']" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Core/TextOnlyBanner";
import InterviewForm from "@/components/Support/InterviewForm";
import MentorshipForm from "@/components/Support/MentorshipForm";
import QandAForm from "@/components/Support/QandAForm";

export default {
  components: {
    Banner,
    InterviewForm,
    MentorshipForm,
    QandAForm
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
        // image: 'https://i.ibb.co/Jn02MkP/donate.png',
        image: "/mock.svg",
        title: "Donate",
        description:
          "Help to upskill more developers and launch new digital solution in Africa.",
        button_text: "Go To PayPal"
      },
      {
        // image: 'https://i.ibb.co/GPLyPHM/hr.jpg',
        image: "/mock.svg",
        title: "Interviews",
        description:
          "Connect our students with your company for internship positions.",
        button_text: "Contact Us"
      },
      {
        // image:
        //   'https://i.ibb.co/4tsyJwp/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg',
        image: "/mock.svg",
        title: "Mentorship",
        description: "We want experienced people to guide our students.",
        button_text: "Contact Us"
      },
      {
        // image: 'https://i.ibb.co/GnnVbNf/q-a.jpg',
        image: "/mock.svg",
        title: "Q & A",
        description:
          "Share your story with us and let's have a fun Q & A session.",
        button_text: "Request"
      }
    ],
    form_type: {
      Interviews: false,
      Mentorship: false,
      "Q & A": false
    }
  }),
  methods: {
    showForm(title) {
      this.form_type[title] = true;
      for (const type in this.form_type) {
        if (type !== title) {
          this.form_type[type] = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
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
}
</style>
