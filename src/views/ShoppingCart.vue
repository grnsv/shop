<template>
  <!-- eslint-disable max-len -->
  <main>
    <bread-crumb/>

    <cart-list/>

    <section id="order">
      <h2 style="position: absolute; visibility: hidden;">Order</h2>
      <div class="address">
        <h3>Shipping Adress</h3>
        <select name="country" id="country">
          <option value="bangladesh">Bangladesh</option>
        </select>
        <input type="text" name="state" id="state" placeholder="State">
        <input type="text" name="postcode" id="postcode" placeholder="Postcode / Zip">
        <button type="button">get a quote</button>
      </div>
      <div class="discount">
        <h3>coupon  discount</h3>
        <p>Enter your coupon code if you have one</p>
        <input type="text" name="code" id="code" placeholder="State">
        <button>Apply coupon</button>
      </div>
      <div class="total">
        <h3 style="position: absolute; visibility: hidden;">Total</h3>
        <dl>
          <div class="sub-total">
            <dt>Sub total</dt>
            <dd>$900</dd>
          </div>
          <div class="grand-total">
            <dt>GRAND TOTAL</dt>
            <dd class="pink">$900</dd>
          </div>
        </dl>
        <router-link to="/checkout">proceed to checkout</router-link>
      </div>
    </section>

    <feedback/>
  </main>
</template>

<script>
import BreadCrumb from '@/blocks/BreadCrumb.vue';
import Feedback from '@/blocks/Feedback.vue';
import CartList from '@/blocks/CartList.vue';

export default {
  name: 'ShoppingCart',
  components: {
    BreadCrumb,
    Feedback,
    CartList,
  },
};
</script>
