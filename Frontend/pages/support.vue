<template>
  <div>
    <banner
      class="align-self-center"
      img-width="10rem"
      img="/illustrations/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    >
      <div class="mx-auto" style="width: min-content">
        <transition duration="200">
          <v-btn-toggle borderless light active-class="toggle-active" class="header-button animate-pop-in">
            <v-btn
              color="primary"
              x-large
              style="color: whitesmoke"
              @click="$vuetify.goTo(engineerLocation, options)"
            >
              Yes, I am
            </v-btn>
            <v-btn
              class="mx-auto"
              color="orange"
              dark
              x-large
              style="color: whitesmoke"
              @click="$vuetify.goTo(donateLocation, options)"
            >
              No, But wanna help
            </v-btn>
          </v-btn-toggle>
        </transition>
      </div>
    </banner>
    <div class="my-10 recruit-illustration">
      <v-container>
        <h1 class="display-2 text-center">
          How can I help?
        </h1>
        <v-col md="7" class="mx-auto mt-10 px-10">
          <p class="text-center text-body">
            If you are an engineer in silicon valley, you can help us by one of the following:
            <v-list class="transparent ml-5">
              <v-list-item v-for="(support, i) in support_ways" :key="i" three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-body text-left blue-black">
                    {{ support.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-left">
                    {{ support.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </p>
          <v-form ref="form" v-model="valid" class="mx-auto col-sm-10 col-md-8">
            <p class="text-body">
              Contact us
            </p>
            <v-text-field
              v-model="contact.name"
              filled
              class="v-card--shaped"
              rounded
              :label="labels.name"
              :rules="rules.nameRules"
              counter="30"
            />
            <v-text-field
              v-model="contact.email"
              class="v-card--shaped"
              rounded
              filled
              :label="labels.email"
              :rules="rules.emailRules"
            />
            <v-select
              filled
              rounded
              label="Way of helping"
              :items="['Q&A', 'Recruit', 'Mentor', 'Other']"
            />
            <v-textarea
              v-model="contact.experience"
              filled
              rounded
              class="v-card--shaped"
              rows="5"
              :label="labels.experience"
              :rules="rules.experienceRules"
            />
            <div class="text-center py-3">
              <v-btn width="100" class="primary mx-auto" @click="sendForm">
                Send
                <v-icon class="ml-2" small />
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-container>
    </div>
    <div
      id="donate-section"
      class="my-md-10 donate-illustration"
    >
      <v-container>
        <h1 class="display-2 text-center">
          Support A2SV by donation
        </h1>
        <p class="col-md-6 text-center mx-auto text-body mt-10">
          Your donation will help us to open offices for training in Africa. We are also covering basic needs of the
          trainees. Your donation will also help us to cover assistant lecturer's expenses. Just give us damn money.
          Just donate it.
          <br>
          Your donation will help us to open offices for training in Africa. We are also covering basic needs of the
          trainees. Your donation will also help us to cover assistant lecturer's expenses. Just give us damn money.
          Just donate it.
        </p>
        <v-btn color="primary d-block mx-auto my-0 pt-2" style="width: 7em" target="_blank" href="https://donorbox.org/a2sv-donation">
          Donate
        </v-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/core/TextOnlyBanner";

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
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be part of our journey",
      title_two: "Support us",
      description: "Are you a recruiter or an engineer working in one of silicon valley companies?"
    },
    donateLocation: 1800,
    engineerLocation: 650,
    options: {
      duration: 1000,
      offset: 100,
      easing: "easeInOutCubic"
    },
    form_type: "",
    forms: ["Interviews", "Mentorship", "Q & A"],
    valid: false,
    contact: {
      name: "",
      email: "",
      linkedin: "",
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
      experienceRules: [
        (v) => !!v || "Experience is required",
        (v) =>
          (v && v.length <= 150) ||
          "Experience must be less than 150 characters"
      ]
    },
    support_ways: [
      {
        title: "  Interviews",
        description:
          "Connect our students with your company for internship positions.",
        button_text: "Contact Us"
      },
      {
        title: "Mentorship",
        description: "We want experienced people to guide our students.",
        button_text: "Contact Us"
      },
      {
        title: "Q & A",
        description:
          "Share your story with us and let's have a fun Q & A session.",
        button_text: "Request"
      }
    ]
  }),
  head: {
    title: "Support Us"
  },
  methods: {
    sendForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.contact-us {
  background: rgba(255, 255, 255, 0.8)!important;
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
  border-radius: 8px!important;
}
.recruit-illustration {
  background: url("/illustrations/character-15.svg") no-repeat;
  background-size: 300px 600px;
}
.donate-illustration {
  background: url("/illustrations/donate.svg") no-repeat;
  background-size: 450px 500px;
}
</style>
