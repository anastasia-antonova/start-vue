<template>
  <div id="app">
    <Landing/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from "@/pages/Landing.vue";

export default Vue.extend({
  name: 'App',
  components: {
    Landing,
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/reset";
@import "@/assets/scss/general";

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
  //
  //background-color: #ffffff;


}
</style>
