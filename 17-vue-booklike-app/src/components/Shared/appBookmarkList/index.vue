<template>
  <!-- bookMark'larimizi gösterecegimiz yer. !-->
  <div>
    <div>
      <div class="p-2 grid grid-cols-8 gap-4">
        <BookmarkListItem v-for="i in 10" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "./BookmarkListItem";
export default {
  components: {
    BookmarkListItem,
  },
};
</script>

<style></style>
