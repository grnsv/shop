<template>
  <section id="products">
    <h2>Fetured Items</h2>
    <p>Shop for items based on what we featured in this week</p>
    <ul class="product-list">
      <catalog-item v-for="good of homeProducts" :good="good" :key="good.id_product" />
    </ul>
    <router-link to="/catalog" class="browse-all">
      <span>Browse All Product</span>
      <font-awesome-icon icon="long-arrow-alt-right" />
    </router-link>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from '@/components/CatalogItem.vue';

export default {
  components: { CatalogItem },
  computed: {
    ...mapGetters(['homeProducts', 'cartItems']),
  },
  methods: {
    ...mapActions(['getHomeProductsList', 'addCartItem']),
  },
  created() {
    this.getHomeProductsList();
  },
};
</script>
