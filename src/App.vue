<template>
  <div id="app">
    <app-header/>

    <router-view/>

    <app-footer/>

  </div>
</template>

<script>
import AppHeader from '@/blocks/AppHeader.vue';
import AppFooter from '@/blocks/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
