<template>
  <!-- 
        todoList'in neye ihtiyacı var? deleteItem fonksiyonuna ihtiyacı var.
        Ve todoList'e ihtiyacı var.
    !-->
  <TodoList
    @delete2-todo-item="$emit('delete-todo-item', $event)"
    :todoList="todoList"
  />
  <ResultBar :itemCount="provideData.todoList.length" />
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import ResultBar from "@/components/ResultBar.vue";
export default {
  inject: ["provideData"],
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoList,
    ResultBar,
  },
};
</script>

<style></style>
