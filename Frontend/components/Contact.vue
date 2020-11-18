<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" md="5">
        <h3 class="primary--text mb-3">
          KEEP IN TOUCH WITH US
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta
          adipisci, voluptatum quia cupiditate.
        </p>
        <div class="mt-8">
          <template v-for="({ icon, text }, i) in business">
            <div :key="i">
              <v-icon size="40" class="mr-10 mb-5">
                {{ icon }}
              </v-icon>
              <div class="d-inline-block mt-2" v-html="text" />
            </div>
            <v-divider
              v-if="i + 1 !== business.length"
              :key="`divider-${i}`"
              class="mb-2"
            />
          </template>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div>
          <h3 class="primary--text mb-3">
            MAIL US YOUR MESSAGE
          </h3>

          <v-text-field outlined dense single-line label="Name" />

          <v-text-field outlined dense single-line label="Email" />

          <v-text-field outlined dense single-line label="Subject" />

          <v-textarea
            outlined
            dense
            single-line
            rows="6"
            label="Your Message"
            class="mb-6"
          />

          <v-btn
            color="accent"
            outlined
            x-large
            class="font-weight-bold"
            target="_blank"
          >
            Send message
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiMapMarkerOutline, mdiCellphone, mdiEmail } from "@mdi/js";
export default {
  name: "Contact",
  data: () => ({
    business: [
      {
        icon: mdiMapMarkerOutline,
        title: "Address",
        text: "King George VI St.<br>Addis Ababa, Ethiopia"
      },
      {
        icon: mdiCellphone,
        title: "Phone",
        text: "01 (111) 111 111<br>02 (222) 222 222"
      },
      {
        icon: mdiEmail,
        title: "Email",
        text: "contact@a2sv.org<br>contact@eskalate.io"
      }
    ]
  })
};
</script>

<style scoped>
</style>