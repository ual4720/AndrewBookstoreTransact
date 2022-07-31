<template>
  <div class="page-title">{{ title }}</div>
</template>

<script>
export default {
  name: "app-page-title",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page-title {
  padding: 15px;
  width: 100%;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
}
</style>
