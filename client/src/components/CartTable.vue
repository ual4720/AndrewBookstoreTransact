<template>
  <div class="page-container">
    <div v-if="this.$store.state.cart.empty" class="empty-cart">
      <h1>
        Your cart is empty.<br /><br />
        <router-link
          :to="/category/ + $store.state.selectedCategoryName"
          class="button button-secondary"
          style="font-size: large"
          >Continue Shopping</router-link
        >
      </h1>
    </div>
    <div v-else class="grid-container">
      <div class="grid-item grid-header">
        <p>&nbsp;</p>
        <h1>
          You have
          {{ this.$store.state.cart.numberOfItems }} book{{
            this.$store.state.cart.numberOfItems > 1 ? "s" : ""
          }}
          ready to be checked out.
        </h1>
      </div>
      <div
        v-for="item in this.$store.state.cart.items"
        v-bind:key="item.book.bookId"
        class="grid-item grid-repeating-item"
      >
        <cart-item :book="item.book" :quantity="item.quantity"></cart-item>
      </div>
      <div class="grid-item grid-subtotal">
        Subtotal: {{ this.$store.state.cart.subtotal | asDollarsAndCents }}
        &nbsp;&nbsp;
        <button @click="emptyCart()" class="button button-tertiary">
          Clear Cart
        </button>
      </div>
      <div class="grid-item grid-clear-cart">
        <router-link
          :to="/category/ + $store.state.selectedCategoryName"
          class="button button-secondary"
          style="font-size: large"
          >Continue Shopping</router-link
        >
      </div>
      <div class="grid-item">&nbsp;</div>
      <div class="grid-item grid-checkout">
        <router-link :to="'/checkout'" class="button button-cta"
          >Checkout</router-link
        >
      </div>
    </div>
  </div>
  <!-- <div class="page-container">
    <div class="page-twothird">
      <h1>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Cart -
        <router-link
          :to="/category/ + $store.state.selectedCategoryName"
          class="button button-secondary"
          >Continue Shopping</router-link
        >
      </h1>
      <div class="cart-details">&nbsp;</div>
    </div>
    <div class="page-third">
      <div class="summary">
        <h1>
          Summary -
          <button @click="emptyCart()" class="button button-tertiary">
            Clear Cart
          </button>
        </h1>
        <div class="summary-details">
          <div class="summary-line">
            <div class="title">Subtotal</div>
            <div class="value">
              ${{ $store.state.cart.subtotal.toFixed(2) }}
            </div>
          </div>
          <div class="summary-line">
            <div class="title">Shipping</div>
            <div class="value">$0.00</div>
          </div>
          <div class="summary-line">
            <div class="title">Tax</div>
            <div class="value">$0.00</div>
          </div>
          <hr style="width: 100%" />
          <div class="summary-line">
            <div class="title">Total</div>
            <div class="value">$0.00</div>
          </div>
          <hr style="width: 100%" />
          <div class="summary-line checkout">
            <router-link :to="'/checkout'" class="button button-cta"
              >Checkout</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
</template>
<script>
import CartItem from "@/components/CartItem";

export default {
  name: "cart-table",
  components: { CartItem },
  data: function () {
    return {
      cartMessage: "",
    };
  },
  methods: {
    emptyCart() {
      this.$store.dispatch("emptyCart");
    },
  },
};
</script>
<style>
.empty-cart {
  width: 100%;
}
.grid-container {
  display: grid;
  justify-content: space-evenly;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.grid-item {
}

.grid-header {
  grid-column: 1 / 4;
  text-align: center;
}

.grid-repeating-item {
  grid-column: 1 / 4;
  border-bottom: 1px solid black;
}

.grid-subtotal {
  grid-column: 1 / 4;
  text-align: right;
  padding-top: 30px;
  padding-right: 60px;
}

.grid-clear-cart {
  text-align: left;
  padding-left: 60px;
}

.grid-clear-cart .button-tertiary {
  font-size: large;
  padding: 10px;
}
.grid-checkout {
  text-align: right;
  padding-right: 60px;
}

.grid-checkout .button-cta {
  font-size: x-large;
  padding: 10px;
}

.grid-checkout .button-cta:hover {
  color: black;
}

.summary {
  border: 1px solid var(--BorderShade);
  padding-left: 20px;
  padding-right: 20px;
}

.summary-line {
  display: flex;
  padding: 5px 5px;
  width: 100%;
}

.summary-line .title {
  width: fit-content;
  font-weight: bold;
}
.summary-line .value {
  width: 100%;
  text-align: right;
  padding-right: 20px;
}
.checkout a {
  margin: 0 auto;
}
h1 {
  padding-left: 1.5em;
  text-align: center;
}
h1 a {
  font-weight: normal;
}
</style>
