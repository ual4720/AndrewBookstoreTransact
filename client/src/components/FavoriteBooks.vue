<template>
  <div class="category-line clearfix">
    <div class="category-title">
      <table class="category-table">
        <tr>
          <td class="col-color">&nbsp;</td>
          <td class="col-text">Favorite Books</td>
        </tr>
      </table>
    </div>
    <div class="category-content">
      <book-item
        v-for="book in books"
        v-bind:key="book.bookId"
        :book="book"
      ></book-item>
    </div>
    <!-- <div class="category-more">
      <router-link class="button button-tertiary" to="/book"
        >More ...</router-link
      >
    </div> -->
  </div>
</template>

<script>
import BookItem from "@/components/BookItem";

export default {
  name: "favorite-books",
  components: {
    BookItem,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
