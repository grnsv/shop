<template>
  <li>
    <figure>
      <img :src="good.img" :alt="good.id_product" width="72" height="85">
      <figcaption>
        <h3>{{good.product_name}}</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="cart-sum">
          <span class="cart-qty">{{good.quantity}}</span>  x   <span class="cart-price">
            {{good.price}}</span>
        </p>
      </figcaption>
    </figure>
    <button class="delete-item"><i class="fas fa-times-circle"></i></button>
  </li>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: ['good'],
};
</script>
