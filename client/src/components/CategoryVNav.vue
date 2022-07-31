<template>
  <!-- <div id="v-nav" class="clearfix">
    <div class="v-nav-content">
      <div class="menu-title">
        <span class="text">Favorites</span>
        <span class="chevron"
          ><font-awesome-icon icon="fa-solid fa-chevron-down"
        /></span>
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" />
        Best Sellers
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> New Releases
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> In Stock
      </div>

      <div class="menu-title">
        <span class="text">Condition</span>
        <span class="chevron"
          ><font-awesome-icon icon="fa-solid fa-chevron-down"
        /></span>
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> All
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> New
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> Used
      </div>

      <div class="menu-title">
        <span class="text">Format</span>
        <span class="chevron"
          ><font-awesome-icon icon="fa-solid fa-chevron-down"
        /></span>
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> All
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> Hardcover
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> Paperback
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> eBook
      </div>
      <div class="menu-item">
        <font-awesome-icon icon="fa-regular fa-square" /> Textbook
      </div>

      <div class="menu-title">
        <span class="text">More</span>
        <span class="chevron"
          ><font-awesome-icon icon="fa-solid fa-chevron-right"
        /></span>
      </div>
    </div>
  </div> -->
  <div id="v-nav" class="clearfix">
    <ul>
      <li
        class="button button-primary"
        :class="{ highlight: $store.state.selectedCategoryName == '' }"
      >
        <router-link :to="'../category'">Suggested</router-link>
      </li>
      <li
        class="button button-primary"
        v-for="category in categories"
        :class="{
          highlight: category.name == $store.state.selectedCategoryName,
        }"
        :key="category.categoryId"
      >
        <router-link :to="'../category/' + category.name">{{
          category.name.replace(":", ": ")
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "category-v-nav",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
#v-nav {
  padding-left: 15px;
  padding-bottom: 15px;
}

#v-nav ul {
  list-style-type: none;
}

#v-nav ul li {
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0;
  margin-bottom: 5px;
  width: 70%;
  min-width: 175px;
}

#v-nav ul li a {
  text-decoration: none;
  color: white;
  display: block;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
}

#v-nav ul li:hover a {
  color: var(--PrimaryColor);
}

.v-nav-content {
  max-width: 100%;
  min-width: 175px;
  border: 1px var(--BorderShade) solid;
}

#v-nav .menu-title {
  background-color: var(--PrimaryColor);
  padding: 10px;
  color: #fff;
}

#v-nav .menu-title .text {
}

#v-nav .menu-title .chevron {
  float: right;
}

#v-nav .menu-item {
  padding: 5px;
  padding-left: 15px;
}

.highlight {
  background: var(--LightShade);
}

.highlight a {
  color: var(--PrimaryColor) !important;
}
</style>
