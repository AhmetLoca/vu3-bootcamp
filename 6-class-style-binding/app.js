const app = Vue.createApp({
  data() {
    return {
      stateBorder: false,
      bgColor: null,
    };
  },
  methods: {
    onOffBorder() {
      this.stateBorder = !this.stateBorder;
    },
  },
  computed: {
    addBorder() {
      return { border: this.stateBorder };
    },
  },
});

app.mount("#app");
