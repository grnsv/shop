import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue'),
  },
  {
    path: '/single-page',
    name: 'SinglePage',
    component: () => import('@/views/SinglePage.vue'),
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import('@/views/ShoppingCart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
