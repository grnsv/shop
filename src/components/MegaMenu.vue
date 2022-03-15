<template>
  <ul class="menu">
    <li class="drop" v-for="(category, categoryName) in categories" :key="categoryName">
      <router-link :to="category.link">{{ categoryName }}</router-link>
      <ul class="mega-menu drop-list">
        <li v-for="(subcategory, index) in category.list" :key="index">{{ subcategory.title }}
          <ul>
            <li v-for="(item, index) in subcategory.list" :key="index">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </li>
        <li><router-link to="/catalog"><figure class="promo">
          <img src="@/assets/images/promo.jpg" alt="promo">
          <figcaption>Super<br>sale!</figcaption>
        </figure></router-link></li>
      </ul>
    </li>
  </ul>
</template>

<script>
import data from '@/assets/json/megaMenu.json';

export default {
  data() {
    return {
      categories: data,
    };
  },
};
</script>
