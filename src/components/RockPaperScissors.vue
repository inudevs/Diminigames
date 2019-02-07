<template>
  <div>
    <div>
      <div id="announcement-box" :class="boxColor">{{ announcement }}</div>
    </div>
    <div class="flex-column-container">
      <div class="player-status-container">
        <p id="my-score" class="score">{{ myScore }}</p>
        <img :src="myRPSImage">
        <div id="my-name" class="player-name">나</div>
      </div>
      <p id="versus">vs</p>
      <div class="player-status-container">
        <img v-bind:src="computerRPSImage">
        <p id="computer-score" class="score">{{ computerScore }}</p>
        <div id="computer-name" class="player-name">컴퓨터</div>
      </div>
    </div>
    <div class="rps-buttons-container">
      <button id="rock-button" class="rps-button" @click="playGame('rock')"></button>
      <button id="paper-button" class="rps-button" @click="playGame('paper')"></button>
      <button id="scissors-button" class="rps-button" @click="playGame('scissors')"></button>
    </div>
  </div>
</template>

<script>
import rock from "../assets/rps-rock.png";
import paper from "../assets/rps-paper.png";
import scissors from "../assets/rps-scissors.png";

const rpsTable = { rock: rock, paper: paper, scissors: scissors };

export default {
  name: "RockPaperScissors",
  data: function() {
    return {
      myRPSState: "rock",
      computerRPSState: "rock",
      myScore: 0,
      computerScore: 0,
      announcement: "버튼을 눌러 가위바위보를 해보세요.",
      boxColor: {
        "tie-box": true,
        "win-box": false,
        "lose-box": false
      }
    };
  },
  computed: {
    myRPSImage: function() {
      return rpsTable[this.myRPSState];
    },

    computerRPSImage: function() {
      return rpsTable[this.computerRPSState];
    }
  },
  methods: {
    playGame: function(myRPS) {
      this.myRPSState = myRPS;

      const picks = ["rock", "paper", "scissors"];
      this.computerRPSState = picks[Math.floor(Math.random() * 3)];

      if (this.myRPSState == this.computerRPSState) {
        this.boxColor["tie-box"] = true;
        this.boxColor["win-box"] = false;
        this.boxColor["lose-box"] = false;

        this.announcement = "비겼습니다.";
      } else if (
        (this.myRPSState == "rock" && this.computerRPSState == "scissors") ||
        (this.myRPSState == "paper" && this.computerRPSState == "rock") ||
        (this.myRPSState == "scissors" && this.computerRPSState == "paper")
      ) {
        this.myScore++;

        this.boxColor["tie-box"] = false;
        this.boxColor["win-box"] = true;
        this.boxColor["lose-box"] = false;

        this.announcement = "이겼습니다!";
      } else {
        this.computerScore++;

        this.boxColor["tie-box"] = false;
        this.boxColor["win-box"] = false;
        this.boxColor["lose-box"] = true;

        this.announcement = "졌습니다..";
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");

#announcement-box {
  border: 2px solid;
  border-radius: 40px;
  color: white;

  font-size: 2em;
  font-family: "Nanum Gothic", sans-serif;

  margin: 0 auto;
  padding: 4px 10px;
  width: auto;
  max-width: 600px;
  text-align: center;
}

.tie-box {
  border-color: #228be6;
  background: #228be6;
}

.win-box {
  border-color: #40c057;
  background: #40c057;
}

.lose-box {
  border-color: #fa5252;
  background: #fa5252;
}

.flex-column-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.flex-column-container > * {
  flex: 1;
}

.score {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 7vw;
  font-weight: bold;

  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

#my-score {
  margin-right: 0.3em;
  text-align: right;
}

#computer-score {
  margin-left: 0.3em;
  text-align: left;
}

#versus {
  font-family: "Times New Roman", Times, serif;
  font-size: 8vw;

  margin-top: 0.5em;
}
.flex-column-container img {
  width: 75%;
  height: 90%;
}

.player-status-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  flex: 2;
}

.player-status-container img {
  align-self: center;
  justify-self: center;
}

.player-name {
  border: 2px solid;
  border-radius: 30px;

  color: white;

  text-align: center;
  align-self: center;
  justify-self: center;

  width: 100px;
}

#my-name {
  grid-column: 2;

  border-color: #228be6;
  background-color: #228be6;

  width: 100px;
}

#computer-name {
  grid-column: 1;
  border-color: #fa5252;
  background-color: #fa5252;
}

.rps-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rps-button {
  opacity: 0.3;

  width: 6vw;
  height: 6vw;

  margin: 0 5px;

  border: 2px solid black;
  border-radius: 50%;

  cursor: pointer;
}

.rps-button:hover {
  opacity: 1;
}

.rps-button:focus {
  outline: none;
}

.rps-button:active {
  width: 5.8vw;
  height: 5.8vw;
}

#rock-button {
  background: url(../assets/rps-rock.png) no-repeat;
  background-size: cover;
}

#paper-button {
  background: url(../assets/rps-paper.png) no-repeat;
  background-size: cover;
}

#scissors-button {
  background: url(../assets/rps-scissors.png) no-repeat;
  background-size: cover;
}
</style>

