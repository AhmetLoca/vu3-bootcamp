<template>
  <div class="container">
    <h3 class="text-center">Todo app</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addNewTodo" />
    <TodoList :todoList="todoList" />
    <ResultBar :itemCount="todoList.length" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import TodoList from "@/components/TodoList.vue";
import ResultBar from "@/components/ResultBar.vue";

export default {
  components: {
    AddSection,
    TodoList,
    ResultBar,
  },
  data() {
    return {
      todoList: [
        { id: 1, text: "dev.loca1" },
        { id: 2, text: "dev.loca2" },
        { id: 3, text: "dev.loca3" },
        { id: 4, text: "dev.loca4" },
        { id: 4, text: "dev.loca5" },
      ],
    };
  },
  methods: {
    deleteItem(todo) {
      console.log(todo);
      /*
      todoList'imi filter'la.
      neye göre?
      todoList.filter içerisinde bana gelen arkadastan farklı olacak
      */

      this.todoList = this.todoList.filter((t) => t !== todo);

      /*   const matchedIndex = this.todoList.findIndex((i) => i === todo);
      if (matchedIndex > -1) {
        this.todoList.splice(this.todoList[matchedIndex], 1);
      }
      */
    },
    addNewTodo(todo) {
      console.log("event", todo);
      this.todoList.push({
        id: Date.now(),
        text: todo,
      });
    },
    /* siz yukarıda parantez yazmazsanız default olarak yukarıya event data'yi gönderir.*/
    testEvent(data) {
      alert(data);
    },
  },
};
</script>

<style></style>
