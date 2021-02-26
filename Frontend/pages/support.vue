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
    <div id="our-needs" class="my-10 px-md-10 px-4">
      <v-row>
        <v-col cols="12" md="9">
          <h1 class="display-2 text-center my-12 mb-8 py-8">
            What We Need
          </h1>
          <div>
            <v-row v-for="(way, i) in support_ways" :key="'way' + i" class="px-8 py-3 pop-in">
              <v-col
                v-for="j in 2"
                :key="'col' + j"
                cols="12"
                md="6"
                class="pa-md-5 d-flex align-center"
                style="max-height: 100%"
              >
                <div v-if="(i + j) % 2">
                  <h1
                    :class="$vuetify.breakpoint.mdAndDown ? 'display-1 font-weight-bold' : 'display-2'"
                    class="mb-5 text-md-left text-center"
                  >
                    {{ way.title }}
                  </h1>
                  <p style="font-size: 1.5rem" class="text-md-left text-center black--text">
                    {{ way.description }}
                  </p>
                </div>
                <v-img
                  v-else
                  max-width="100%"
                  max-height="100%"
                  class="my-5"
                  :src="`https://res.cloudinary.com/dfc7snpy5/image/upload/v1613553337/a2sv/${way.img}`"
                  contain
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div
            class="contact-us-container px-md-2"
          >
            <h1 class="display-2 text-center my-12 mb-8 pt-8">
              Contact Us
            </h1>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="contact.name"
                v-bind="common_form_props"
                :label="labels.name"
                :rules="rules.nameRules"
                counter="30"
              />
              <v-text-field
                v-model="contact.email"
                v-bind="common_form_props"
                :label="labels.email"
                :rules="rules.emailRules"
              />
              <v-select
                v-model="contact.way"
                v-bind="common_form_props"
                :label="labels.way"
                :items="support_forms"
                :rules="rules.waysRules"
              />
              <v-textarea
                v-model="contact.experience"
                v-bind="common_form_props"
                :label="labels.experience"
                :rules="rules.experienceRules"
                rows="5"
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
import { mdiCircleMedium, mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Banner from "@/components/core/TextOnlyBanner";
import goTo from "vuetify/es5/services/goto";

export default {
  components: {
    Banner
  },
  filters: {
    uppercase(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  data: () => ({
    mdiChevronLeft,
    mdiChevronRight,
    mdiCircleMedium,
    loading: false,
    showAlert: false,
    type: "success",
    message: "",
    model: 0,
    carousel: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be a part of our journey",
      title_two: "Support us",
      description: "A2SV covers basic needs of students such as internet connection, meals, etc. Your financial support will help keep our academy up, but you can also help in other ways."
    },
    common_form_props: {
      "filled": true,
      "rounded": true,
      "hide-details": true,
      "dense": true,
      "class": "v-card--shaped my-4"
    },
    donateLocation: "#donate",
    engineerLocation: "form",
    options: {
      duration: 1000,
      offset: 50,
      easing: "easeInOutCubic"
    },
    form_type: "",
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
      experience: "Experience",
      way: "Way of helping"
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
        img: "Mock_Interview_yzmgu8.svg"
      },
      {
        title: "Educational Partnerships",
        description:
          "We started from Ethiopia and want to expand to more African countries. You can help us by initiating an educational partnership with other African universities.",
        img: "Educational_Partnership_uzpgua.svg"
      }
    ]
  }),
  head: {
    title: "Support Us"
  },
  computed: {
    support_forms() {
      return this.support_ways.map(way => way.title.slice(0, -1));
    }
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
.contact-us-container {
  position: sticky;
  top: 75px
}
</style>

<style>
.v-carousel__controls__item {
  color: #1161F7 !important;
}
</style>
