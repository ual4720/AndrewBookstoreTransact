<template>
  <div class="h-nav-right">
    <router-link to="/account"
      >Account <font-awesome-icon icon="fa-solid fa-user"
    /></router-link>
    |
    <router-link to="/cart"
      >Cart
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      ({{ $store.state.cart.numberOfItems }})</router-link
    >
  </div>
</template>

<script>
export default {
  name: "app-h-nav-right",
};
</script>

<style scoped>
nav .h-nav-right {
  padding-top: 7px;
  padding-right: 18px;
  text-align: right;
  width: fit-content;
  float: right;
}

nav .h-nav-right a {
  color: black;
  text-decoration: none;
}

nav .h-nav-right a:hover {
  color: var(--Grey);
  text-decoration: underline;
}
</style>
