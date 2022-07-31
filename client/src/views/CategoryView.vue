<template>
  <!-- #### main Code #### -->
  <main id="main" class="clearfix">
    <section class="content_container">
      <app-page-title :title="page.title" />
      <div class="page-quarter">
        <category-v-nav :categories="$store.state.categories"></category-v-nav>
      </div>
      <div class="page-threequarter">
        <div class="page-space">&nbsp;</div>
        <favorite-books
          v-if="$store.state.selectedCategoryName == ''"
          :books="$store.state.favoriteBooks"
        ></favorite-books>
        <category-books
          v-if="$store.state.selectedCategoryName != ''"
          :books="$store.state.selectedCategoryBooks"
        ></category-books>
      </div>
      <div class="page-space">&nbsp;</div>
    </section>
  </main>
  <!-- #### End main Code #### -->
</template>

<script>
// @ is an alias to /src
import AppPageTitle from "@/components/AppPageTitle";
import CategoryVNav from "@/components/CategoryVNav";
import "@/assets/css/page-category.css";
import FavoriteBooks from "@/components/FavoriteBooks";
import CategoryBooks from "@/components/CategoryBooks";

export default {
  name: "CategoryView",
  components: {
    AppPageTitle,
    CategoryVNav,
    FavoriteBooks,
    CategoryBooks,
  },
  data() {
    return {
      page: {
        title: "Browse Inventory",
      },
    };
  },
  created: function () {
    if (this.$route.params.name == null) {
      this.$route.params.name = "";
    }
    this.$store.dispatch("selectCategory", this.$route.params.name);

    if (this.$store.state.selectedCategoryName != "") {
      this.$store.dispatch(
        "fetchSelectedCategoryBooks",
        this.$store.state.selectedCategoryName
      );
    } else {
      this.$store.dispatch("fetchFavoriteBooks");
    }
  },
};
</script>

<style scoped>
.content_container {
  width: 100%;
}
</style>
