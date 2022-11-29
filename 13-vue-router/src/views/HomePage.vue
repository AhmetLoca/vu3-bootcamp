<template>
  <div>
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis
      numquam quaerat aut, recusandae laudantium excepturi eos veritatis quam
      reiciendis, odio voluptatem sed aperiam. Minus iure maxime harum atque
      est!
    </p>
    <input type="text" @keydown.enter="goToDetails" />
  </div>
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      //this.$router.push(`details/${e.target.value}`);
      this.$router.push({
        name: "DetailsPage",
        params: {
          id: e.target.value,
        },
        query: {
          id: "ahmetloca",
          type: "DetailsAuth",
        },
      });
    },
  },
};
</script>

<style></style>
