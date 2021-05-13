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
    REMOVE_CART_ITEM(state, item) {
      state.cartItems.contents.splice(state.cartItems.contents.indexOf(item), 1);
    },
    CALCULATE_CART(state) {
      const newCart = state.cartItems;
      newCart.countGoods = newCart.contents.length;
      newCart.amount = newCart.contents.reduce((sum, item) => sum + item.quantity * item.price, 0);
      state.cartItems = newCart;
    },
  },
  actions: {
    async getCartList({ commit }) {
      const { data: cartItems } = await axios.get('http://localhost:5555/api/cart');
      commit('SET_CART_LIST', cartItems);
    },
    async removeCartItem({ commit }, item) {
      await axios.delete(`http://localhost:5555/api/cart/${item.id_product}`);
      commit('REMOVE_CART_ITEM', item);
      commit('CALCULATE_CART');
    },
  },
};
