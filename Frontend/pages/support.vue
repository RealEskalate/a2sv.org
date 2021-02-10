<template>
  <div>
    <banner
      class="align-self-center"
      img-width="10rem"
      img="donate.svg"
      :title="banner.title_one"
      :description="banner.description"
      :class="{ 'pb-5': $vuetify.breakpoint.smAndDown }"
    >
      <div class="mx-auto" style="width: min-content">
        <transition duration="200">
          <v-btn-toggle
            borderless
            light
            active-class="toggle-active"
            class="header-button animate-pop-in"
          >
            <v-btn
              color="primary"
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.smAndDown"
              style="color: whitesmoke"
              @click="$vuetify.goTo(engineerLocation, options)"
            >
              Yes, I am
            </v-btn>
            <v-btn
              class="mx-auto"
              color="orange"
              dark
              :x-large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.smAndDown"
              style="color: whitesmoke"
              @click="$vuetify.goTo(donateLocation, options)"
            >
              No, but I wanna help
            </v-btn>
          </v-btn-toggle>
        </transition>
      </div>
    </banner>
    <div class="my-10">
      <v-container>
        <h1 class="display-2 text-center">
          How can I help?
        </h1>
        <v-row class="mt-10">
          <v-col cols="12" sm="12" md="6" class="pl-5">
            <p class="pl-4 text-body text-center">
              If you are working in a tech company
            </p>
            <carousel-3d
              v-if="support_ways"
              style="min-height: 100px"
              :border="0"
              :perspective="25"
              :inverse-scaling="300"
              :space="220"
              autoplay
              :display="3"
              :autoplay-timeout="5000"
              width="300"
            >
              <slide
                v-for="(support, i) in support_ways"
                :key="i"
                class="overflow-visible"
                :index="i"
                style="height: auto; background-color: transparent"
              >
                <v-card class="shadow" shaped>
                  <v-card-title
                    class="primary--text pb-2"
                    v-text="support.title"
                  />
                  <v-card-text v-text="support.description" />
                </v-card>
              </slide>
            </carousel-3d>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pl-5">
            <p class="pl-4 text-body text-center">
              If you are not a tech person
            </p>
            <carousel-3d
              v-if="support_ways"
              style="min-height: 100px"
              :border="0"
              :perspective="25"
              :inverse-scaling="300"
              :space="220"
              autoplay
              :display="3"
              :autoplay-timeout="5000"
              width="300"
            >
              <slide
                v-for="(support, i) in support_ways_non_tech"
                :key="i"
                class="overflow-visible"
                :index="i"
                style="height: auto; background-color: transparent"
              >
                <v-card class="shadow" shaped>
                  <v-card-title
                    class="primary--text pb-2"
                    v-text="support.title"
                  />
                  <v-card-text v-text="support.description" />
                </v-card>
              </slide>
            </carousel-3d>
          </v-col>
          <v-snackbar
            v-model="showAlert"
            rounded
            top
            :color="type"
            :timeout="5000"
          >
            <span class="ma-2" v-text="message" />
            <v-btn
              icon
              x-small
              class="float-right"
              color="white"
              @click="showAlert = false"
            >
              <v-icon v-text="mdiCloseCircleOutline" />
            </v-btn>
          </v-snackbar>
        </v-row>
        <v-row>
          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            cols="12"
            md="3"
            class="recruit-illustration transparent"
          />
          <v-col cols="12" md="9">
            <v-form
              ref="form"
              v-model="valid"
              class="mx-auto col-sm-10 col-md-8"
            >
              <h1 class="display-2 text-center my-8">
                Contact Us
              </h1>
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
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="donate-section" class="my-md-10">
      <v-row justify="center" align="center">
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          md="4"
          class="donate-illustration"
          style="min-height: 500px"
        />
        <v-col id="donate" md="7" class="text-center">
          <h1 class="display-2 text-center">
            Support A2SV by Donating
          </h1>
          <p class="text-body text-center mt-10 px-5">
            A2SV covers basic needs of students on their training such as
            Internet expenses, meals, etc. Also, our teachers are full-time
            teachers with no payment from the programme. In order to keep A2SV
            going strong, your donation will help a lot.
          </p>
          <v-btn
            x-large
            color="primary"
            class="mx-auto my-5"
            width="8em"
            target="_blank"
            href="https://donorbox.org/a2sv-donation"
          >
            Donate
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/core/TextOnlyBanner";
import { mdiCloseCircleOutline } from "@mdi/js";
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
    mdiCloseCircleOutline,
    loading: false,
    showAlert: false,
    type: "success",
    message: "",
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be part of our journey",
      title_two: "Support us",
      description: "Are you working in top tech companies?"
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
        title: "Internship Interviews",
        description:
          "If you are a recruiter, you can help us by recruiting our students for your companies internship positions. Otherwise, you can help us by becoming our referrals to your company and helping us get in contact with recruiters."
      },
      {
        title: "Be a Mentor",
        description:
          "You can teach our students and give guidance on their projects. Mentors teach our students about their fields in the tech industry to help them develop the necessary skills to succeed in that field."
      },
      {
        title: "Be a Q&A guest",
        description:
          "In our Q&A sessions, we try to learn about your life and your career journey. We would love to get to know your experiences in the industry as well as in your life."
      },
      {
        title: "Mock interviews",
        description:
          "We want our students to get the real experience of an interview before their real interviews. We are looking for engineers working in top companies to conduct mock interviews with our students exactly like they would conduct a real interview for their company."
      }
    ],
    support_ways_non_tech: [
      {
        title: "Donate",
        description:
          "A2SV covers basic needs of students on their training such as Internet expenses, meals, etc. Also, our teachers are full-time teachers with no payment from the programme. In order to keep A2SV going strong, your donation will help a lot."
      },
      {
        title: "Be a Q&A guest",
        description:
          "In our Q&A sessions we try to learn about your life and your career journey. We would love to get to know your experiences in the industry as well as in your life."
      },
      {
        title: "Project Advisory",
        description:
          "Even if you are not working in the tech world, you can still provide us guidance in our projects related to your field. We believe getting advice from the people working in the field we are trying to tackle is very important therefore feel free to reach out."
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
  background: url('/illustrations/character-15.svg') no-repeat;
  background-size: 300px 600px;
}
.donate-illustration {
  background: url('/illustrations/donate.svg') no-repeat;
  background-size: 450px 500px;
}
</style>
