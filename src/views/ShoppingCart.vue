<template>
  <main>
    <bread-crumb />

    <cart-list />

    <cart-order />

    <feedback />
  </main>
</template>

<script>
import BreadCrumb from '@/blocks/BreadCrumb.vue';
import Feedback from '@/blocks/Feedback.vue';
import CartList from '@/blocks/CartList.vue';
import CartOrder from '@/blocks/CartOrder.vue';

export default {
  components: {
    BreadCrumb,
    Feedback,
    CartList,
    CartOrder,
  },
};
</script>
