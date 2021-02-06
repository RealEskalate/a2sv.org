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
              <v-icon size="30px">
                {{ link.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ link.name }}</span>
        </v-tooltip>
      </v-card-text>

      <v-container>
        <v-card-text class="px-12 mx-auto">
          <!--TODO Update content for the footer-->
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
      </v-container>

      <v-divider />

      <v-card-text>
        © Copyright {{ getDate() }} <strong>A2SV</strong>. All rights reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiLinkedin, mdiInstagram, mdiEmailOutline } from "@mdi/js";
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
        },
        {
          name: "Email",
          icon: mdiEmailOutline,
          url: "mailto:contact@eskalate.io"
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
