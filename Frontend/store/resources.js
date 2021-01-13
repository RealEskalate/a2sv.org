import Vue from "vue";

export const states = () => ({
  impactStories: []
});
export const getters = {
  getImpactStories(state) {
    return state.impactStories;
  }
};
export const mutations = {
  setImpactStories(state, impactStories) {
    // vuex getters are not reactive for some reasons so I decide to use Vue.set
    Vue.set(state, "impactStories", impactStories);
  }
};
export const actions = {
  async fetchMembers({ commit }) {
    const response = await this.$axios.get("/api/impactStoryResource");
    commit("setImpactStories", response.data.data);
  }
};
