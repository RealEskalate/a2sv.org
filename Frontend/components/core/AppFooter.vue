<template>
  <v-footer color="transparent">
    <v-card
      class="white text-center"
      style="width: 100%"
      flat
      tile
    >
      <v-card-text class="pt-5">
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
              <v-icon size="30px" :color="link.color">
                {{ link.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ link.name }}</span>
        </v-tooltip>
      </v-card-text>

      <v-divider />

      <v-card-text>
        © Copyright {{ getDate() }} <strong>A2SV</strong>. All rights reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiLinkedin, mdiInstagram, mdiTwitter, mdiEmailOutline,mdiYoutube } from "@mdi/js";
export default {
  data() {
    return {
      socialMediaLinks: [
        {
          name: "Email",
          icon: mdiEmailOutline,
          url: "mailto:contact@a2sv.org",
          color: "pink"
        },
        {
          name: "LinkedIn",
          icon: mdiLinkedin,
          url: "http://www.linkedin.com/company/a2sv",
          color: "light-blue darken-2"
        },
        {
          name: "Instagram",
          icon: mdiInstagram,
          url: "http://www.instagram.com/a2sv_org",
          color: "purple"
        },
        {
          name: "Twitter",
          icon: mdiTwitter,
          url: "https://twitter.com/a2sv_org",
          color: "light-blue"
        },
        {
          name: "YouTube",
          icon: mdiYoutube,
          url: "https://www.youtube.com/channel/UC70kFW6mFFGEjsucvNZk6-A",
          color: "red"
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
