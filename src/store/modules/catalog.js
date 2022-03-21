import axios from 'axios';

axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${process.env.VUE_APP_SERVER_PORT || 5555}`;

export default {
  state: () => ({
    goods: [],
  }),
  getters: {
    goods(state) {
      return state.goods;
    },
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      try {
        const response = await axios.get('/api/products');
        commit('SET_GOODS_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
