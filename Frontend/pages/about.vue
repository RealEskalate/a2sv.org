<template>
  <div>
    <banner
      img-width="15rem"
      title="About A2SV"
      description="Learn more about what what we do"
      img="./about.svg"
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
    </v-container>
  </div>
</template>

<script>
  import Banner from "@/components/Core/TextOnlyBanner";
  export default {
    components: {
      Banner
    },
  data() {
    return {
      lists: [
        {
          title: "What We Do in the first part?",
          subtitle: "Here's what we have been upto",
          list: [
            {
              title: "Technical Training",
              content:
                "6 days a week, 3 hours lectures and practice sessions to improve problem solving skills"
            },
            {
              title: "Contests",
              content:
                "Bi-weekly contests to get better at competitive programming and problem solving on online platform"
            },
            {
              title: "Q&As",
              content:
                "Q&A Sessions with engineers, founders, and data scientists from top SV companies to learn from their best practices and to realize that they are normal people"
            },
            {
              title: "Problem Solving",
              content:
                "Problem solving sessions to get a feel of explaining solutions on the whiteboard"
            },
            {
              title: "Learning How to Approach",
              content:
                "Learning how to approach sessions to learn best practices from an experienced problem solver"
            },
            {
              title: "1-1s",
              content:
                "Bi-weekly 1:1s with students to get to know each other and open a communication channel"
            }
          ]
        },
        {
          title: "What We Do in the Second part?",
          subtitle:
            "On the top of what we do in the first part, we have a month long camp, 6 days a week.",
          list: [
            {
              title: "Daily Contests",
              content:
                "Daily contests to get better at competitive programming and problem solving"
            },
            {
              title: "Communication Skill Assessments",
              content:
                "Problem solving and interview video recordings to improve communication skills"
            },
            {
              title: "Mock Interviews",
              content:
                "Mock interviews with peers, other trainees, and industry professionals in the SV"
            },
            {
              title: "Moonwalks",
              content:
                "Daily half an hour pair walks among teammates to improve connections"
            },
            {
              title: "Weekly 1-1s",
              content:
                "Weekly 1:1s to check progress and to provide personalized improvement plan"
            },
            {
              title: "Social Activities",
              content: "Games and social activities for team building"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
