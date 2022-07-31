<template>
  <div class="category-item-category">
    <div class="category-image">
      <router-link :to="'category/' + category.name"
        ><img :src="getCategoryImagePath()" :alt="formatCategoryName()"
      /></router-link>
    </div>
    <div class="category-info">
      <router-link :to="'category/' + category.name">{{
        formatCategoryName()
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-item",
  methods: {
    formatCategoryName() {
      let name = this.category.name.split(":");
      return name[0] + ": " + name[1];
    },
    formatCategoryImageFilename() {
      let name = this.category.name.split(":");
      return (
        name[0].replace(" ", "").toLowerCase() +
        "-" +
        name[1].replace(" ", "").toLowerCase() +
        ".png"
      );
    },
    getCategoryImagePath() {
      let images = require.context(
        "../assets/images/categories/",
        false,
        /\.png$/
      );

      let image = images("./no-category-picture.png");

      try {
        image = images("./" + this.formatCategoryImageFilename());
      } catch (e) {
        console.log(
          this.formatCategoryImageFilename() + " doesn't exist. Using default."
        );
      }

      console.log(image);

      return image;
    },
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.category-image img {
  width: 175px;
  height: 150px;
}
</style>
