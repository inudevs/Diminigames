<template>
  <div id="app">
    <navigation-bar/>
    <rock-paper-scissors/>
  </div>
</template>

<script>
import RockPaperScissors from "./components/RockPaperScissors.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "app",
  components: {
    RockPaperScissors,
    NavigationBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
@import url("http://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css");
</style>
