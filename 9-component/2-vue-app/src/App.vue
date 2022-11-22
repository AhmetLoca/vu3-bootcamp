<template>
  <div class="container">
    <h3 class="text-center">Todo app</h3>
    <hr class="my-2" />
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import ListSection from "@/components/ListSection.vue";

export default {
  components: {
    AddSection,
    ListSection,
  },
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "dev.loca1" },
          { id: 2, text: "dev.loca2" },
          { id: 3, text: "dev.loca3" },
          { id: 4, text: "dev.loca4" },
          { id: 4, text: "dev.loca5" },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
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

      this.provideData.todoList = this.provideData.todoList.filter(
        (t) => t !== todo
      );

      /*   const matchedIndex = this.todoList.findIndex((i) => i === todo);
      if (matchedIndex > -1) {
        this.todoList.splice(this.todoList[matchedIndex], 1);
      }
      */
    },
    addNewTodo(todo) {
      console.log("event", todo);
      this.provideData.todoList.push({
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
