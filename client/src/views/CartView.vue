<template>
  <main id="main" class="clearfix">
    <section class="content_container">
      <app-page-title :title="page.title" />
      <div class="page-space">&nbsp;</div>
      <cart-table></cart-table>
      <div class="page-space">&nbsp;</div>
    </section>
  </main>
</template>
<script>
import AppPageTitle from "@/components/AppPageTitle";
import CartTable from "@/components/CartTable";

export default {
  name: "CartView",
  components: { CartTable, AppPageTitle },
  data() {
    return {
      page: {
        title: "Your Cart",
      },
    };
  },
};
</script>
<style>
.content_container {
  width: 100%;
}
</style>
