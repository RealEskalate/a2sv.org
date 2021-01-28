<template>
  <v-footer padless>
    <v-card flat tile class="white text-center">
      <v-card-text style="width: 100vw">
        <v-container>
          <v-tooltip
            v-for="(link, i) in socialMediaLinks"
            :key="i"
            open-delay="1000"
            top
          >
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="mx-4 primary--text"
                fab
                depressed
                :href="link.url"
                target="_blank"
                v-on="on"
              >
                <v-icon size="30px">
                  {{ link.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ link.name }}</span>
          </v-tooltip>

          <v-row class="mt-5">
            <v-col cols="12" md="3" class="d-flex">
              <v-container>
                <v-img
                  alt="A2SV LOGO"
                  width="175"
                  class="mb-5 d-flex mx-auto mx-sm-0"
                  contain
                  src="/logos/logo-blue.png"
                />
                <p class="blackish footer-texts d-block">
                  © Copyright {{ getDate() }} A2SV. All rights reserved.
                </p>
              </v-container>
            </v-col>
            <v-col md="9">
              <v-row>
                <v-col cols="4" md="4" class="mx-auto">
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
                <v-col cols="4" md="4" class="mx-auto">
                  <h3 class="text-left">
                    Legal
                  </h3>
                  <v-list>
                    <v-list-item class="px-0">
                      <v-list-item-title class="blackish footer-texts">
                        Privacy Policy
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item class="px-0">
                      <v-list-item-title class="blackish footer-texts">
                        Legal Notice
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="4" md="4" class="mx-auto">
                  <h3 class="text-left">
                    Organization
                  </h3>
                  <v-list>
                    <v-list-item
                      v-for="(org, i) in organization"
                      :key="i"
                      class="px-0"
                      :to="org.link"
                    >
                      <v-list-item-title class="blackish footer-texts">
                        {{ org.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                  <h3 class="text-left">
                    Contact us
                  </h3>
                  <v-list>
                    <v-list-item
                      v-for="(org, i) in emails"
                      :key="i"
                      class="px-0"
                      :to="org.link"
                    >
                      <v-list-item-title
                        class="blackish footer-texts text-wrap"
                      >
                        {{ org.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
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
        {
          name: "LinkedIn",
          icon: mdiLinkedin,
          url: "http://www.linkedin.com/company/a2sv"
        },
        {
          name: "Instagram",
          icon: mdiInstagram,
          url: "http://www.instagram.com/a2sv_org"
        }
      ],
      organization: [{ title: "About", link: "/about" }],
      emails: [{ title: "contact@eskalate.io", link: "" }]
    };
  },
  methods: {
    getDate() {
      return new Date().getFullYear();
    }
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
