const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "New list item", completed: false },
        { id: 2, text: "New list item (Hover)", completed: false },
        { id: 3, text: "New list item (Done)", completed: false },
      ],
      inputText: "",
    };
  },
  methods: {
    addTodo(todo) {
      this.todoList.push({
        id: Date.now(),
        text: this.inputText,
        completed: false,
      });
      this.inputText = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((i) => i.id !== todoItem.id);
    },
    removeAll() {
      this.todoList.map((todo) => {
        todo.completed = true;
      });
      return todo;
    },
  },
  computed: {
    complutedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
  },
});
app.mount("#app");
