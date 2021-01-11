<template>
  <v-app dark>
    <div v-if="error.statusCode === 404">
      <h1 class="display-4 mx-auto text-center blue-black" style="font-weight: 900">
        404
      </h1>
      <h2
        class="text-center"
      >
        Page not found
      </h2>
    </div>
    <div v-else>
      <h1 class="display-4 mx-auto text-center blue-black" style="font-weight: 900">
        500
      </h1>
      <h2
        class="text-center"
      >
        {{ otherError }}
      </h2>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
