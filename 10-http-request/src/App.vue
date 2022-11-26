<template>
  <div class="container">
    <h3>Alisveris Sepeti</h3>
    <hr />
    <div class="my-2"></div>
    <div>
      <input
        type="text"
        placeholder="What will you buy?"
        @keydown.enter="onSave"
      />
    </div>
    <ul v-if="itemList.length > 0">
      <li v-for="item in itemList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Delete</button>
      </li>
    </ul>
    <div v-else class="bg-blue text-white">Herhangi bir ürün yoktur.</div>
    <small
      class="mt-2 text-blue d-flex justify-content-end align-items-center text-right"
      >{{ itemCount }} adet alinacak ürün vardir..</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((response) => {
      console.log("response :>>", response);
      this.itemList = response.data || [];
      console.log("itemList", this.itemList);
    });
  },

  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        create_at: Date.now(),
        completed: false,
      };
      axios.post("http://localhost:3000/items", saveObject).then((response) => {
        this.itemList.push(response.data);
        e.target.value = "";
        e.target.focus();
      });
   },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id} `)
        .then((deleteResponse) => {
          console.log(deleteResponse);
          this.itemList = this.itemList.filter((i) => i.id !== item.id);
        });
    },
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    },
  },
};
</script>

<style></style>
