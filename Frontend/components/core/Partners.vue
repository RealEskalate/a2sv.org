<template>
  <v-container>
    <h1 class="display-1 mb-10 mt-5" style="color: #2b2a35; font-weight: 600">
      {{ message }}
    </h1>
    <v-row>
      <v-col
        v-for="(icon, i) in icons"
        :key="i"
        cols="4"
        md="3"
        class="px-3 mx-auto"
      >
        <v-img
          :src="icon"
          width="75%"
          max-width="150px"
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "Partners",
  props: {
    message: {
      default: "We are closely working with",
      type: String
    }
  },
  data() {
  return {
    icons: [
      "/partners-colorful/google.svg",
      "/partners-colorful/coinbase.svg",
      "/partners-colorful/palantir.svg",
      "/partners-colorful/aau.svg"
    ]
  };
  },
  methods: {
    isAboutPage() {
      return this.$router.currentRoute.fullPath === "/about";
    }
  }
};
</script>
