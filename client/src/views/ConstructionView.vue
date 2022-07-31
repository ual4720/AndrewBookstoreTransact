<template>
  <div class="under-construction">
    <router-link to="/"
      ><span class="icon"
        ><font-awesome-icon icon="fa-solid fa-person-digging" />{{ seg1 }} Under
        Construction <font-awesome-icon icon="fa-solid fa-person-digging"
      /></span>
      <br /><br />
      Click Here to Go Home</router-link
    >
  </div>
</template>
<script>
export default {
  name: "category-item",
  props: {
    seg1: {
      type: String,
    },
  },
};
</script>
<style scoped>
.under-construction {
  width: 100%;
  text-align: center;
  font-size: x-large;
  padding-top: 20px;
  padding-bottom: 20px;
}

.under-construction a {
  color: black;
  text-decoration: none;
}

.under-construction .icon {
  font-size: xxx-large;
}
</style>
