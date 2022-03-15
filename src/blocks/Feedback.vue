<template>
  <div id="feedback">
    <section id="review">
      <h2 style="position: absolute; visibility: hidden;">Review</h2>
      <div class="review-left">
        <img src="@/assets/images/review1.png" alt="review1">
      </div>
      <div class="review-right">
        <q>Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, a&nbsp;pulvinar purus
          condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium</q>
        <p class="review-name">Bin Burhan</p>
        <p class="review-location">Dhaka, Bd</p>
        <div class="pagination">
          <button type="button"></button>
          <button type="button" class="active"></button>
          <button type="button"></button>
        </div>
      </div>
    </section>
    <section id="subscribe">
      <h2>Subscribe</h2>
      <p>FOR OUR NEWLETTER AND PROMOTION</p>
      <form action="#" class="subscribe-form">
        <input class="subscribe-field" type="email" placeholder="Enter Your Email" required>
        <input class="subscribe-btn" type="submit" value="Subscribe">
      </form>
    </section>
  </div>
</template>

<script>
export default {
};
</script>
