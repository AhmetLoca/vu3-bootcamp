<template>
  <div class="container">
    <!-- bana UserSection içerisinden gelen bilgiyi push'la. !-->
    <UserSection />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Tayfun", "Ahmet", "Gökhan", "Defne"],
      },
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
};
</script>

<style></style>
