import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      name: "Ahmet",
      lname: "Loca",
      age: 25,
    },
    theme: "dark",
    fullName: "Defne Kaygusuz",
    permissions: [1, 2, 3, 4, 5, 6],
    userList: ["Ahmet", "Gökhan", "İlker", "Ramazan", "Defne"],
  },
});

export default store;
