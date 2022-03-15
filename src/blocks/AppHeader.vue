<template>
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
          <font-awesome-icon icon="caret-down" />
        </button>
        <browse-menu />
      </div>
      <form action="#" class="search-form">
        <input class="search-field" type="search" placeholder="Search for Item..." required>
        <button class="search-btn" type="submit"><font-awesome-icon icon="search" /></button>
      </form>
    </div>

    <div class="login">
      <cart-drop-list />
      <button class="account">
        <span>My Account</span>
        <font-awesome-icon icon="caret-down" />
      </button>
    </div>

    <nav>
      <h2 style="position: absolute; visibility: hidden;">Menu</h2>
      <mega-menu />
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
};
</script>
