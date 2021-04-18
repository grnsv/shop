import axios from 'axios';

export default {
  state: {
    goods: [],
  },
  getters: {
    goods(state) {
      return state.goods;
    },
    // getImgById: (state) => (id) => {
    //   const good = state.goods.find((item) => item.id_product === id);
    //   return good.img;
    // },
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      const { data: goods } = await axios.get('http://localhost:5555/api/products');
      commit('SET_GOODS_LIST', goods);
    },
  },
};
