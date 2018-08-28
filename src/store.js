import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'site-layout',
    user_id: null,
    account: null,
    access_token: null,
  },
  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload;
    },
    SET_USER_ID(state, payload) {
      state.user_id = payload;
    },
    SET_ACCOUNT(state, payload) {
      state.account = payload;
    },
    SET_ACCESSTOKEN(state, payload) {
      state.access_token = payload;
    },
  },
  getters: {
    layout(state) {
      return state.layout;
    },
    user_id(state) {
      return state.user_id;
    },
    account(state) {
      return state.account;
    },
    token(state) {
      return state.access_token;
    },
  },
  actions: {
    storeUserId({ commit }, userid) {
      localStorage.setItem('user_id', userid);
      commit('SET_USER_ID', userid);
    },
    storeAccount({ commit, state }) {
      Vue.axios.get(`${process.env.VUE_APP_API_ENDPOINT}/api/user/${state.user_id}`)
        .then(response => {
          commit('SET_ACCOUNT', response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
      });
    },
    storeAccessToken({ commit }, token) {
      Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('access_token', token);
      commit('SET_ACCESSTOKEN', token);
    },
  },
});
