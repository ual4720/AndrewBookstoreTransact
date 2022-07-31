<template>
  <main id="main" class="clearfix">
    <div class="page-space">&nbsp;</div>
    <section class="content_container">
      <section class="categoryView" v-if="!cart.empty">
        <form @submit.prevent="submitOrder">
          <div class="input-container">
            <!-- NAME FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label for="name">Name</label>
                <input
                  type="text"
                  size="22"
                  id="name"
                  name="name"
                  v-model.lazy="$v.name.$model"
                />
              </div>
              <template v-if="$v.name.$error">
                <span class="error" v-if="!$v.name.required"
                  >Name is required</span
                >
                <span class="error" v-else-if="!$v.name.minLength">
                  Name must have at least
                  {{ $v.name.$params.minLength.min }} letters.
                </span>
                <span class="error" v-else-if="!$v.name.maxLength">
                  Name can have at most
                  {{ $v.name.$params.maxLength.max }} letters.
                </span>
                <span class="error" v-else>
                  An unexpected error occurred.
                </span>
              </template>
            </div>
            <!-- NAME FORM FIELD END -->

            <!-- ADDRESS FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label for="address">Address</label>
                <input
                  type="text"
                  size="22"
                  id="address"
                  name="address"
                  v-model.lazy="$v.address.$model"
                />
              </div>
              <template v-if="$v.address.$error">
                <span class="error" v-if="!$v.address.required"
                  >Address is required</span
                >
                <span class="error" v-else-if="!$v.address.minLength">
                  Address must have at least
                  {{ $v.address.$params.minLength.min }} letters.
                </span>
                <span class="error" v-else-if="!$v.address.maxLength">
                  Address can have at most
                  {{ $v.address.$params.maxLength.max }} letters.
                </span>
                <span class="error" v-else>
                  An unexpected error occurred.
                </span>
              </template>
            </div>
            <!-- ADDRESS FORM FIELD END -->

            <!-- PHONE FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label for="phone">Phone</label>
                <input
                  class="textField"
                  type="text"
                  size="22"
                  id="phone"
                  name="phone"
                  v-model.lazy="$v.phone.$model"
                />
              </div>
              <template v-if="$v.phone.$error">
                <span class="error" v-if="!$v.phone.required"
                  >Phone is required</span
                >
                <span class="error" v-else-if="!$v.phone.phone">
                  Must be a valid phone number.
                </span>
                <span class="error" v-else>
                  An unexpected error occurred.
                </span>
              </template>
            </div>
            <!-- PHONE FORM FIELD END -->

            <!-- EMAIL FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label for="email">Email</label>
                <input
                  type="text"
                  size="22"
                  id="email"
                  name="email"
                  v-model.lazy="$v.email.$model"
                />
              </div>
              <template v-if="$v.email.$error">
                <span class="error" v-if="!$v.email.required"
                  >Email is required</span
                >
                <span class="error" v-else-if="!$v.email.email">
                  Must be a valid email address.
                </span>
                <span class="error" v-else>
                  An unexpected error occurred.
                </span>
              </template>
            </div>
            <!-- EMAIL FORM FIELD END -->

            <!-- CCNUMBER FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label for="ccNumber">Credit card</label>
                <input
                  type="text"
                  size="22"
                  id="ccNumber"
                  name="ccNumber"
                  v-model.lazy="$v.ccNumber.$model"
                />
              </div>
              <template v-if="$v.ccNumber.$error">
                <span class="error" v-if="!$v.ccNumber.required"
                  >Credit Card is required</span
                >
                <span class="error" v-else-if="!$v.ccNumber.creditCard">
                  Must be a valid Credit Card.
                </span>
                <span class="error" v-else>
                  An unexpected error occurred.
                </span>
              </template>
            </div>
            <!-- CCNUMBER FORM FIELD END -->

            <!-- EXPDATE FORM FIELD BEGIN -->
            <div class="input-line">
              <div>
                <label>Exp Date</label>
                <select v-model="ccExpiryMonth">
                  <option
                    v-for="(month, index) in months"
                    :key="index"
                    :value="index + 1"
                  >
                    {{ month }} ({{ index + 1 }})
                  </option>
                </select>
                <select>
                  <option v-for="index in 15" :key="index">
                    {{ yearFrom(index - 1) }}
                  </option>
                </select>
              </div>
            </div>
            <!-- EXPDATE FORM FIELD END -->
          </div>
          <!-- input-container END -->

          <div class="detail-container">
            <div class="line-detail">
              <div>
                <label>Subtotal:</label>
                <span>{{
                  this.$store.state.cart.subtotal | asDollarsAndCents
                }}</span>
              </div>
            </div>
            <div class="line-detail">
              <div>
                <label>Surcharge:</label>
                <span>{{
                  this.$store.state.cart.surcharge | asDollarsAndCents
                }}</span>
              </div>
            </div>
            <div class="line-detail">
              <div>
                <label>Total:</label
                ><span
                  >{{ this.$store.state.cart.total | asDollarsAndCents }}
                </span>
              </div>
            </div>
            <div>
              <input
                class="button button-cta"
                style="width: fit-content; text-align: center"
                type="submit"
                name="submit"
                :disabled="checkoutStatus === 'PENDING'"
                value="Complete Purchase"
              />
            </div>
            <div v-show="checkoutStatus !== ''" class="checkoutStatusBox">
              <div v-if="checkoutStatus === 'ERROR'">
                <span style="color: red; font-style: italic"
                  >Error: Please fix the problems and try again.</span
                >
              </div>

              <div v-else-if="checkoutStatus === 'PENDING'">Processing...</div>

              <div v-else-if="checkoutStatus === 'OK'">Order placed...</div>

              <div v-else>
                <!-- "checkoutStatus == 'SERVER_ERROR'" -->
                <span style="color: red; font-style: italic"
                  >An unexpected error occurred, please try again.
                </span>
              </div>
            </div>
          </div>
          <!-- detail-container END -->
        </form>
        <div
          v-if="false"
          style="
            border: 1px solid black;
            padding: 1em;
            margin-left: 1em;
            text-align: left;
          "
        >
          <tree-view
            :data="$v"
            :options="{ rootObjectKey: '$v', maxDepth: 1 }"
          ></tree-view>
        </div>
      </section>
      <section class="content_container" v-else>
        <h1 style="text-align: center">There is nothing in your cart.</h1>
        <h4 style="text-align: center">
          Please add something to your cart to checkout.
        </h4>
        <div style="width: 100%; text-align: center">
          <router-link
            :to="/category/ + this.$store.state.selectedCategoryName"
            class="button button-secondary"
            style="font-size: large"
            >Continue Shopping</router-link
          >
        </div>
        <div class="page-space">&nbsp;</div>
      </section>
    </section>
    <div class="page-space">&nbsp;</div>
  </main>
