import axios from 'axios';

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
        const response = await axios.get('http://localhost:5555/api/homeProducts');
        commit('SET_HOME_PRODUCTS_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
