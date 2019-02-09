<template>
  <div id="app">
    <navigation-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
// import RockPaperScissors from "./components/RockPaperScissors.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "app",
  components: {
    NavigationBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
@import url("https://cdn.jsdelivr.net/gh/moonspam/NanumBarunGothic@1.0/nanumbarungothicsubset.css");
</style>
