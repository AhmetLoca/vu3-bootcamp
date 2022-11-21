<template>
  <div class="container">
    <app-header />
    <benim-guzel-sayacim />
    <app-footer />
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components: {
    /* 
    Normalde CounterItem : CounterItem'dir. Arka tarafta babel sizin için
    CounterItem haline getirir.
    babel'in yaptıgı sey ecmascript standart'larina gore convert etmek.
     */
    "benim-guzel-sayacim": CounterItem,
  },
};
</script>
