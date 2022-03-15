<template>
  <li class="product">
    <figure>
      <img :src="good.img" :alt="good.id_product" width="263" height="280">
      <figcaption>
        <h3 class="product-name">
          <router-link to="/single-page">{{good.product_name}}</router-link>
        </h3>
        <p class="product-price">
          {{ good.price.toLocaleString("en-US", {style: "currency", currency: "USD"}) }}
        </p>
      </figcaption>
    </figure>
    <div class="product-cart">
      <button @click="$emit('add', good)">
        <img src="@/assets/images/cart-white.png" alt="cart">
        <span>Add to Cart</span>
      </button>
      <button>
        <img src="@/assets/images/arrows.png" alt="arrows">
      </button>
      <button>
        <img src="@/assets/images/heart.png" alt="heart">
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['good'],
};
</script>
