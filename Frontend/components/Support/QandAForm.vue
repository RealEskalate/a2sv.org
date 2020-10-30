<template>
  <v-card class="shadow mx-auto my-15" max-width="500">
    <v-card-title class="justify-center" style="color: #545465">
      Q & A
    </v-card-title>
    <v-divider class="mb-5"></v-divider>
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
        v-model="contact.email"
        class="v-card--shaped"
        dense
        :label="labels.email"
        :rules="rules.emailRules"
      />
      <v-textarea
        v-model="contact.story"
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
</template>

<script>
export default {
  name: 'InterviewForm',
  data: () => ({
    valid: false,
    contact: {
      name: '',
      email: '',
      story: '',
    },
    labels: {
      name: 'Name',
      email: 'Email',
      story: 'Story',
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
      storyRules: [
        (v) => !!v || 'Story is required',
        (v) =>
          (v && v.length <= 150) || 'Story must be less than 150 characters',
      ],
    },
  }),
  methods: {
    sendForm() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped></style>
