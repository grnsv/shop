<template>
  <section id="recommendations">
    <h2>you may like also</h2>
    <ul class="product-list">
      <catalog-item v-for="good of recommendations" :good="good" :key="good.id_product" />
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from '@/components/CatalogItem.vue';

export default {
  components: { CatalogItem },
  computed: {
    ...mapGetters(['recommendations', 'cartItems']),
  },
  methods: {
    ...mapActions(['getRecommendList', 'addCartItem']),
  },
  created() {
    this.getRecommendList();
  },
};
</script>
