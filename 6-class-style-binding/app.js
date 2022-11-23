const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
    };
  },
  methods: {
    addBorder() {
      this.showBorder = !this.showBorder;
    },
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder };
    },
  },
});

app.mount("#app");
