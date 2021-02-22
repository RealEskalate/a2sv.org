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
        v-for="(item, i) in content"
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
          <v-card
            flat
            color="transparent"
            class="overflow-hidden d-block mx-auto pa-3"
            width="150px"
            height="150px"
          >
            <v-img circle :src="item.icon" width="150px" />
          </v-card>
          <div>
            <h1
              class="display-1 my-5 text-center"
              style="color: #ffffff !important; font-weight: 800"
            >
              {{ item.title }}
            </h1>

            <p class="text-center caption" style="font-size: larger !important">
              {{ item.description }}
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
      type: Array
    }
  },
  data() {
    return {
      images: [
        "https://res.cloudinary.com/dfc7snpy5/image/upload/v1613670314/a2sv/honesty_2x_legwa1.png",
        "https://res.cloudinary.com/dfc7snpy5/image/upload/v1613670315/a2sv/respect_2x_bhhoju.png",
        "https://res.cloudinary.com/dfc7snpy5/image/upload/v1613670314/a2sv/courage1_2x_cuqtnl.png",
        "https://res.cloudinary.com/dfc7snpy5/image/upload/v1613670314/a2sv/humanity_2x_no6lvn.png"
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
