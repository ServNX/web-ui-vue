import Vue from 'vue';
import Vuetify from 'vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome/index';

import App from './App';
import router from './router';
import store from './store';

import './App.scss';

require('./FaIconLibrary');

Vue.use(Vuetify, {
  theme: {
    accent: '#00ccff',
  },
});

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
