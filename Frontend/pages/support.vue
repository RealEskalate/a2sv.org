<template>
  <div>
    <banner
      class="align-self-center"
      img-width="10rem"
      img="donate.svg"
      :title="banner.title_one"
      :description="banner.description"
      :class="{ 'pb-5': $vuetify.breakpoint.smAndDown }"
      scroll-target="#our-needs"
    >
      <div class="mx-auto" style="width: min-content">
        <transition duration="200">
          <v-btn
            large
            color="primary"
            class="mt-10 mb-5 box shadow"
            target="_blank"
            href="https://donorbox.org/a2sv-donation"
          >
            Donate
          </v-btn>
        </transition>
      </div>
    </banner>
    <div id="our-needs" class="my-10 px-10">
      <v-row>
        <v-col cols="12" md="9">
          <h1 class="display-2 text-center my-12 py-8">
            What We Need
          </h1>
          <v-card class="shadow-lg overflow-hidden pop-in">
            <scroll-snap>
              <v-row v-for="(way, i) in support_ways" :key="'way' + i" class="my-10 mt-12 px-8 item grey lighten-4">
                <v-col v-for="j in 2" :key="'col' + j" cols="12" md="6" class="pa-md-5 d-flex align-center">
                  <div v-if="(i + j) % 2">
                    <h1 class="mb-5 display-2 text-md-left text-center">
                      {{ way.title }}
                    </h1>
                    <p style="font-size: 1.5rem" class="text-md-left text-center">
                      {{ way.description }}
                    </p>
                  </div>
                  <v-img
                    v-else-if="$vuetify.breakpoint.lgAndUp"
                    :src="`https://res.cloudinary.com/dfc7snpy5/image/upload/v1613553337/a2sv/${way.img}`"
                    contain
                  />
                  <!--                  <cld-image-->
                  <!--                    v-else-if="$vuetify.breakpoint.lgAndUp"-->
                  <!--                    style="border: 2px solid #d4e5ff; border-radius: 200px"-->
                  <!--                    loading="lazy"-->
                  <!--                    crop="scale"-->
                  <!--                    responsive-->
                  <!--                    fetch-format="auto"-->
                  <!--                    quality="auto"-->
                  <!--                    class="z-index-1 overflow-hidden"-->
                  <!--                    :public-id="way.img"-->
                  <!--                  />-->
                </v-col>
              </v-row>
            </scroll-snap>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="d-flex align-center">
          <div class="full-width px-md-2 pt-md-12 mt-md-12">
            <h1 class="display-2 text-center my-10 pt-5">
              Contact Us
            </h1>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="contact.name"
                filled
                class="v-card--shaped"
                rounded
                hide-details
                dense
                :label="labels.name"
                :rules="rules.nameRules"
                counter="30"
              />
              <v-text-field
                v-model="contact.email"
                class="v-card--shaped my-4"
                filled
                rounded
                hide-details
                dense
                :label="labels.email"
                :rules="rules.emailRules"
              />
              <v-select
                v-model="contact.way"
                filled
                rounded
                hide-details
                dense
                class="v-card--shaped my-4"
                label="Way of helping"
                :items="['Q&A', 'Recruit', 'Mentor', 'Other']"
                :rules="rules.waysRules"
              />
              <v-textarea
                v-model="contact.experience"
                filled
                rounded
                hide-details
                dense
                class="v-card--shaped my-4"
                rows="5"
                :label="labels.experience"
                :rules="rules.experienceRules"
              />
              <div class="text-center py-3">
                <v-btn
                  :loading="loading"
                  :disabled="!valid"
                  width="100"
                  class="primary mx-auto"
                  @click="sendForm"
                >
                  Send
                  <v-icon class="ml-2" small />
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row class="my-md-10 py-12">
      <v-container class="text-center">
        <h1 style="line-height:1.2" :class="{'subheading': $vuetify.breakpoint.smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp}" class="my-5">
          Do you want to contribute to the digital transformation of Africa?
        </h1>
        <v-btn
          x-large
          color="primary"
          class="mt-10 mb-5 box shadow"
          target="_blank"
          href="https://donorbox.org/a2sv-donation"
        >
          Donate
        </v-btn>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import Banner from "@/components/core/TextOnlyBanner";
import { mdiCloseCircleOutline } from "@mdi/js";
import goTo from "vuetify/es5/services/goto";
import ScrollSnap from "@/components/core/ScrollSnap";

