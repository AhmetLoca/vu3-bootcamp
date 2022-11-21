const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue bootcamp hafta 1", completed: false },
        { id: 2, text: "Vue bootcamp hafta 2", completed: false },
        { id: 3, text: "Vue bootcamp hafta 3", completed: false },
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
      event.target.value = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoItem.id);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
});
app.mount("#app");