</template>
<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import isCreditCard from "validator/lib/isCreditCard";
import isMobilePhone from "validator/lib/isMobilePhone";

const phone = (value) => isMobilePhone(value, "en-US");
const creditCard = (value) => isCreditCard(value);

export default {
  name: "CheckoutView",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      ccNumber: "",
      ccExpiryMonth: new Date().getMonth() + 1,
      ccExpiryYear: new Date().getFullYear(),
      checkoutStatus: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45),
    },
    address: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45),
    },
    phone: {
      required,
      phone,
    },
    email: {
      required,
      email,
    },
    ccNumber: {
      required,
      creditCard,
    },
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
  },

  methods: {
    submitOrder() {
      console.log("Submit order");
      this.$v.$touch(); // Ensures validators always run
      if (this.$v.$invalid) {
        this.checkoutStatus = "ERROR";
      } else {
        this.checkoutStatus = "PENDING";
        setTimeout(() => {
          this.$store
            .dispatch("placeOrder", {
              name: this.name,
              address: this.address,
              phone: this.phone,
              email: this.email,
              ccNumber: this.ccNumber,
              ccExpiryMonth: this.ccExpiryMonth,
              ccExpiryYear: this.ccExpiryYear,
            })
            .then(() => {
              this.checkoutStatus = "OK";
              this.$router.push({ name: "confirmation" });
            })
            .catch((reason) => {
              this.checkoutStatus = "SERVER_ERROR";
              console.log("Error placing order", reason);
            });
        }, 1000);
      }
    },

    /* NOTE: For example yearFrom(0) == 2019 */
    yearFrom(index) {
      return new Date().getFullYear() + index;
    },
  },
};
</script>
<style scoped>
.categoryView {
  display: flex;
  margin: 1em;
  justify-content: center;
  flex-direction: row;
}

form {
  display: flex;
  flex-direction: row;
}

.input-line > div {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5em;
}

.input-line > div > label {
  font-weight: bold;
  padding-top: 0.3em;
}

.input-line > div > input,
.input-line > div > select {
  margin-left: 0.5em;
}

.input-line > div > input,
.input-line > div > select {
  height: 25px;
  border: 1px solid var(--BorderShade);
}

.input-line > div > input:focus,
.input-line > div > select:focus {
  height: 25px;
  border: 1px solid var(--Grey);
}

.input-line > .error {
  color: red;
  float: right;
  padding-bottom: 1em;
  margin-top: -6px;
  font-size: smaller;
  font-style: italic;
}

.checkoutStatusBox {
  margin: 1em;
  padding: 1em;
  text-align: center;
}

.input-container,
.detail-container {
  margin: 1em;
}

.input-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.detail-container {
  display: flex;
  flex-direction: column;
  width: 15em;
}

.detail-container > div {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
}

.line-detail > div {
  margin-bottom: 0.5em;
}

.line-detail > div > label {
  font-weight: bold;
}

.line-detail > div > span {
  margin-left: 0.5em;
}

.button-cta {
  font-size: small;
}

.button-cta:hover {
  color: #000;
}
</style>
