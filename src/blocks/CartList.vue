<template>
  <section id="shopping-cart">
    <h2 style="position: absolute; visibility: hidden;">Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th class="align-left">Product Details</th>
          <th>unite Price</th>
          <th>Quantity</th>
          <th>shipping</th>
          <th>Subtotal</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <cart-item v-for="good of cartItems.contents" :good="good" :key="good.id_product"/>
      </tbody>
      </table>

      <div class="cart-buttons">
        <button>cLEAR SHOPPING CART</button>
        <button>cONTINUE sHOPPING</button>
      </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'CartList',
  components: { CartItem },
  computed: {
    ...mapGetters(['cartItems']),
  },
  methods: {
    ...mapActions(['getCartList']),
  },
  created() {
    this.getCartList();
  },
};
</script>
