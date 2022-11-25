<template>
  <button @click="newItem(Date.now())">Set Data</button>
</template>

<script>
export default {
  inject: ["newItem"],
};
</script>

<style></style>
