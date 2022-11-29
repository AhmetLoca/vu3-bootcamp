<template>
  <div>
    <h2>Details</h2>

    <p>{{ $route.params.id }}</p>
    <p>{{ $route.query.user }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorem
      atque, laborum in obcaecati a nesciunt maiores aut eveniet repudiandae
      odio aliquid quasi earum, dolore alias! Perferendis eligendi atque
      suscipit?
    </p>
    <button @click="goBack" class="blue">Go Back</button>
  </div>
</template>

<script>
export default {
  created() {
    /* view route ile ilgili bilgileri 2 farklı yerden. Birisi router, birisi route olmak üzere*/
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
