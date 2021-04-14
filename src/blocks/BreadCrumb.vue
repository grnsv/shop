<template>
  <!-- eslint-disable max-len -->
  <section id="breadcrumb">
      <h2>New Arrivals</h2>
      <ol>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/catalog">Men</router-link></li>
        <li>New Arrivals</li>
      </ol>
    </section>
</template>

<script>
export default {
  name: 'BreadCrumb',
};
</script>
