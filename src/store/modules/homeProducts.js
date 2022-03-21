import axios from 'axios';

axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${process.env.VUE_APP_SERVER_PORT || 5555}`;

export default {
  state: () => ({
    homeProducts: [],
  }),
  getters: {
    homeProducts(state) {
      return state.homeProducts;
    },
  },
  mutations: {
    SET_HOME_PRODUCTS_LIST(state, homeProducts) {
      state.homeProducts = homeProducts;
    },
  },
  actions: {
    async getHomeProductsList({ commit }) {
      try {
        const response = await axios.get('/api/homeProducts');
        commit('SET_HOME_PRODUCTS_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
