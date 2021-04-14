<template>
  <ul class="product-list">
    <catalog-item v-for="good of goods" :good="good" :key="good.id_product"/>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from '@/components/CatalogItem.vue';

export default {
  name: 'CatalogList',
  components: { CatalogItem },
  computed: {
    ...mapGetters(['goods']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
  },
  created() {
    this.getGoodsList();
  },
};
</script>
