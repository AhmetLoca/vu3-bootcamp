const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  /* methods gibi baska bir arkadas. */
  computed: {
    /* Bir fonksiyon gibi calisan degiskenlerdir.
        computed degerini okuyabiliriz. Şu anki bilgimize göre set edemeyiz.
        reactive olarak değişken gibi davranan methods gibi tanımlanan yapılardır.

        Bir degisken gibi davranır. Ve geriye bir deger return etmesi gerekiyor.
    */
    getCounterResult() {
      console.log("counter1 calisti");
      return this.counter > 5 ? "Counter 5'ten büyük" : "Counter 5'ten küçük";
    },
    getCounter2Result() {
      console.log("counter2 calisti");
      return this.counter2 > 5 ? "Counter 5'ten büyük" : "Counter 5'ten küçük";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
    counter2(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
}).mount("#app");
// id'si app olan template'ti kontrol et.
