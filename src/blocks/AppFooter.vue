<template>
  <footer>
    <div class="footer-top">
      <div>
        <router-link to="/" class="logo">
          <img class="logo-img" src="@/assets/images/logo.png" alt="BRAND">
          <span>BRAN</span><span class="pink bold">D</span>
        </router-link>
      </div>
      <div class="footer-title">COMPANY</div>
      <div class="footer-title">INFORMATION</div>
      <div class="footer-title">SHOP CATEGORY</div>
      <div class="footer-text">
        <p>Objectively transition extensive data rather than cross functional solutions.
          Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits.
          Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit
          partnerships.</p>
        <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize
          superior initiatives for wireless technologies. Dynamically optimize.</p>
        <p>Objectively strategize seamless relationships via resource sucking testing procedures.
          Proactively cultivate next-generation results for value-added methodologies. Dynamically
          plagiarize unique methodologies after performance based methodologies. Monotonectally
          empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically
          orchestrate resource sucking scenarios after alternative synergy.</p>
        <p>Compellingly envisioneer corporate methods of&nbsp;empowerment before standards compliant
          technologies. Objectively facilitate progressive.</p>
      </div>
      <div class="footer-list">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Shop</router-link></li>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/">How It Works</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-list">
        <ul>
          <li><router-link to="/">Tearms & Condition</router-link></li>
          <li><router-link to="/">Privacy Policy</router-link></li>
          <li><router-link to="/">How to Buy</router-link></li>
          <li><router-link to="/">How to Sell</router-link></li>
          <li><router-link to="/">Promotion</router-link></li>
        </ul>
      </div>
      <div class="footer-list">
        <ul>
          <li><router-link to="/catalog">Men</router-link></li>
          <li><router-link to="/catalog">Women</router-link></li>
          <li><router-link to="/catalog">Child</router-link></li>
          <li><router-link to="/catalog">Apparel</router-link></li>
          <li><router-link to="/catalog">Browse All</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <small class="copy">&copy;&nbsp;2017 Brand All Rights Reserved.</small>
      <ul class="socials">
        <li><router-link to="/">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </router-link></li>
        <li><router-link to="/">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </router-link></li>
        <li><router-link to="/">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </router-link></li>
        <li><router-link to="/">
          <font-awesome-icon :icon="['fab', 'pinterest-p']" />
        </router-link></li>
        <li><router-link to="/">
          <font-awesome-icon :icon="['fab', 'google-plus-g']" />
        </router-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>
