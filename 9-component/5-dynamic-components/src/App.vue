<template>
  <div class="container">
    <button class="red" @click="activeComponent = 'Red'">Red</button>
    <button class="green" @click="activeComponent = 'Green'">Green</button>
    <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    <!-- <Red v-if="activeComponent == 'Red'" class="mb-2" />
         <Green v-if="activeComponent == 'Green'" class="mb-2" />
         <Blue v-if="activeComponent == 'Blue'" class="mb-2" />
   -->
    {{ activeComponent }}
    <keep-alive>
      <component :is="activeComponent" msg="Red Component 2">
        <h3 class="bg-green text-white">Green Component</h3>
      </component>
    </keep-alive>
    <!-- 
      activeComponent'im Red, Blue veya Green. Red, Blue, Green import oldugu için otomatik olarak onu components'larda arıyor.
      !-->
  </div>
</template>

<script>
import Red from "@/components/RedItem.vue";
import Green from "@/components/GreenItem.vue";
import Blue from "@/components/BlueItem.vue";

export default {
  components: {
    Red,
    Green,
    Blue,
  },
  data() {
    return {
      activeComponent: "",
    };
  },
};
</script>

<style></style>
