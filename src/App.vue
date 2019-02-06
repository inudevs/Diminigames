<template>
  <div id="app">
    <h1>디미니게임즈</h1>
    <rock-paper-scissors/>
  </div>
</template>

<script>
import RockPaperScissors from "./components/RockPaperScissors.vue";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line
    RockPaperScissors
  }
};
</script>
