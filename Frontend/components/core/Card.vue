<template>
  <div
    class="mb-12 pa-8 py-md-12"
    style="background: linear-gradient(90deg, #2c3a8b 0, #286df7 100%)"
  >
    <h1
      class="display-2 my-6 text-center"
      style="color: #ffffff !important"
    >
      {{ mainTitle }}
    </h1>
    <v-row>
      <v-col
        v-for="(title, i) in Object.keys(content)"
        :key="i"
        cols="12"
        sm="6"
        md="3"
        class="pa-5"
      >
        <v-card
          class="pa-3 white--text"
          color="transparent"
          height="100%"
          flat
        >
          <v-btn
            text
            disabled
            class="overflow-hidden d-block mx-auto pa-3"
            width="150px"
            height="150px"
          >
            <v-img circle :src="images[i]" width="150px" />
          </v-btn>
          <div>
            <h1
              class="display-1 my-5 text-center"
              style="color: #ffffff !important; font-weight: 800"
            >
              {{ title }}
            </h1>

            <p class="text-center caption" style="font-size: larger !important">
              {{ content[title] }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    mainTitle: {
      default: "",
      type: String
    },
    content: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      images: [
        "/honesty.svg",
        "/fist.svg",
        "/courage.svg",
        "/love.svg"
      ]
    };
  }
};
</script>
<style scoped>
.display-2 {
  font-weight: 800;
  font-size: 3em !important;
}
</style>
