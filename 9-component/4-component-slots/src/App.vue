<template>
  <ModalItem>
    <template #title>
      <h3>slot ile gelen title bilgisi</h3>
    </template>

    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        beatae, deleniti expedita ex earum hic eaque facere labore atque optio
        sequi magni iusto nemo. Nostrum dolores maxime quos accusantium sit?
      </p>
    </template>
    <!-- default rezerv keyword.!-->
    <template #default> bu default olarak gösterilecek. </template>
  </ModalItem>
</template>

<script>
import ModalItem from "@/components/ModalItem.vue";
export default {
  components: {
    ModalItem,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
