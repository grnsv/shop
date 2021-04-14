<template>
  <!-- eslint-disable max-len -->
  <main>
    <bread-crumb/>

    <section id="image-slide">
      <h2 style="position: absolute; visibility: hidden;">Image</h2>
      <img src="@/assets/images/image_slide.jpg" alt="image_slide">
      <div class="buttons">
        <button><i class="fas fa-angle-left"></i></button>
        <button><i class="fas fa-angle-right"></i></button>
      </div>
    </section>

    <section id="product-description">
      <h2 style="position: absolute; visibility: hidden;">Description</h2>
      <router-link to="/catalog" class="category-name">WOMEN COLLECTION<div class="divider"></div></router-link>
      <h3 class="product-name">Moschino Cheap And Chic</h3>
      <p class="description">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
      <dl>
        <div>
          <dt>MATERIAL</dt>
          <dd>COTTON</dd>
        </div>
        <div>
          <dt>DESIGNER</dt>
          <dd>BINBURHAN</dd>
        </div>
      </dl>
      <p class="price">$561</p>
      <form action="#" class="product-order">
        <div class="choose">
          <label for="color">CHOOSE COLOR</label>
          <select name="color" id="color">
            <option value="red">Red</option>
          </select>
        </div>
        <div class="choose">
          <label for="size">CHOOSE SIZE</label>
          <select name="size" id="size">
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div class="choose">
          <label for="quantity">QUANTITY</label>
          <input type="number" name="quantity" id="quantity" value="2" min="1">
        </div>
        <button type="submit">
          <img src="@/assets/images/cart-pink.png" alt="cart">
          <span>Add to Cart</span>
        </button>
      </form>
    </section>

    <recommendations/>

    <feedback/>
  </main>
</template>

<script>
import BreadCrumb from '@/blocks/BreadCrumb.vue';
import Feedback from '@/blocks/Feedback.vue';
import Recommendations from '@/blocks/Recommendations.vue';

export default {
  name: 'SinglePage',
  components: {
    BreadCrumb,
    Feedback,
    Recommendations,
  },
};
</script>
