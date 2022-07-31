<template>
  <div class="grid-container-book">
    <div class="grid-item-books grid-image">
      <img :src="getBookImagePath()" :alt="book.title" />
    </div>
    <div class="grid-item-books grid-title">{{ book.title }}</div>
    <div class="grid-item-books grid-quantity">
      <button
        class="button button-tertiary"
        @click="updateCartQuantity(book, quantity - 1)"
      >
        &nbsp;-&nbsp;</button
      >&nbsp;&nbsp; {{ quantity }}&nbsp;&nbsp;

      <button class="button button-tertiary" @click="addToCart(book)">
        &nbsp;+&nbsp;
      </button>
    </div>
    <div class="grid-item-books grid-price">
      {{ book.price | asDollarsAndCents }}
    </div>
  </div>
</template>
<script>
export default {
  name: "cart-item",
  methods: {
    updateCartQuantity(book, quantity) {
      this.$store.dispatch("updateCartQuantity", {
        book: book,
        quantity: quantity,
      });
    },
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
    },
    formatBookImageFilename() {
      return this.book.bookId + ".png";
    },
    getBookImagePath() {
      let images = require.context("../assets/images/books/", false, /\.png$/);

      let image = images("./no-book-picture.png");

      try {
        image = images("./" + this.formatBookImageFilename());
      } catch (e) {
        console.log(
          this.formatBookImageFilename() + " doesn't exist. Using default."
        );
      }

      console.log(image);

      return image;
    },
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style>
.grid-container-book {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  text-align: center;
}

.grid-item-books {
  padding: 10px;
}

.grid-image {
}

.grid-image img {
  width: 75px;
  height: 115px;
}

.grid-title {
  padding-top: 50px;
  text-align: left;
}

.grid-quantity {
  padding-top: 45px;
}

.grid-price {
  padding-top: 50px;
}
</style>
