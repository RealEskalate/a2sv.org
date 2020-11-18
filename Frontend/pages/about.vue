<template>
  <div>
    <banner
      img-width="15rem"
      title="About A2SV"
      description="Learn more about what what we do"
      img="./illustrations/char-1.svg"
    />
    <v-container class="text-center">
      <v-row class="my-12">
        <v-col>
          <h1 class="display-1 primary--text my-8">
            What is A2SV
          </h1>
          <p class="body-1">
            A2SV is a 3 months interview preparation program that focuses on
            algorithms, data structures, problem solving, communication skills,
            and personal development.
          </p>
          <p class="body-1">
            For more information, please watch the <a href="">trailer</a>, take
            a look at the <a href="">progress sheet</a>, and check out the
            <a href="">lecture videos</a>.
          </p>
        </v-col>
      </v-row>

      <h1 class="display-1 primary--text">
        {{ lists[0].title }}
      </h1>
      <v-subheader class="justify-center">
        {{ lists[0].subtitle }}
      </v-subheader>
      <v-row>
        <v-col v-for="(item, i) in lists[0].list" :key="i" cols="12" sm="4">
          <v-card-title class="justify-center primary--text">
            {{ item.title }}
          </v-card-title>
          <p class="body-1" v-html="item.content" />
        </v-col>
      </v-row>
      <v-row class="mx-15 mb-15">
        <v-col cols="12" sm="6">
          <div class="polaroid">
            <v-img
              style="margin-top: 160px"
              height="350px"
              src="http://res.cloudinary.com/eskalate/image/upload/v1596886905/gallery/IMG_20200306_140909-scaled_ajf84u.jpg"
            />
            <div class="py-4">
              <p>Problem Solving Session</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="polaroid">
            <v-img
              height="350px"
              src="http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            />
            <div class="py-4">
              <p>Contest</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <h1 class="display-1 primary--text">
        {{ lists[1].title }}
      </h1>
      <v-subheader class="justify-center">
        {{ lists[1].subtitle }}
      </v-subheader>
      <v-row>
        <v-col v-for="(item, i) in lists[1].list" :key="i" cols="12" sm="4">
          <v-card-title class="justify-center primary--text">
            {{ item.title }}
          </v-card-title>
          <p class="body-1" v-html="item.content" />
        </v-col>
      </v-row>
    </v-container>

    <div class="grey lighten-4 mt-10 text-center">
      <v-container>
        <h1 class="display-1 primary--text mb-10 mt-5">
          Partners
        </h1>
        <v-slide-group>
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
        <v-btn
          x-large
          outlined
          class="text-capitalize mt-10 mb-5"
          color="primary"
          to="/support"
        >
          Partner with us
        </v-btn>
      </v-container>
    </div>
    <Contact class="my-10" />
    <!-- <v-container class="text-center">
      <v-row class="my-12">
        <v-col>
          <h1 class="display-1 primary--text my-8">
            What is A2SV
          </h1>
          <p class="body-1">
            A2SV is a 3 months interview preparation program that focuses on
            algorithms, data structures, problem solving, communication skills,
            and personal development.
          </p>
          <p class="body-1">
            For more information, please watch the <a href="">trailer</a>, take a
            look at the <a href="">progress sheet</a>, and check out the
            <a href="">lecture videos</a>.
          </p>
        </v-col>
      </v-row>
      <br>
      <v-row v-for="(item, i) in lists" :key="i" class="my-12 px-12 mx-12">
        <v-col class="my-12">
          <h1 class="display-1 primary--text">
            {{ item.title }}
          </h1>
          <v-subheader class="justify-center">
            {{ item.subtitle }}
          </v-subheader>

          <v-row>
            <v-img
              width="100%"
              height="300px"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
            <v-col
              v-for="(act, j) in item.list"
              :key="i + '-' + j"
              cols="4"
              class="px-10"
            >
              <v-container class="pa-5">
                <v-card-title class="justify-center primary--text mb-3">
                  {{
                    act.title
                  }}
                </v-card-title>
                <p class="body-1">
                  {{ act.content }}
                </p>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import Banner from "@/components/Core/TextOnlyBanner";
import Contact from "@/components/Contact";
export default {
  components: {
    Banner,
    Contact
  },
  data() {
    return {
      icons: [
        "./icons/google-icon.svg",
        "./icons/palantir-icon.svg",
        "./icons/coinbase-icon.svg",
        "./icons/eskalate-icon.svg"
      ],
      lists: [
        {
          title: "What We Do in the first part?",
          subtitle: "Here's what we have been upto",
          list: [
            {
              title: "Technical Training & Contests",
              content:
                "6 days a week, 3 hours lectures and practice sessions to improve problem solving skills <br/><br/> Bi-weekly contests to get better at competitive programming and problem solving on online platform"
            },
            {
              title: "Q&As & Problem Solving",
              content:
                "Q&A Sessions with engineers, founders, and data scientists from top SV companies to learn from their best practices and to realize that they are normal people <br/><br/> Problem solving sessions to get a feel of explaining solutions on the whiteboard"
            },
            {
              title: "Learning How to Approach & 1-1s",
              content:
                "Learning how to approach sessions to learn best practices from an experienced problem solver <br/><br/> Bi-weekly 1:1s with students to get to know each other and open a communication channel"
            }
          ]
        },
        {
          title: "What We Do in the Second part?",
          subtitle:
            "On the top of what we do in the first part, we have a month long camp, 6 days a week.",
          list: [
            {
              title: "Daily Contests & Communication Skill Assessments",
              content:
                "Daily contests to get better at competitive programming and problem solving <br><br> Problem solving and interview video recordings to improve communication skills"
            },
            {
              title: "Mock Interviews & Moonwalks",
              content:
                "Mock interviews with peers, other trainees, and industry professionals in the SV <br><br> Daily half an hour pair walks among teammates to improve connections"
            },
            {
              title: "Weekly 1-1s & Social Activities",
              content:
                "Weekly 1:1s to check progress and to provide personalized improvement plan <br><br> Games and social activities for team building"
            }
          ]
        }
      ]
    };
  },
  head: {
    title: "About Us"
  }
};
</script>

<style>
div.polaroid {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
}
</style>
