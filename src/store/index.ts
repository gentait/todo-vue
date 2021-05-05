import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  mutations: {
    add(state, payload) {
      state.items.splice(payload.idx, 0, payload.newItem);
    },
    remove(state, payload) {
      state.items.splice(payload.idx, 1);
    },
  },
  actions: {
    delayAdd({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 1000);
    },
  },
  modules: {},
});
