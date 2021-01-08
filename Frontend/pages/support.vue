<template>
  <div>
    <banner
      img-width="10rem"
      img="/illustrations/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    >
      <v-btn class="mx-auto d-block" color="primary">
        Donate
      </v-btn>
    </banner>

    <v-container style="margin-top: -9%">
      <v-card class="shadow mx-auto my-15 contact-us" max-width="800">
        <v-card-title class="justify-center display-1 blue-black">
          Contact Us
        </v-card-title>
        <v-row>
          <v-col sm="10" md="6">
            <p class="px-12 blue-black" style="font-size: 20px;">
              If you want to help A2SV by giving a mentorship, sharing your experience (Question and Answer),
              if you are a recruiter or even giving a general feedback fill this form. We will get back to you
              as soon as possible.
            </p>
          </v-col>
          <v-form ref="form" v-model="valid" class="px-12 col-md-6 col-sm-10" style="border-left: 0.2em solid #0a61f7;">
            <v-text-field
              v-model="contact.name"
              class="v-card--shaped"
              dense
              :label="labels.name"
              :rules="rules.nameRules"
              counter="30"
            />
            <v-text-field
              v-model="contact.email"
              class="v-card--shaped"
              dense
              :label="labels.email"
              :rules="rules.emailRules"
            />
            <v-select
              label="Way of helping"
              :items="['Q&A', 'Recruit', 'Mentor', 'Other']"
            />

            <v-text-field
              v-model="contact.linkedin"
              class="v-card--shaped"
              dense
              :label="labels.linkedin"
            />
            <v-textarea
              v-model="contact.experience"
              class="v-card--shaped"
              dense
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
        </v-row>
      </v-card>
    </v-container>
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
      description: "You are helping A2SV to train more students in Africa"
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
    }
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
</style>
