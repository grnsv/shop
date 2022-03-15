import axios from 'axios';

export default {
  state: () => ({
    cartItems: [],
  }),
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
    ADD_CART_ITEM(state, item) {
      state.cartItems.contents.push(item);
    },
    INCREMENT_CART_ITEM(state, item, qty) {
      const find = state.cartItems.contents.find((el) => el.id_product === item.id_product);
      find.quantity += qty;
    },
  },
  actions: {
    async getCartList({ commit }) {
      try {
        const response = await axios.get('http://localhost:5555/api/cart');
        commit('SET_CART_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
    async removeCartItem({ commit }, item) {
      try {
        await axios.delete(`http://localhost:5555/api/cart/${item.id_product}`);
        commit('REMOVE_CART_ITEM', item);
        commit('CALCULATE_CART');
      } catch (e) {
        console.log(e);
      }
    },
    async addCartItem({ commit }, item) {
      try {
        const find = this.cartItems.contents.find((el) => el.id_product === item.id_product);
        if (find) {
          await axios.put(`/api/cart/${find.id_product}`, { quantity: 1 });
          commit('INCREMENT_CART_ITEM', item, 1);
        } else {
          const prod = Object.assign({ quantity: 1 }, ...item);
          axios.post('/api/cart', prod)
            .then((data) => {
              if (data.result === 1) {
                commit('ADD_CART_ITEM', prod);
              }
            });
        }
        await axios.post(`http://localhost:5555/api/cart/${item.id_product}`);
        commit('ADD_CART_ITEM', item);
        commit('CALCULATE_CART');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
