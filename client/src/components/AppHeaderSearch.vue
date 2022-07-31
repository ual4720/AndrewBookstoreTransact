<template>
  <div class="search_container">
    <form name="search_site" action="#">
      <input
        type="text"
        class="input-search-field"
        name="search_value"
        value="Search Site ..."
      />
      <button
        type="submit"
        class="button-search-field"
        form="form-search-site"
        value="Submit"
      >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppHeaderSearch",
};
</script>

<style scoped>
.search_container {
  width: 290px;
  height: 35px;
  margin-top: 71px;
  margin-right: 30px;
  padding-top: 0;
  background-color: #fff;
  float: right;
  border: 2px var(--BorderShade) solid;
}

.input-search-field {
  border: 0; /*required to eliminate input spacing issue */
  width: 250px;
  height: 31px;
  margin: 0;
  background-color: #fff;
  font-size: 100%;
  color: var(--Grey);
  float: left;
}

.button-search-field {
  border: 1px var(--BorderShade) solid;
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: var(--PrimaryColor);
  float: left;
}

.button-search-field:hover {
  color: var(--Grey);
  cursor: pointer;
}
</style>
