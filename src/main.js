import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/normalize.css';
import '@fontsource/lato/300-italic.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400-italic.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700-italic.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900-italic.css';
import '@fontsource/lato/900.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/styles/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
