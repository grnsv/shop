<template>
  <tr>
    <td class="align-left">
      <figure>
        <router-link to="/single-page">
          <img :src="good.img" :alt="good.id_product" width="100" height="115">
        </router-link>
        <figcaption>
          <h3>{{good.product_name}}</h3>
          <dl>
            <div>
              <dt>Color</dt>
              <dd>Red</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>Xll</dd>
            </div>
          </dl>
        </figcaption>
      </figure>
    </td>
    <td>${{good.price}}</td>
    <td>
      <input type="number" name="quantity1" id="quantity1" :value="good.quantity" min="1">
    </td>
    <td>FREE</td>
    <td>${{good.price * good.quantity}}</td>
    <td>
      <button class="delete-item" @click="$emit('remove', good)">
        <font-awesome-icon icon="times-circle" />
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['good'],
};
</script>
