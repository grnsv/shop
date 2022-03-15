<template>
  <main>
    <bread-crumb />

    <section id="checkout">
      <h2 style="position: absolute; visibility: hidden;">Checkout</h2>
      <ol>
        <li>
          <details open>
            <summary>01. Shipping Adress</summary>
            <table class="shipping">
              <tbody>
                <tr>
                  <td>
                    <h3>Check as a guest or register</h3>
                    <p>Register with us for future convenience</p>
                  </td>
                  <td>
                    <h3>Already registed?</h3>
                    <p>Please log in below</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" name="login" id="guest">
                    <label for="guest">checkout as guest</label>
                    <br>
                    <input type="radio" name="login" id="register">
                    <label for="register">register</label>
                    <h3>register and save time!</h3>
                    <p>Register with us for future convenience</p>
                    <ul>
                      <li>
                        <font-awesome-icon icon="angle-double-right" />
                        Fast and easy checkout
                      </li>
                      <li>
                        <font-awesome-icon icon="angle-double-right" />
                        Easy access to your order history and status
                      </li>
                    </ul>
                  </td>
                  <td>
                    <label for="email">EMAIL ADDRESS <em>*</em></label>
                    <br>
                    <input type="email" name="email" id="email" required>
                    <br>
                    <label for="password">PASSWORD <em>*</em></label>
                    <br>
                    <input type="password" name="password" id="password" required>
                    <p><em>* Required Fileds</em></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button">Continue</button>
                  </td>
                  <td>
                    <button type="submit">Log in</button>
                    <a href="#">Forgot Password ?</a>
                  </td>
                </tr>
              </tbody>
              </table>
          </details>
        </li>
        <li>
          <details>
            <summary>02. BILLING INFORMATION</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>03. SHIPPING INFORMATION</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>04. SHIPPING METHOD</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>05. PAYMENT METHOD</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>06. ORDER REVIEW</summary>
          </details>
        </li>
      </ol>
    </section>

    <feedback />
  </main>
</template>

<script>
import BreadCrumb from '@/blocks/BreadCrumb.vue';
import Feedback from '@/blocks/Feedback.vue';

export default {
  components: {
    BreadCrumb,
    Feedback,
  },
};
</script>
