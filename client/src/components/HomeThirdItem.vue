<template>
  <div class="page-third">
    <div class="page-card page-container">
      <div class="front-page-image-container">
        <router-link :to="href"
          ><img :src="image" :alt="imageAlt"
        /></router-link>
      </div>
      <div class="front-page-third-text">
        <router-link :to="href" :class="{ 'button button-cta': isCta }">{{
          text
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-third-item",
  props: {
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    isCta: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.page-third .page-card {
  padding-left: 0;
  padding-right: 0;
}

.front-page-image-container {
  padding: 0;
  margin: 0;
}

.front-page-image-container img {
  width: 100%;
}

.front-page-third-text {
  text-align: center;
  font-size: larger;
  padding: 15px;
}

.button-cta {
  color: #fff !important;
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.button-cta:hover {
  color: #000 !important;
  text-decoration: none !important;
}

.front-page-third-text a {
  text-decoration: none;
  color: black;
}

.front-page-third-text a:hover {
  text-decoration: underline;
  color: var(--Grey);
}

.front-page-third-text .button-cta a:hover {
  text-decoration: none !important;
  color: #000 !important;
}
</style>
