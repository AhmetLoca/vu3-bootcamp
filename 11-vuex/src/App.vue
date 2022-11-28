<template>
  <p>
    {{ $store.state.person }}
    {{ $store.state.permissions }}
    {{ $store.state.theme }}
    {{ $store.state.userList }}
  <!-- <ul>
    <li v-for="permission in $store.state.permissions" :key="permission">
      {{ permission }}
    </li>
  </ul> -->

  <ul>
    <li v-for="(item,index) in woodItems" :key="index">
      {{ item.title }}
    </li>
  </ul>

  <button @click="updateName">Ekle</button>
</p>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "App",
  created() {
    console.log(this.$store.state.user);
    //console.log(this.$store.state.itemList.filter(i=> i.type === "mobilya"));
    console.log(this.$store.getters.woodItems)
    console.log(this.$store.getters.activeUser)

  },
  methods:{
  updateName(){
    //this.$store.state.itemList.push({ id: 6, title:"Raf", type:"mobilya"})
    const userData ={id:Date.now(),title:"Raf",type:"mobilya"}
    this.$store.dispatch("newItemActions",userData)
    }
  },
  computed: mapGetters(["woodItems"])
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
