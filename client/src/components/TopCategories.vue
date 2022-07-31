<template>
  <div class="category-line clearfix">
    <div class="category-title">
      <table class="category-table">
        <tr>
          <td class="col-color">&nbsp;</td>
          <td class="col-text">Top Categories</td>
        </tr>
      </table>
    </div>
    <div class="category-content">
      <category-item
        v-for="category in categories"
        :key="category.categoryId"
        :category="category"
      ></category-item>
    </div>
    <!--<div class="category-more">
      <router-link class="button button-tertiary" to="/category"
        >More ...</router-link
      >
    </div> -->
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem";
export default {
  name: "top-categories",
  components: {
    CategoryItem,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
