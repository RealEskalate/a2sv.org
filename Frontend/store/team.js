import Vue from "vue";

export const states = () => ({
  teamMembers: null,
  teamValues: null
});
export const getters = {
  getTeamMembers(state) {
    return state.teamMembers;
  },
  getTeamMemberDetails: (state) => (id) => {
    return state.teamMembers[id];
  },
  getTeamValues: (state) => {
    return state.teamValues;
  }
};
export const mutations = {
  setTeamMembers(state, teamMembers) {
    // vuex getters are not reactive for some reasons so I decide to use Vue.set
    Vue.set(state, "teamMembers", teamMembers);
  },
  setTeamValues(state, teamValues) {
    Vue.set(state, "teamValues", teamValues);
  }
};
export const actions = {
  async fetchMembers({ commit }) {
    const response = await this.$axios.get("/api/team?limit=30");
    commit("setTeamMembers", response.data.data);
  },

  async fetchTeamValues({commit}) {
    const response = await this.$axios.get("api/webResource?category=Team Values");
    commit("setTeamValues", response.data.data[0].body);
  }
};
