const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      bgColor: "",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBG };
    },
  },
});

app.mount("#app");
