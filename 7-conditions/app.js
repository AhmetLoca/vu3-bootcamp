const app = Vue.createApp({
  data() {
    return {
      // showContainer: false,
      counter: 0,
    };
  },
  methods: {
    //   onOffContainer() {
    //     this.showContainer = !this.showContainer;
    //   },
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },

  // buttonOpenClose() {
  //   return {
  //     "btn btn-sm btn-primary": !this.showContainer,
  //     "btn btn-sm btn-danger": this.showContainer,
  //   };
  // },
  computed: {
    colorCounter() {
      return {
        "bg-success": this.counter > 0,
        "bg-danger": this.counter < 0,
        "bg-primary": this.counter == 0,
      };
    },
  },
});

app.mount("#app");
