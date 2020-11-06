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
            <v-card-title style="color: #545465" class="justify-center">
              {{ support.title | uppercase }}
            </v-card-title>
            <v-card-text class="text-center">
              {{ support.description }}
            </v-card-text>
            <v-card-actions class="justify-center">
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
        <!-- <template v-for="(support, i) in support_ways">
          <v-col :key="i" col="12" sm="3">
            <v-hover v-slot="{ hover }" disabled>
              <v-card
                max-width="374"
                outlined
                tile
                :elevation="hover ? 10 : 0"
                :class="{ 'on-hover': hover }"
              >
                <v-img height="150" :src="support.image"></v-img>

                <v-card-title class="justify-center">
                  {{ support.title | uppercase }}
                </v-card-title>

                <v-card-text class="text-center">
                  <div>
                    {{ support.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions class="justify-center">
                  <v-btn
                    v-if="support.title === 'Donate'"
                    color="primary"
                    text
                    @click="showForm(support.title)"
                  >
                    {{ support.button_text }}
                  </v-btn>
                  <v-btn
                    v-else
                    v-scroll-to="{
                      el: '#form_card',
                      offset: -60,
                    }"
                    color="primary"
                    text
                    @click="showForm(support.title)"
                  >
                    {{ support.button_text }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </template> -->
      </v-row>

      <v-card
        v-if="form_type.interview || form_type.mentorship || form_type.q_and_a"
        id="form_card"
        class="shadow mx-auto my-15"
        max-width="500"
      >
        <v-card-title
          v-if="form_type.interview"
          class="justify-center"
          style="color: #545465"
        >
          Interviews
        </v-card-title>
        <v-card-title
          v-else-if="form_type.mentorship"
          class="justify-center blackish"
          style="color: #545465"
        >
          Mentorship
        </v-card-title>
        <v-card-title
          v-else
          class="justify-center blackish"
          style="color: #545465"
        >
          Q and A
        </v-card-title>
        <v-divider class="mb-5" />
        <v-form ref="form" v-model="valid" class="pa-5">
          <v-text-field
            v-model="contact.name"
            class="v-card--shaped"
            dense
            :label="labels.name"
            :rules="rules.nameRules"
            counter="30"
          />
          <v-text-field
            v-if="form_type.interview"
            v-model="contact.email"
            class="v-card--shaped"
            dense
            :label="labels.company_email"
            :rules="rules.emailRules"
          />
          <v-text-field
            v-else
            v-model="contact.email"
            class="v-card--shaped"
            dense
            :label="labels.email"
            :rules="rules.emailRules"
          />
          <v-textarea
            v-if="form_type.interview"
            v-model="contact.message"
            class="v-card--shaped"
            dense
            rows="5"
            :label="labels.additional_message"
          />
          <v-textarea
            v-else-if="form_type.mentorship"
            v-model="contact.message"
            class="v-card--shaped"
            dense
            rows="5"
            :label="labels.experience"
            :rules="rules.experienceRules"
          />
          <v-textarea
            v-else
            v-model="contact.message"
            class="v-card--shaped"
            dense
            rows="5"
            :label="labels.story"
            :rules="rules.storyRules"
          />
          <div class="text-center py-3">
            <v-btn width="100" class="primary mx-auto" @click="sendForm">
              Send
              <v-icon class="ml-2" small />
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Core/TextOnlyBanner";

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
    valid: false,
    contact: {
      name: "",
      email: "",
      additional_message: "",
      experience: "",
      story: ""
    },
    labels: {
      name: "Name",
      email: "Email",
      company_email: "Company Email",
      additional_message: "Additional Message (Optional)",
      experience: "Experience",
      story: "Story"
    },
    form_type: {
      interview: false,
      mentorship: false,
      q_and_a: false
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
      ],
      storyRules: [
        (v) => !!v || "Story is required",
        (v) =>
          (v && v.length <= 150) || "Story must be less than 150 characters"
      ]
    }
  }),
  methods: {
    showForm(title) {
      if (title === "Interviews") {
        this.form_type.interview = true;
        this.form_type.mentorship = false;
        this.form_type.q_and_a = false;
      } else if (title === "Mentorship") {
        this.form_type.interview = false;
        this.form_type.mentorship = true;
        this.form_type.q_and_a = false;
      } else if (title === "Q & A") {
        this.form_type.interview = false;
        this.form_type.mentorship = false;
        this.form_type.q_and_a = true;
      }
    },
    sendForm() {
      this.$refs.form.reset();
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
</style>
