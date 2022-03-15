<template>
  <ul class="product-list">
    <catalog-item v-for="good of goods" :good="good" :key="good.id_product" />
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from '@/components/CatalogItem.vue';

export default {
  components: { CatalogItem },
  computed: {
    ...mapGetters(['goods', 'cartItems']),
  },
  methods: {
    ...mapActions(['getGoodsList', 'addCartItem']),
  },
  created() {
    this.getGoodsList();
  },
};
</script>
