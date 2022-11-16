const app = Vue.createApp({
  data() {
    return {
      title: "Hi",
      description: "selam",
      content: "Lorem ipsum dolor sit amet...",
      url: "https://www.google.com",

      context: {
        title: "ahmetloca",
        url: "https://www.ahmetloca.com",
        target: "_blank",
      },
    };
  },
  methods: {
    changeTitle(title) {
      // bu vue instance'indaki title'la erismek için "this" kullanacagım.
      this.title = title;
    },
  },
}).mount("#app");

/*
Vue2 version

new Vue({
    data:{ 
    }
})

html tarafina template diyecegiz.

String Interpolution : 
Sizin vue.js içerisinde tanımladıgınız bir key'i, bir property'i html tarafında kullanmanızı saglıyor.
String interpolution, text content'inin oldugu yerlerde calisir.

vue.js'den template kontrol etmek için kullanacagımız birinci yol string inturpolution

*/
