const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Todo1", completed: false },
        { id: 2, text: "Todo2", completed: false },
        { id: 3, text: "Todo3", completed: false },
        { id: 4, text: "Todo4", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: Date.now,
        text: event.target.value,
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
