<template>
  <v-card class="shadow mx-auto my-15" max-width="500">
    <v-card-title class="justify-center" style="color: #545465">
      Q & A
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
        v-model="contact.email"
        class="v-card--shaped"
        dense
        :label="labels.email"
        :rules="rules.emailRules"
      />
      <v-text-field
        v-model="contact.profession"
        class="v-card--shaped"
        dense
        :label="labels.profession"
        :rules="rules.professionRules"
      />
      <v-textarea
        v-model="contact.bio"
        class="v-card--shaped"
        dense
        rows="5"
        :label="labels.bio"
        :rules="rules.bioRules"
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
      email: "",
      profession: "",
      bio: ""
    },
    labels: {
      name: "Name",
      email: "Email",
      profession: "Profession",
      bio: "Short bio"
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
      professionRules: [
        (v) => !!v || "Profession is required",
        (v) => (v && v.length <= 30) || "Profession must be less than 30 characters"
      ],
      bioRules: [
        (v) => !!v || "Bio is required",
        (v) =>
          (v && v.length <= 250) || "Bio must be less than 250 characters"
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
