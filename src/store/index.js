import { createStore } from 'vuex';
import catalog from '@/store/modules/catalog';
import cart from '@/store/modules/cart';
import recommendations from '@/store/modules/recommendations';
import homeProducts from '@/store/modules/homeProducts';

export default createStore({
  modules: {
    catalog,
    cart,
    recommendations,
    homeProducts,
  },
});
