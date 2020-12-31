import Vue from "vue";

export const states = () => ({
  teamMembers: null
});
export const getters = {
  getTeamMembers(state) {
    return state.teamMembers;
  },
  getTeamMemberDetails: (state) => (id) => {
    return state.teamMembers[id];
  }
};
export const mutations = {
  setTeamMembers(state, teamMembers) {
    // vuex getters are not reactive for some reasons so I decide to use Vue.set
    Vue.set(state, "teamMembers", teamMembers);
  }
};
export const actions = {
  async fetchMembers({ commit }) {
    const response = await this.$axios.get("/api/team");
    commit("setTeamMembers", filterMembers(response.data));
  }
};

// this will just filter out team members who have no nice profile picture :(
function filterMembers(members) {
  const blackListed = [
    "Mike Ward",
    "Abel Tsegaye",
    "Beimnet Zewdu",
    "Tumsa Umeta",
    "Kaleab Belay",
    "Süha Tanrıverdi"
  ];
  return members.filter(member => {
    return blackListed.includes(member.name) === false;
  });
}
