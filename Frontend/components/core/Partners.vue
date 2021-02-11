<template>
  <v-container>
    <h1 style="line-height:1.2" :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp, 'my-10':$vuetify.breakpoint.smAndUp}">
      {{ message }}
    </h1>
    <v-card class="pb-10" color="transparent" flat>
      <v-row>
        <v-col v-for="(company, i) in companies" :key="i" cols="12" :sm="12 / companies.length" class="d-flex">
          <v-card
            class="d-flex mx-auto"
            color="transparent"
            flat
          >
            <v-tooltip bottom open-delay="1000">
              <template #activator="{ on, attrs }">
                <a
                  :href="company.link"
                  v-bind="attrs"
                  target="_blank"
                  v-on="on"
                >
                  <v-img
                    contain
                    height="100px"
                    width="230px"
                    :src="company.logo"
                  />
                </a>
              </template>
              <span>{{ company.name }}</span>
            </v-tooltip>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Partners",
  props: {
    message: {
      default: "We are closely working with",
      type: String
    }
  },
  computed: {
    companies() {
      const companies = [
        {
          name: "Google LLC",
          logo: "/partners-colorful/google.svg",
          link: "https://about.google/"
        },
        {
          name: "Palantir Technologies",
          logo: "/partners-colorful/palantir.svg",
          link: "https://www.palantir.com/about/"
        },
        {
          name: "Coinbase",
          logo: "/partners-colorful/coinbase.svg",
          link: "https://www.coinbase.com/about"
        }
      ];
      if (!this.isAboutPage())
        companies.push({
          name: "Addis Ababa University",
          logo: "/partners-colorful/aau.png",
          link: "http://www.aau.edu.et/"
        });
      return companies;
    }
  },
  methods: {
    isAboutPage() {
      return this.$router.currentRoute.fullPath === "/about";
    }
  }
};
</script>

<style>
.display-2 {
  font-weight: 800 !important;
  font-size: 3em !important;
}
</style>
