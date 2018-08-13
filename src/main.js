import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store';

import './App.scss';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
