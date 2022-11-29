<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
      accusamus amet culpa tempora quo veniam velit reprehenderit minima nisi
      molestiae quasi voluptate cumque doloribus, incidunt nemo animi. Ut, nam
      perferendis.
    </p>
    <button class="blue" @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
