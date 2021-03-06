import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome/index';

import store from './store';
import router from './router';

import App from './App';
import './App.scss';

Vue.use(VueAxios, axios);

if (localStorage.getItem('access_token')) {
  store.commit('SET_ACCESSTOKEN', localStorage.access_token);
  Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.access_token}`;
  Vue.axios.defaults.headers.common['Content-Type'] = 'application/json';
}

if (localStorage.user_id) {
  store.commit('SET_USER_ID', localStorage.user_id);
}

Vue.use(Vuetify, {
  theme: {
    accent: '#0dc8df',
  },
});

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

require('./FaIconLibrary');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
