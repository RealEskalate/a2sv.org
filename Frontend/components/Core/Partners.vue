<template>
  <v-container>
    <h1 class="display-1 mb-10 mt-5" style="color: #2b2a35; font-weight: 700">
      We are closely working with
    </h1>
    <v-slide-group class="my-6">
      <template v-for="(icon, n) in icons">
        <v-slide-item :key="n" class="align-self-center">
          <v-img :src="icon" color="grey" contain height="40" width="128" />
        </v-slide-item>
        <v-responsive
          v-if="n < 3"
          :key="`divider-${n}`"
          class="text-center"
          height="56"
          width="48"
        >
          <v-divider vertical />
        </v-responsive>
      </template>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
name: "Partners",
  data() {
  return {
    icons: [
      "./partners-colorful/google.svg",
      "./partners-colorful/coinbase.svg",
      "./partners-colorful/palantir.svg",
      "./partners-colorful/aau.svg"
    ]
  };
  }
};
</script>
