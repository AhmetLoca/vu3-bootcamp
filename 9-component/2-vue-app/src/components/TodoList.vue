<template>
  <ul>
    <!-- <li
        v-for="todo in todoList"
        :key="todo.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ todo.text }}</span>
        <button class="sm red" @click="deleteItem(todo)">Sil</button>
      </li> -->

    <TodoListItem v-for="todo in todoList" :key="todo.id" :item="todo" />


  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";
export default {
  props: ["todoList"],
  components: {
    TodoListItem,
  },
};
</script>

<style></style>
