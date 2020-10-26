<template>
  <v-container class="py-10">
    <hero />

    <v-card tile flat class="my-15">
      <v-card-title class="font-weight-light"
        >THE CHANGE YOU ARE MAKING</v-card-title
      >
      <v-card-text
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure commodi,
        distinctio laudantium quam repudiandae quia odit dolorum ex quaerat
        tempora vel quae odio tempore cum nemo voluptate velit libero.
        Dignissimos?
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary">Share Message</v-btn>
      </v-card-actions>
    </v-card>

    <div>
      <h2 class="text-center font-weight-medium">WAYS TO SUPPORT US</h2>
      <v-divider class="mt-2"></v-divider>
      <v-row class="my-8" align="center" justify="center">
        <template v-for="(support, i) in support_ways">
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
        </template>
      </v-row>
    </div>

    <v-card
      v-if="form_type.interview || form_type.mentorship || form_type.q_and_a"
      id="form_card"
      class="mx-auto my-15"
      max-width="500"
      outlined
      tile
    >
      <v-card-title v-if="form_type.interview" class="justify-center">
        Interviews
      </v-card-title>
      <v-card-title v-else-if="form_type.mentorship" class="justify-center">
        Mentorship
      </v-card-title>
      <v-card-title v-else class="justify-center">Q and A</v-card-title>
      <v-form ref="form" v-model="valid" class="pa-5">
        <v-text-field
          v-model="contact.name"
          class="v-card--shaped"
          outlined
          dense
          :label="labels.name"
          :rules="rules.nameRules"
          counter="30"
        />
        <v-text-field
          v-if="form_type.interview"
          v-model="contact.email"
          class="v-card--shaped"
          outlined
          dense
          :label="labels.company_email"
          :rules="rules.emailRules"
        />
        <v-text-field
          v-else
          v-model="contact.email"
          class="v-card--shaped"
          outlined
          dense
          :label="labels.email"
          :rules="rules.emailRules"
        />
        <v-textarea
          v-if="form_type.interview"
          v-model="contact.message"
          class="v-card--shaped"
          outlined
          dense
          rows="5"
          :label="labels.additional_message"
        />
        <v-textarea
          v-else-if="form_type.mentorship"
          v-model="contact.message"
          class="v-card--shaped"
          outlined
          dense
          rows="5"
          :label="labels.experience"
          :rules="rules.experienceRules"
        />
        <v-textarea
          v-else
          v-model="contact.message"
          class="v-card--shaped"
          outlined
          dense
          rows="5"
          :label="labels.story"
          :rules="rules.storyRules"
        />
        <div class="text-center py-3">
          <v-btn
            tile
            width="100"
            class="primary mx-auto v-card--shaped"
            @click="sendForm"
          >
            Send
            <v-icon class="ml-2" small />
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  components: {
    Hero,
  },
  filters: {
    uppercase(value) {
      if (!value) return ''
      return value.toUpperCase()
    },
  },
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    support_ways: [
      {
        // image: 'https://i.ibb.co/Jn02MkP/donate.png',
        image:
          'https://i.ibb.co/4tsyJwp/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg',
        title: 'Donate',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea enim quae debitis eum quia necessitatibus provident tenetur suscipit, porro illo.',
        button_text: 'Go To PayPal',
      },
      {
        // image: 'https://i.ibb.co/GPLyPHM/hr.jpg',
        image:
          'https://i.ibb.co/4tsyJwp/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg',
        title: 'Interviews',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea enim quae debitis eum quia necessitatibus provident tenetur suscipit, porro illo.',
        button_text: 'Contact Us',
      },
      {
        image:
          'https://i.ibb.co/4tsyJwp/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg',
        title: 'Mentorship',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea enim quae debitis eum quia necessitatibus provident tenetur suscipit, porro illo.',
        button_text: 'Contact Us',
      },
      {
        // image: 'https://i.ibb.co/GnnVbNf/q-a.jpg',
        image:
          'https://i.ibb.co/4tsyJwp/Employees-giving-hands-and-helping-colleagues-to-walk-upstairs-Team-giving-support-growing-together.jpg',
        title: 'Q & A',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea enim quae debitis eum quia necessitatibus provident tenetur suscipit, porro illo.',
        button_text: 'Request',
      },
    ],
    valid: false,
    contact: {
      name: '',
      email: '',
      additional_message: '',
      experience: '',
      story: '',
    },
    labels: {
      name: 'Name',
      email: 'Email',
      company_email: 'Company Email',
      additional_message: 'Additional Message (Optional)',
      experience: 'Experience',
      story: 'Story',
    },
    form_type: {
      interview: false,
      mentorship: false,
      q_and_a: false,
    },
    rules: {
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      experienceRules: [
        (v) => !!v || 'Experience is required',
        (v) =>
          (v && v.length <= 150) ||
          'Experience must be less than 150 characters',
      ],
      storyRules: [
        (v) => !!v || 'Story is required',
        (v) =>
          (v && v.length <= 150) || 'Story must be less than 150 characters',
      ],
    },
  }),
  methods: {
    showForm(title) {
      if (title === 'Interviews') {
        this.form_type.interview = true
        this.form_type.mentorship = false
        this.form_type.q_and_a = false
      } else if (title === 'Mentorship') {
        this.form_type.interview = false
        this.form_type.mentorship = true
        this.form_type.q_and_a = false
      } else if (title === 'Q & A') {
        this.form_type.interview = false
        this.form_type.mentorship = false
        this.form_type.q_and_a = true
      }
    },
    sendForm() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}
</style>
