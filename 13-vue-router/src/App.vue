<template>
  <router-link to="/"> Anasayfa </router-link>

  <!-- sayfalar arasında geçiş yaparken sayfa yenilenmiyor.!-->
  <router-link to="/about"> About </router-link> 
  <!-- bu component sizin, router'inize denk gelen component'i load ettikten sonra burada gosteriyor.!-->
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style></style>
