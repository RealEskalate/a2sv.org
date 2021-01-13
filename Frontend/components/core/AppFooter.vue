<template>
  <v-footer padless>
    <v-card flat tile class="white text-center">
      <v-card-text style="width: 100vw">
        <v-container>
          <v-btn
            v-for="(link, i) in socialMediaLinks"
            :key="i"
            class="mx-4 primary--text"
            icon
            :href="link.url"
            target="_blank"
          >
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </v-btn>
          <v-row class="mt-5">
            <v-col cols="6" md="3" class="mx-auto">
              <v-img
                alt="A2SV LOGO"
                width="175"
                class="mb-5"
                contain
                src="/logos/logo-blue.png"
              />
              <p class="blackish footer-texts">
                © Copyright 2020 A2SV. All rights reserved.
              </p>
            </v-col>
            <v-col cols="6" md="2" class="mx-auto">
              <h3 class="text-left">
                Projects
              </h3>
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
              <h3 class="text-left">
                Legal
              </h3>
              <v-list>
                <v-list-item class="px-0">
                  <v-list-item-title
                    class="blackish footer-texts"
                  >
                    Privacy Policy
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title
                    class="blackish footer-texts"
                  >
                    Legal Notice
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="2" class="mx-auto">
              <h3 class="text-left">
                Organization
              </h3>
              <v-list>
                <v-list-item class="px-0" to="/about">
                  <v-list-item-title
                    class="blackish footer-texts"
                  >
                    About
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-title
                    class="blackish footer-texts"
                  >
                    Programmes
                  </v-list-item-title>
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
import { mdiLinkedin, mdiInstagram } from "@mdi/js";
export default {
  data() {
    return {
      socialMediaLinks: [
        { icon: mdiLinkedin, url: "http://www.linkedin.com/company/a2sv"},
        { icon: mdiInstagram, url: "http://www.instagram.com/a2sv_org"}
      ]
    };
  }
};
</script>

<style>
.footer-texts {
  font-size: 16px !important;
  margin-top: 2px;
  text-align: left;
}
</style>
