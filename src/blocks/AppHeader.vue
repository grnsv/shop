<template>
  <!-- eslint-disable max-len -->
  <header>
    <h1>
      <router-link to="/" class="logo">
        <img class="logo-img" src="@/assets/images/logo.png" alt="BRAND">
        <span>BRAN</span><span class="pink bold">D</span>
      </router-link>
    </h1>
    <div class="search">
      <div class="browse drop">
        <button class="browse-btn">
          <span>Browse</span>
          <i class="fas fa-caret-down"></i>
        </button>
        <browse-menu/>
      </div>
      <form action="#" class="search-form">
        <input class="search-field" type="search" placeholder="Search for Item..." required>
        <button class="search-btn" type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>

    <div class="login">
      <cart-drop-list/>
      <button class="account">
        <span>My Account</span>
        <i class="fas fa-caret-down"></i>
      </button>
    </div>

    <nav>
      <h2 style="position: absolute; visibility: hidden;">Menu</h2>
      <mega-menu/>
    </nav>
  </header>
</template>

<script>
import BrowseMenu from '@/components/BrowseMenu.vue';
import MegaMenu from '@/components/MegaMenu.vue';
import CartDropList from '@/blocks/CartDropList.vue';

export default {
  components: {
    BrowseMenu,
    MegaMenu,
    CartDropList,
  },
  name: 'AppHeader',
};
</script>
