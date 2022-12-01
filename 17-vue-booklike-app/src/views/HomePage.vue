<template>
  <app-header></app-header>
  <div class="flex flex-row">
    <Sidebar />
    <app-bookmark-list></app-bookmark-list>
  </div>
</template>

<script>
import Sidebar from "@/components/Home/SidebarPage";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style></style>
