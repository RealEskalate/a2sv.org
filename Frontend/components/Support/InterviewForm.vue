<template>
  <v-card class="shadow mx-auto my-15" max-width="500">
    <v-card-title class="justify-center" style="color: #545465">
      Interviews
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
        v-model="contact.company_email"
        class="v-card--shaped"
        dense
        :label="labels.company_email"
        :rules="rules.emailRules"
      />
      <v-textarea
        v-model="contact.message"
        class="v-card--shaped"
        dense
        rows="5"
        :label="labels.additional_message"
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
  name: "InterviewForm",
  data: () => ({
    valid: false,
    contact: {
      name: "",
      company_email: "",
      additional_message: ""
    },
    labels: {
      name: "Name",
      company_email: "Company Email",
      additional_message: "Additional Message (Optional)"
    },
    rules: {
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    }
  }),
  methods: {
    sendForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped></style>
