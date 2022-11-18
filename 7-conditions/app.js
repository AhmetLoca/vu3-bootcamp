const app = Vue.createApp({
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  computed: {
    counterBoxClass() {
      return {
        "bg-success": this.counter > 0,
        "bg-danger": this.counter < 0,
        "bg-primary": this.counter == 0,
      };
    },
  },
});

app.mount("#app");
