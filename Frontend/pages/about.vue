<template>
  <div>
    <banner
      img-width="15rem"
      title="About A2SV"
      description="A2SV is a 3 months interview preparation program that focuses on algorithms, data structures, problem solving, communication skills, and personal development."
      img="./illustrations/char-1.svg"
    />
    <v-container class="text-center mt-12">
      <v-row class="my-12">
        <v-col cols="12" sm="5">
          <h1 class="display-2 mb-8">
            What we do
          </h1>
          <p style="font-size: 1.2rem">
            In A2SV, we train students in Algorithms and Data structures and
            connect them with top silicon valley companies for internship
            interviews, as well as full-time job opportunities. This training
            consists of technical training, in which students learn how to solve
            a technical problem. And non-technical training in which students
            learn how to improve their communication skills to explain their
            solutions to their interviewers effectively.
          </p>
          <p style="font-size: 1.2rem">
            For more information, please watch the <a href="">trailer</a>, take
            a look at the <a href="">progress sheet</a>, and check out the
            <a href="">lecture videos</a>.
          </p>
        </v-col>
        <v-col cols="12" sm="7" class="px-5 mx-auto" max-height="60vh">
          <vue-plyr>
            <video poster="/team/lidia.webp">
              <source
                src="https://res.cloudinary.com/eskalate/video/upload/v1610371967/video/a2sv-promo.mp4"
                type="video/mp4"
              >
            </video>
          </vue-plyr>
        </v-col>
      </v-row>
      <div>
        <h1 class="display-2 mb-5">
          How we do it
        </h1>
        <p style="font-size: 1.2rem">
          Our program has three phases. In all these phases, we train our
          students both technically and non-technically, which gets them one
          step closer to their success by using different methods.
        </p>
      </div>
      <h1 class="display-1">
        {{ lists[0].title }}
      </h1>
      <p class="justify-center">
        {{ lists[0].subtitle }}
      </p>
      <carousel-3d
        style="min-height: 350px"
        :border="0"
        :perspective="20"
        :inverse-scaling="50"
        :space="350"
        autoplay
        :autoplay-timeout="5000"
        width="400"
      >
        <slide
          v-for="(item, i) in lists[0].list"
          :key="i"
          class="overflow-visible"
          :index="i"
          style="height: auto; background-color: transparent"
        >
          <v-card class="shadow" outlined shaped>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.image"
            >
              <v-card-title class="mr-3" v-text="item.title" />
            </v-img>
            <v-card-text v-text="item.content" />
          </v-card>
        </slide>
      </carousel-3d>

      <v-icon size="100" class="mb-5" style="margin-top: -20px">
        {{ mdiArrowDownBoldHexagonOutline }}
      </v-icon>

      <h1 class="display-1">
        {{ lists[1].title }}
      </h1>
      <p class="justify-center">
        {{ lists[1].subtitle }}
      </p>
      <carousel-3d
        style="min-height: 400px"
        :border="0"
        :perspective="20"
        :inverse-scaling="50"
        :space="350"
        autoplay
        :autoplay-timeout="5000"
        width="400"
      >
        <slide
          v-for="(item, i) in lists[1].list"
          :key="i"
          class="overflow-visible"
          :index="i"
          style="height: auto; background-color: transparent"
        >
          <v-card class="shadow" outlined shaped>
            <v-img class="align-end" height="200px" :src="item.image" />
            <v-card-title class="primary--text pb-0" v-text="item.title" />
            <v-card-text v-text="item.content" />
          </v-card>
        </slide>
      </carousel-3d>
      <div class="grey lighten-4 mt-10 text-center">
        <v-container>
          <Partners :message="message" />
        </v-container>
      </div>
      <v-icon size="100" class="my-5">
        {{ mdiArrowDownBoldHexagonOutline }}
      </v-icon>
      <div>
        <h1 class="display-1">
          Phase-3
        </h1>
        <v-row align="center" justify="center">
          <v-col col="12" sm="7">
            <v-img
              max-width="75%"
              class="d-inline-flex"
              src="/landing/selid.webp"
              style="z-index: 1"
            />
            <v-img
              width="12rem"
              class="d-inline-block tracksym"
              src="https://eskalate.io/img/tracksym.svg"
            />
          </v-col>
          <v-col col="12" sm="5">
            <p style="font-size: 1.2rem">
              In the last phase of the program, our students will work on a
              social problem of their choosing. And develop a solution as a
              team. This way, they get experience in the full process of
              software development as well as improve their skills. It will also
              help them learn how to work with teams and how to take on
              responsibilities. See first trainees' social project -
              <a href="https://tracksym.app" target="_blank">Tracksym</a>.
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="mt-10">
        <h1 class="display-2 mb-5">
          What we hope to achieve
        </h1>
        <p style="font-size: 1.2rem">
          Here in A2SV, we believe talent is everywhere, but the opportunity is
          not. We hope to change that for Africa.<br>
          Even though there are a lot of smart tech students with the talent and
          the motivation, getting the opportunity to work for big companies such
          as those in silicon valley is rare. That is why A2SV is working to
          bring these talented students the opportunity that could change their
          lives.<br>
          It is not only our students, but Companies also need to get their
          hands on the top talent they can get. But for one reason or another,
          these two entities are not reaching one another. Therefore, our
          ultimate goal is to be the bridge between these two gaps and connect
          the talent with the opportunity.
        </p>
      </div>
      <div
        class="my-10 py-6"
        style="border-left: 6px solid grey; background-color: #f5f5f5"
      >
        <p style="font-size: 1.5rem">
          You can help us reach our goal, join our mission, and support us in
          any way you can.
        </p>
        <v-btn class="button-fill-bottom" large to="/support">
          Support
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mdiArrowDownBoldHexagonOutline } from "@mdi/js";
import Banner from "@/components/core/TextOnlyBanner";
import Partners from "@/components/core/Partners";
import VuePlyr from "vue-plyr/dist/vue-plyr.ssr.js";

