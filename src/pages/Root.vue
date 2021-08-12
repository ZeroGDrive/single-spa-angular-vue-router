<template>
  <div class="">
    <br />
    <br />
    <br />
    <p>content goes here</p>
    <router-link :to="{ name: 'test' }">test</router-link>
    <br />
    <button @click="goThere">test2</button>
  </div>
</template>

<script>
export default {
  name: "root",
  components: {},
  methods: {
    goThere() {
      this.$router.push({ path: "/hello" });
    },
  },
  data() {
    return {
      device: null,
    };
  },
};
</script>

<style>
</style>
