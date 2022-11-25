<template>
  <div class="container">
    <div class="header">
      <slot name="title"></slot>
    </div>
    <div class="content my-2">
      <hr />

      <slot name="content"> </slot>
    </div>
    <hr />
    <!-- default olarak gösterilecek.!-->

    <slot></slot>
    <div class="footer text-right">
      <button class="ml-2">Close</button>
      <button class="ml-2 green">Save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
