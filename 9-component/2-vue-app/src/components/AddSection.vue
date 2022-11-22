<template>
  <label for="todoText"></label>
  <input
    type="text"
    id="todoText"
    v-model="todoText"
    @keydown.enter="addNewTodo"
    placeholder="Write something in here"
  />
</template>

<script>
export default {
  methods: {
    data() {
      return {
        todoText: null,
      };
    },

    addNewTodo() {
      /* parent'a bir bilgi atiyorum. bunu $emit ile yapacagim. AddSection'in parenti App.vue */
      this.$emit("add-todo", this.todoText);
      this.todoText = null;
    },
  },
};
</script>

<style></style>
