<template>
  <ul class="browse-menu drop-list">
    <li v-for="(items, categoryName) in categories" :key="categoryName">{{ categoryName }}
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import data from '@/assets/json/browseMenu.json';

export default {
  data() {
    return {
      categories: data,
    };
  },
};
</script>
