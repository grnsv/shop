<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import AppHeader from '@/blocks/AppHeader.vue';
import AppFooter from '@/blocks/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
