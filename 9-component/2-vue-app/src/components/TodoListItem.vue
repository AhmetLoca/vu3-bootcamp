<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{item.text}}</span>
    <button calss="sm red">Sill</button>
  </li>
</template>

<script>
export default {
  props:["item"]
};
</script>

<style></style>
