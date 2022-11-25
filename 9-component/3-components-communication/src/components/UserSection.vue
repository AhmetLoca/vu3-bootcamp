<template>
  <ListSection />
  <!-- child'tan parent'a bilgi göndermek için custom event kullanilir.!-->
  <AddSection />
</template>

<script>
import ListSection from "@/components/ListSection.vue";
import AddSection from "@/components/AddSection.vue";

export default {
  components: {
    ListSection,
    AddSection,
  },
  //props: ["userList"],
  //emits: ["new-item"],
  injects: ["userList"],
};
</script>

<style></style>
