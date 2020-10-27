<template>
  <v-footer padless>
    <v-card flat tile class="white text-center">
      <v-card-text style="width: 100vw">
        <v-container>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 primary--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          <v-row class="mt-5">
            <v-col cols="6" md="3" class="mx-auto">
              <h2 class="text-left page-titles mb-4">A2SV</h2>
              <p class="blackish footer-texts">
                © Copyright 2020 A2SV NPO. All rights reserved.
              </p>
            </v-col>
            <v-col cols="6" md="2" class="mx-auto">
              <h3 class="text-left">Products</h3>
              <v-list-item class="px-0">
                <a
                  class="text-decoration-none footer-texts"
                  href="https://tracksym.app"
                >
                  <p class="blackish footer-texts">Tracksym</p>
                </a>
              </v-list-item>
            </v-col>
            <v-col cols="6" md="2" class="mx-auto">
              <h3 class="text-left">Legal</h3>
              <v-list>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >Terms of Use</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >Privacy Policy</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >Legal Notice</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="2" class="mx-auto">
              <h3 class="text-left">Organization</h3>
              <v-list>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >About</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >Apply</v-list-item-title
                  >
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title class="blackish footer-texts"
                    >Programmes</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style>
@import 'node_modules/vuetify/dist/vuetify.min.css';
.footer-texts {
  font-size: 16px !important;
  margin-top: 2px;
  text-align: left;
}
</style>
