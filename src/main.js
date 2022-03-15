import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretUp,
  faCaretDown,
  faSearch,
  faStar,
  faStarHalfAlt,
  faTimesCircle,
  faLongArrowAltRight,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/styles/normalize.css';
import '@fontsource/lato/300-italic.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400-italic.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700-italic.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900-italic.css';
import '@fontsource/lato/900.css';
import '@/assets/styles/style.scss';

const app = createApp(App);

library.add(
  faCaretUp,
  faCaretDown,
  faSearch,
  faStar,
  faStarHalfAlt,
  faTimesCircle,
  faLongArrowAltRight,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
  faGooglePlusG,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
);
app.component('font-awesome-icon', FontAwesomeIcon);

app
  .use(store)
  .use(router)
  .mount('#app');
