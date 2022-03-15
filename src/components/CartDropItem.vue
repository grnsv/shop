<template>
  <li>
    <figure>
      <img :src="good.img" :alt="good.id_product" width="72" height="85">
      <figcaption>
        <h3>{{good.product_name}}</h3>
        <div class="stars">
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star-half-alt" />
        </div>
        <p class="cart-sum">
          <span class="cart-qty">{{good.quantity}}</span>  x   <span class="cart-price">
            {{good.price}}</span>
        </p>
      </figcaption>
    </figure>
    <button class="delete-item" @click="$emit('remove', good)">
      <font-awesome-icon icon="times-circle" />
    </button>
  </li>
</template>

<script>
export default {
  props: ['good'],
};
</script>
