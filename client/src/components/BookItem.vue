<template>
  <div class="category-item-book">
    <div class="category-image">
      <div v-if="book.isPublic" class="button read-item">
        <router-link to="#"
          ><font-awesome-icon icon="fa-solid fa-book-open"
        /></router-link>
      </div>
      <router-link to="#"
        ><img :src="getBookImagePath()" :alt="book.title"
      /></router-link>
    </div>
    <div class="category-info">
      <span class="category-info-line" style="font-style: italic"
        ><router-link to="#">{{ book.title }}</router-link></span
      >
      <span class="category-info-line">by {{ book.author }}</span>
      <button
        ref="addToCart"
        @click="addToCart(book)"
        :class="{ 'apply-shake': shake }"
        class="button button-tertiary"
        style="width: fit-content; font-weight: bold"
      >
        Add to Cart | {{ book.price | asDollarsAndCents }}
        <font-awesome-icon icon="fa-solid fa-cart-plus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-item",
  data() {
    return {
      shake: false,
    };
  },
  mounted() {
    this.$refs.addToCart.addEventListener("animationend", () => {
      this.shake = false;
    });
  },
  methods: {
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
      this.shakeAnimation();
    },
    shakeAnimation() {
      this.shake = true;
    },
    formatBookPath(bookId) {
      let val = "/book/" + bookId.toString();
      return val.toLowerCase();
    },
    formatReadPath(bookId) {
      let val = "/book/" + bookId.toString() + "/read";
      return val.toLowerCase();
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
  },
};
</script>

<style scoped>
.category-image img {
  width: 100px;
  height: 145px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
