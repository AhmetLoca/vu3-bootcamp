const app = Vue.createApp({
  data() {
    return {
      title: "test title",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate calisti..");
  },
  created() {
    console.log("created calisti..");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5];
    }, 1000);
  },
  beforeMount() {
    console.log("beforeMount calisti..");
  },
  mounted() {
    console.log("mounted calisti..");
  },
  /* bir bilgi degistigi an da beforeUpdate ve updated calisacak. */
  beforeUpdate() {
    console.log("beforeUpdate calisti..");
  },
  updated() {
    console.log("updated calisti..");
  },
  beforeUnmount() {
    console.log("beforeUnmount calisti..");
  },
});

app.mount("#app");
