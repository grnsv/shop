<template>
  <main>
    <section id="slider">
      <h2 style="position: absolute; visibility: hidden;">Slider</h2>
      <div class="slide-holder">
        <figure class="slide" id="slide1">
          <img src="@/assets/images/header-bg.png" alt="slide">
          <figcaption>
            <h3>THE BRAND</h3>
            <p>OF LUXERIOUS <span class="pink">FASHION</span></p>
          </figcaption>
        </figure>
        <figure class="slide" id="slide2">
          <img src="@/assets/images/header-bg.png" alt="slide">
          <figcaption>
            <h3>THE BRAND</h3>
            <p>OF LUXERIOUS <span class="pink">FASHION</span></p>
          </figcaption>
        </figure>
        <figure class="slide" id="slide3">
          <img src="@/assets/images/header-bg.png" alt="slide">
          <figcaption>
            <h3>THE BRAND</h3>
            <p>OF LUXERIOUS <span class="pink">FASHION</span></p>
          </figcaption>
        </figure>
        <figure class="slide" id="slide4">
          <img src="@/assets/images/header-bg.png" alt="slide">
          <figcaption>
            <h3>THE BRAND</h3>
            <p>OF LUXERIOUS <span class="pink">FASHION</span></p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="category">
      <h2 style="position: absolute; visibility: hidden;">Categories</h2>
      <div class="category-left">
        <figure class="category-banner" id="category-banner1">
          <img src="@/assets/images/cat-1.png" alt="cat-1">
          <figcaption>
            <h3>hOT dEAL</h3>
            <p class="pink">FOR MEN</p>
          </figcaption>
        </figure>
        <figure class="category-banner" id="category-banner3">
          <img src="@/assets/images/cat-3.png" alt="cat-3">
          <figcaption>
            <h3>LUXIROUS & trendy</h3>
            <p class="pink">ACCESORIES</p>
          </figcaption>
        </figure>
      </div>
      <div class="category-right">
        <figure class="category-banner" id="category-banner2">
          <img src="@/assets/images/cat-2.png" alt="cat-2">
          <figcaption>
            <h3>30% offer</h3>
            <p class="pink">women</p>
          </figcaption>
        </figure>
        <figure class="category-banner" id="category-banner4">
          <img src="@/assets/images/cat-4.png" alt="cat-4">
          <figcaption>
            <h3>new arrivals</h3>
            <p class="pink">FOR kids</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <home-products />

    <feature />

    <feedback />
  </main>
</template>

<script>
import Feature from '@/blocks/Feature.vue';
import Feedback from '@/blocks/Feedback.vue';
import HomeProducts from '@/blocks/HomeProducts.vue';

export default {
  components: {
    Feature,
    Feedback,
    HomeProducts,
  },
};
</script>
