const app = Vue.createApp({
  data() {
    return {
      todoText: null,
      todoList: [],
      text: null,
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
    },
  },
}).mount("#app");

/*
statelerimiz:
      todoText: null,
      todoList: [],


functionlarimiz:

    addTodo() {
      this.todoList.push(this.todoText);
    },

*/
