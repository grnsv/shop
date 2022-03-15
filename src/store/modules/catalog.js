import axios from 'axios';

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
        const response = await axios.get('http://localhost:5555/api/products');
        commit('SET_GOODS_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
