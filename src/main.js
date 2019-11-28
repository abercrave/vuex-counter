import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VuePageTitle from 'vue-page-title';
import App from './App.vue';
import store from './store';
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VuePageTitle, {
  router,
  suffix: '- Vuex Counter',
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
