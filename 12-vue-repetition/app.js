const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue1", completed: false },
        { id: 2, text: "Vue2", completed: false },
        { id: 3, text: "Vue3", completed: false },
        { id: 4, text: "Vue4", completed: false },
      ],
      inputText: "",
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        id: Date.now(),
        text: this.inputText,
        completed: false,
      });
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((i) => i.id !== todoItem.id);
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
}).mount("#app");
