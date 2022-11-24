const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "List1", completed: false },
        { id: 2, text: "List2", completed: false },
        { id: 3, text: "List3", completed: false },
        { id: 4, text: "List4", completed: false },
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