export default {
  components: {
    ScrollSnap,
    Banner
  },
  filters: {
    uppercase(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  data: () => ({
    mdiCloseCircleOutline,
    loading: false,
    showAlert: false,
    type: "success",
    message: "",
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be a part of our journey",
      title_two: "Support us",
      description: "A2SV covers basic needs of students such as internet connection, meals, etc. Your financial support will help keep our academy up, but you can also help in other ways."
    },
    donateLocation: "#donate",
    engineerLocation: "form",
    options: {
      duration: 1000,
      offset: 50,
      easing: "easeInOutCubic"
    },
    form_type: "",
    forms: ["Interviews", "Mentorship", "Q & A"],
    valid: false,
    contact: {
      name: "",
      email: "",
      way: "",
      experience: ""
    },
    labels: {
      name: "Name",
      email: "Email",
      linkedin: "LinkedIn Profile URL (Optional)",
      experience: "Experience"
    },
    rules: {
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      waysRules: [(v) => !!v || "Way of helping is required"],
      experienceRules: [
        (v) => !!v || "Experience is required",
        (v) =>
          (v && v.length <= 150) ||
          "Experience must be less than 150 characters"
      ]
    },
    support_ways: [
      {
        title: "Interviews",
        description:
          "Our students are working towards world class internships and full-time opportunities. We are not asking for positive discrimination, but a chance to shine. You can help us by offering interviews.",
        img: "interview_gsd5h5.svg"
      },
      {
        title: "Mentorships",
        description:
          "Our students are quite talented, however, they still need experience. If you have relevant skills to guide us on our journey, you can help us by offering mentorships.",
        img: "mentor_p6vtvg.svg"
      },
      {
        title: "Q&A Guests",
        description:
          "Our students learn a lot from connecting with experts in different domains. If you have interesting stories or experiences to share, you can help us by becoming our Q&A guest.",
        img: "Q_A_wxmeyt.svg"
      },
      {
        title: "Mock Interviews",
        description:
          "Our students benefit from exposure to real interview conditions. If you conduct coding interviews at top tech companies, you can help us by providing mock interviews.",
        img: "interview_gsd5h5.svg"
      },
      {
        title: "Educational Partnerships",
        description:
          "We started from Ethiopia and want to expand to more African countries. You can help us by initiating an educational partnership with other African universities.",
        img: "Q_A_wxmeyt.svg"
      }
    ]
  }),
  head: {
    title: "Support Us"
  },
  methods: {
    sendForm() {
      this.loading = true;
      this.$axios
        .post("/api/support", this.contact)
        .then(
          () => {
            this.showAlert = true;
            this.type = "success";
            this.message = "Successful! We'll get back to you ASAP.";
            this.$refs.form.reset();
          },
          () => {
            this.showAlert = true;
            this.type = "danger";
            this.message = "Something went wrong. Please try again later.";
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
    scrollDown(title) {
      if (title === "Donate") {
        // return window.location.href = "https://donorbox.org/a2sv-donation";
        return goTo(this.donateLocation, this.options);
      }
      let supportWay = "";
      switch (title) {
        case "Internship Interviews":
          supportWay = "Recruit";
          break;
        case "Be a Q&A guest":
          supportWay = "Q&A";
          break;
        case "Be a Mentor":
          supportWay = "Mentor";
          break;
        default:
          supportWay = "Other";
      }
      this.contact.way = supportWay;
      return goTo(this.engineerLocation, this.options);
    }
  }
};
</script>

<style scoped>
.contact-us {
  background: rgba(255, 255, 255, 0.8) !important;
}
.toggle-active {
  color: white;
  font-weight: bold;
}

.header-button {
  animation-delay: 1.1s;
}

.display-2 {
  font-weight: 800;
}
.v-list-item__subtitle {
  font-size: 18px;
}
.v-text-field {
  border-radius: 8px !important;
}
.recruit-illustration {
  background: url('/illustrations/character-15.svg') no-repeat center;
  background-size: contain;
}
.donate-illustration {
  background: url('/illustrations/donate.svg') no-repeat center;
  background-size: contain;
}
.item {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  min-height: 60vh;
}
.full-width {
  width: 100%;
}
</style>

<style>
.scroll-snap-container {
  height: 60vh;
  width: 100%;
}
</style>
