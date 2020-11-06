export const states = () => ({
  navbarColor: "light"
});
export const getters = {
  getColor(state) {
    return state.navbarColor;
  }
};
export const mutations = {
  setActiveLink(state, color) {
    state.navbarColor = color;
  }
};
export const actions = {
  setActiveLink({ commit }, color) {
    commit("setActiveLink", color);
  }
};
