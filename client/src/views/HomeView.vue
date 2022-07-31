<template>
  <!-- #### main Code #### -->
  <main id="main" class="clearfix">
    <section class="content_container">
      <app-page-title :title="page.title" />
      <home-third-item
        v-for="(item, index) in items"
        v-bind:key="index"
        :image="item.image"
        :image-alt="item.image_alt"
        :href="item.href"
        :text="item.text"
        :isCta="item.cta"
      ></home-third-item>
      <div class="page-space">&nbsp;</div>
    </section>
  </main>
  <!-- #### End main Code #### -->
</template>

<script>
// @ is an alias to /src
import AppPageTitle from "@/components/AppPageTitle";
import HomeThirdItem from "@/components/HomeThirdItem";
import bookStack from "../assets/images/book_stack_rotated.jpg";
import bookShelf from "../assets/images/curved_bookshelves_resized.jpg";
import contactUs from "../assets/images/contact_resized.jpg";

export default {
  name: "HomeView",
  components: {
    HomeThirdItem,
    AppPageTitle,
  },
  data() {
    return {
      page: {
        title: "Welcome to The Steady Pen",
      },
      items: [
        {
          image: bookStack,
          image_alt: "floral book stack",
          text: "Exciting Releases",
          href: "/latest",
          cta: false,
        },
        {
          image: bookShelf,
          image_alt: "Curving Bookshelf of Books",
          text: "Shop Our Inventory",
          href: "/category",
          cta: true,
        },
        {
          image: contactUs,
          image_alt: "Contact Us Text in Typewriter",
          text: "Contact Us",
          href: "/contact",
          cta: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content_container {
  width: 100%;
}
</style>
