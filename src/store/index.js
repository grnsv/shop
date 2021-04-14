import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import cart from './modules/cart';
import recommendations from './modules/recommendations';
import homeProducts from './modules/homeProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    cart,
    recommendations,
    homeProducts,
  },
});
