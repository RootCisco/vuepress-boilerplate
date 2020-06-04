import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  currentLang: 'jp'
};

const modules = {};

const mutations = {
  changeLang(state, lang) {
    state.currentLang = lang;
  }
};

const actions = {
  changeLang({ commit }, path) {
    const lang = path === '/en/' ? 'en' : 'jp';
    commit('changeLang', lang);
  }
};

const store = new Vuex.Store({ state, modules, mutations, actions });

export default store;
