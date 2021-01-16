import Vue from "vue";

export const states = () => ({
  impactStories: [],
  learnings: [],
  aboutUs: []
});

export const getters = {
  getImpactStories: state => state.impactStories,
  getLearnPaths: state => state.learnings,
  getAboutUs: state => state.aboutUs
};

export const mutations = {
  setImpactStories(state, impactStories) {
    // vuex getters are not reactive for some reasons so I decide to use Vue.set
    Vue.set(state, "impactStories", impactStories);
  },
  setLearningPaths(state, learnings) {
    // state.learnings = learnings;
    Vue.set(state, "learnings", learnings);
  },
  setAboutUs(state, about) {
    // state.learnings = learnings;
    Vue.set(state, "aboutUs", about);
  }
};

export const actions = {
  async fetchMembers({ commit }) {
    const response = await this.$axios.get("/api/impactStoryResource");
    commit("setImpactStories", response.data.data);
  },
  async setLearningPaths({ commit }) {
    const response = await this.$axios.get("/api/webResource?category=Phases");
    commit("setLearningPaths", response.data.data[0].body);
  },
  async setAboutUs({ commit }) {
    const response = await this.$axios.get("/api/webResource?category=About Us");
    commit("setAboutUs", response.data.data[0].body);
  }
};
