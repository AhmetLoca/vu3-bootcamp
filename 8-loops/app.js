const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue1", completed: false },
        { id: 2, text: "Vue2", completed: false },
        { id: 3, text: "Vue3", completed: false },
        { id: 4, text: "Vue4", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: Date.now(),
        text: event.target.value,
        completed: false,
      });
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((i) => i.id !== todoItem.id);
    },
  },
  computed: {},
});
app.mount("#app");
