<template>
  <!-- eslint-disable max-len -->
  <main>
    <bread-crumb/>

    <div class="catalog-container">
      <aside id="sidebar">
        <h2 style="position: absolute; visibility: hidden;">Sidebar</h2>
        <details class="sidebar-filter" open>
          <summary>Category</summary>
          <ul>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Denim</a></li>
            <li><a href="#">Hoodies & Sweatshirts</a></li>
            <li><a href="#">Jackets & Coats</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Polos</a></li>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Shorts</a></li>
            <li><a href="#">Sweaters & Knits</a></li>
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Tanks</a></li>
          </ul>
        </details>
        <details class="sidebar-filter">
          <summary>BRAND</summary>
          <ul>
          </ul>
        </details>
        <details class="sidebar-filter">
          <summary>dESIGNER</summary>
          <ul>
          </ul>
        </details>
      </aside>

      <section id="catalog">
        <h2 style="position: absolute; visibility: hidden;">Catalog</h2>
        <div class="filter-block">
          <div class="filter">
            <h3>Trending now</h3>
            <ul>
              <li><a href="#">Bohemian</a></li>
              <li><a href="#">Floral</a></li>
              <li><a href="#">Lace</a></li>
              <li><a href="#">Floral</a></li>
              <li><a href="#">Lace</a></li>
              <li><a href="#">Bohemian</a></li>
            </ul>
          </div>
          <div class="filter">
            <h3>Size</h3>
            <ul>
              <li><label><input type="checkbox" name="XXS" value="XXS"> XXS</label></li>
              <li><label><input type="checkbox" name="XS" value="XS"> XS</label></li>
              <li><label><input type="checkbox" name="S" value="S"> S</label></li>
              <li><label><input type="checkbox" name="M" value="M"> M</label></li>
              <li><label><input type="checkbox" name="L" value="L"> L</label></li>
              <li><label><input type="checkbox" name="XL" value="XL"> XL</label></li>
              <li><label><input type="checkbox" name="XXL" value="XXL"> XXL</label></li>
            </ul>
          </div>
          <div class="filter">
            <h3>pRICE</h3>
            <div class="range-filter">
              <div class="range-controls">
                <div class="scale">
                  <div class="bar"></div>
                </div>
                <div class="toggle toggle-min" tabindex="0"></div>
                <div class="toggle toggle-max" tabindex="0"></div>
              </div>
              <div class="range-prices">
                <span>$52</span>
                <span>$400</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sort-block">
          <label><span>Sort By</span><select name="sort" id="sort">
            <option value="Name">Name</option>
          </select></label>
          <label><span>Show</span><select name="show" id="show">
            <option value="09">09</option>
          </select></label>
        </div>

        <catalog-list/>

        <div class="catalog-pagination">
          <ol>
            <li><a href="#" class="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">20</a></li>
          </ol>
          <button class="view-all">View All</button>
        </div>
      </section>
    </div>

    <section id="catalog-feature-box">
      <h2 style="position: absolute; visibility: hidden;">Feature</h2>
      <figure>
        <img src="@/assets/images/icon-delivery.png" alt="icon-delivery">
        <figcaption>
          <h3>Free Delivery</h3>
          <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure>
        <img src="@/assets/images/icon-sale.png" alt="icon-sale">
        <figcaption>
          <h3>Sales & discounts</h3>
          <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure>
        <img src="@/assets/images/icon-quantity.png" alt="icon-quantity">
        <figcaption>
          <h3>Quality assurance</h3>
          <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
    </section>

    <feedback/>
  </main>
</template>

<script>
import BreadCrumb from '@/blocks/BreadCrumb.vue';
import CatalogList from '@/blocks/CatalogList.vue';
import Feedback from '@/blocks/Feedback.vue';

export default {
  name: 'Catalog',
  components: {
    CatalogList,
    BreadCrumb,
    Feedback,
  },
};
</script>
