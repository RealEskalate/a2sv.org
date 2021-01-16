<template>
  <div class="mb-5">
    <banner
      img-width="10rem"
      img="/illustrations/character-15.svg"
      :title="banner.title_one"
      :description="banner.description"
    >
      <section>
        <div v-for="( method, i ) in waysOfHelping" :key="i">
          <input
            :id="`control-${i}`"
            type="radio"
            name="select"
            value="2"
          >
          <label :for="`control-${i}`">
            <h2> {{ method.title }} </h2>
            <p class="font-weight-light"> {{ method.description }} </p>
          </label>
        </div>
      </section>
    </banner>
  </div>
</template>

<script>
import Banner from "@/components/core/TextOnlyBanner";
import { mdiArrowRightBox } from "@mdi/js";


export default {
  components: {
    Banner
  },
  filters: {
    uppercase(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  data: () => ({
    model: 0,
    mdiArrowRightBox,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    waysOfHelping: [
      {title: "Recruit", description: "Connect us to recruiter. We will shine on your interviews"},
      {title: "Mentor", description: "Now we're talking. It's gettin' a bit hairy out there in game land."},
      {title: "Donate", description: "Awww, poor baby. You can donate $5"},
      {title: "Contact us", description: "If you just wanna talk, we're down for that too."}
    ],
    banner: {
      image_src: "https://i.ibb.co/xMHdzk6/team-hero-3.jpg",
      title_one: "Be part of our journey",
      title_two: "Support us",
      description: "You are helping A2SV to train more students in Africa"
    },
    form_type: "",
    forms: ["Interviews", "Mentorship", "Q & A"],
    valid: false,
    contact: {
      name: "",
      email: "",
      linkedin: "",
      experience: ""
    },
    labels: {
      name: "Name",
      email: "Email",
      linkedin: "LinkedIn Profile URL (Optional)",
      experience: "Experience"
    },
    rules: {
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      experienceRules: [
        (v) => !!v || "Experience is required",
        (v) =>
          (v && v.length <= 150) ||
          "Experience must be less than 150 characters"
      ]
    }
  }),
  head: {
    title: "Support Us"
  },
  methods: {
    sendForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.contact-us {
  background: rgba(255, 255, 255, 0.8)!important;
}

body {
  padding: 1rem;
  color: #797e86;
}

h1 {
  color: #18191b;
  margin-bottom: 2rem;
}

section {
  display: flex;
  flex-flow: row wrap;
}

section > div {
  flex: 1;
  padding: 0.5rem;
  font-family: Lato, Nunito, sans-serif !important;
}

input[type=radio] {
  display: none;
}
input[type=radio]:not(:disabled) ~ label {
  cursor: pointer;
}
input[type=radio]:disabled ~ label {
  color: #bcc2bf;
  border-color: #bcc2bf;
  box-shadow: none;
  cursor: not-allowed;
}

label {
  height: 100%;
  display: block;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0px 3px 10px -2px rgba(161, 170, 166, 0.5);
  position: relative;
}

input[type=radio]:checked + label {
  background: #1dc973;
  color: white;
  box-shadow: 0 0 20px rgba(0, 255, 128, 0.75);
}
input[type=radio]:checked + label::after {
  color: #3d3f43;
  font-size: 24px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: white;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.25);
}

p {
  font-weight: 900;
}

@media only screen and (max-width: 700px) {
  section {
    flex-direction: column;
  }
}
</style>
