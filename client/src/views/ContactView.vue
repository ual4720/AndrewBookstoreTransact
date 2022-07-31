<template>
  <!-- #### main Code #### -->
  <main id="main" class="clearfix">
    <section class="content_container">
      <app-page-title :title="page.title" />
      <div class="page-space">&nbsp;</div>
    </section>
  </main>
  <!-- #### End main Code #### -->
</template>

<script>
// @ is an alias to /src
import AppPageTitle from "@/components/AppPageTitle";

export default {
  name: "ContactView",
  components: {
    AppPageTitle,
  },
  data() {
    return {
      page: {
        title: "Contact Us",
      },
    };
  },
};
</script>

<style scoped>
.content_container {
  width: 100%;
}
</style>
