<template>
  <input type="text" v-model="search" />
  <button @click="searchList">Search</button>
  <pre>{{ itemList }}</pre>
  <pre>{{ filteredList }}</pre>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      itemList: ["apple", "cherry", "straberry"],
    };
  },
  //   methods: {
  //     searchList() {
  //       this.filteredList = this.itemList.filter((i) => i.includes(this.search));
  //     },
  //   },

  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
};
</script>

<style></style>
