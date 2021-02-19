import Vue from "vue";

export const states = () => ({
  teamMembers: null,
  advisors: null,
  teamValues: null
});
export const getters = {
  getTeamMembers(state) {
    return state.teamMembers;
  },
  getAdvisors(state) {
    return state.advisors;
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
  setAdvisors(state, advisors) {
    Vue.set(state, "advisors", advisors);
  },
  setTeamValues(state, teamValues) {
    Vue.set(state, "teamValues", teamValues);
  }
};
export const actions = {
  async fetchMembers({ commit }) {
    const response = await this.$axios.get("/api/team?limit=30");
    commit("setTeamMembers", response.data.data.filter(member => member.member_type === "MEMBER"));
    commit("setAdvisors", response.data.data.filter(member => member.member_type === "ADVISOR"));
  },

  async fetchTeamValues({commit}) {
    const response = await this.$axios.get("api/webResource?category=Team Values");
    commit("setTeamValues", response.data.data[0].body);
  }
};