export default {
  components: {
    Banner,
    Partners,
    VuePlyr
  },
  data() {
    return {
      mdiArrowDownBoldHexagonOutline,
      message: "At the end of phase 2, our students will have interviews with our partner companies.",
      lists: [
        {
          title: "Phase-1",
          subtitle:
            "In this phase, students go through a series of lectures after school.  Which includes:-",
          list: [
            {
              title: "Technical Training",
              content:
                "6 days a week, 3 hours of lectures, and practice sessions to improve problem-solving skills. In the Lectures, we cover basic to advanced data structures and algorithms and how they are used to solve a problem.",
              image:
                "/about/technical.jpg"
            },
            {
              title: "Contests",
              content:
                "Bi-weekly contests, to get better at competitive programming and problem solving using online platforms such as leetcode.com and codeforces.com.",
              image:
                "https://res.cloudinary.com/eskalate/image/upload/v1609847800/activities/micky-feysel.jpg"
            },
            {
              title: "Q&As",
              content:
                "Q&A Sessions with engineers, founders, and data scientists from top SV companies to learn from their best practices and to realize that they are normal people.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596886905/gallery/IMG_20200306_140909-scaled_ajf84u.jpg"
            },
            {
              title: "Problem Solving",
              content:
                "A session in which students solve a problem on a whiteboard while explaining to the rest of the class. It helps students to get a feel of the interview environment as well as improve their communication skills.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596886905/gallery/IMG_20200306_140909-scaled_ajf84u.jpg"
            },
            {
              title: "Learning How to Approach",
              content:
                "Learning how to approach sessions to learn best practices from an experienced problem solver",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596886905/gallery/IMG_20200306_140909-scaled_ajf84u.jpg"
            },
            {
              title: "1-1s",
              content:
                "Bi-weekly 1:1s with students to get to know each other and open a communication channel",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596886905/gallery/IMG_20200306_140909-scaled_ajf84u.jpg"
            }
          ]
        },
        {
          title: "Phase-2",
          subtitle:
            "In phase-2 students will get into a one-month Bootcamp, 6days a week, all day. In this Bootcamp, on top of what we have done in phase 1, students will also go through:-",
          list: [
            {
              title: "Daily Contests",
              content:
                "The frequency of the contests we had will increase from phase1, which helps in improving competitive programming and problem-solving skills.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            },
            {
              title: "Communication Skill Assessments",
              content:
                "In this session, our students get feedback from their mentors on problem explaining skills by recording a video of themselves solving a technical problem. It aims to improve their way of communicating ideas to an audience, whether that is an interviewer or a colleague.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            },
            {
              title: "Mock Interviews",
              content:
                "Mock interviews happen in three ways. One, students will have mock interviews with each other. Two, students will use platforms such as pramp.com to have mock interviews with their peers. And three, our students will also get the chance to be mock interviewed by industry professionals from silicon valley companies.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            },
            {
              title: "Moonwalks",
              content:
                "Daily half an hour pair walks among teammates to improve connections.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            },
            {
              title: "Weekly 1-1s",
              content:
                "Weekly 1:1s to check progress and to provide personalized improvement plan",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            },
            {
              title: "Social Activities",
              content:
                "We organize different activities such as games, hikes, and visits to local tourist attractions to help a strong team-building.",
              image:
                "http://res.cloudinary.com/eskalate/image/upload/v1596887173/gallery/IMG_20200306_151818_gbvq7u.jpg"
            }
          ]
        }
      ]
    };
  },
  head: {
    title: "About Us",
    link: {
      rel: "stylesheet",
      link: ""
    }
  }
};
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.2/plyr.css';
</style>
