<template>
  <div class="cart drop">
    <router-link to="/cart"><img src="@/assets/images/cart.png" alt="cart"></router-link>
    <div class="cart-list drop-list">
      <ul>
        <cart-drop-item v-for="good of cartItems.contents"
        :good="good" :key="good.id_product" @remove="removeCartItem" />
      </ul>
      <div class="cart-total">
        <span>TOTAL</span>
        <span id="cart-total">{{cartItems.amount}}</span>
      </div>
      <div class="cart-buttons">
        <router-link to="/checkout" class="cart-checkout">Checkout</router-link>
        <router-link to="/cart">Go to cart</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartDropItem from '@/components/CartDropItem.vue';

export default {
  components: { CartDropItem },
  computed: {
    ...mapGetters(['cartItems']),
  },
  methods: {
    ...mapActions(['getCartList', 'removeCartItem']),
  },
  created() {
    this.getCartList();
  },
};
</script>
