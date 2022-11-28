import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Ahmet",
      lname: "Loca",
      age: 25,
      /*
      boyle bilgilerin front-end tarafında gezmesini istemiyorsunuzdur.
      
      Bunu form içerisinde, ya da yazılımcıların aksiyon anında bu data'yı alıp tekrardan 
      backend'e göndermemesini istiyorsunuzdur. 
      
      Ama size bu bilgi boyle geliyordur.
      Login oldugu an da bu kullanıcı geliyordur. Ya da password'unu silmek istiyorsunuzdur.
      Ama state'ti silmek istemiyorsunuz.
      Bunu nasıl yapacaksınız?
      */
      address: {},
      password: {},
      tc: 1231231232,
    },
    theme: "dark",
    fullName: "Defne Kaygusuz",
    permissions: [1, 2, 3, 4, 5, 6],
    userList: ["Ahmet", "Gökhan", "İlker", "Ramazan", "Defne"],
    itemList: [
      /* 
      mobilya kategorisine ait olanlari filtreleyip aksiyon aliyorsunuz.

      */
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Mouse", type: "elektronik" },
    ],
  },
  /* getter'in tek işi, state'teki bilgileri bize geri döndürmektir. */
  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),

    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItemActions({ commit }, item) {
      console.log("item:>>", item);
      setTimeout(() => {
        //context.commit("newItem", item);
        commit("newItem", item);
      }, 2000);
    },
  },
});

export default store;
