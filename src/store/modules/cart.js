import axios from 'axios';

export default {
  state: {
    cartItems: [],
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
  },
  mutations: {
    SET_CART_LIST(state, cartItems) {
      state.cartItems = cartItems;
    },
  },
  actions: {
    async getCartList({ commit }) {
      const { data: cartItems } = await axios.get('http://localhost:5555/api/cart');
      commit('SET_CART_LIST', cartItems);
    },
  },
};
