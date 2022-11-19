const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue bootcamp hafta 1", completed: false },
        { id: 2, text: "Vue bootcamp hafta 2", completed: false },
        { id: 3, text: "Vue bootcamp hafta 3", completed: false },
        { id: 4, text: "Vue bootcamp hafta 4", completed: false },
        { id: 5, text: "Vue bootcamp hafta 5", completed: false },
        { id: 6, text: "Vue bootcamp hafta 6", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      console.log(todoItem);
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

/*
 addTodo(event) {
      this.todoList.push(event.target.value);
    },
*/
