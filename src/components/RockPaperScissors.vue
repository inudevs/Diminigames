<template>
  <div>
    <div id="announcement-container">
      <div>
        <div id="announcement-box" :class="boxColor">{{ announcement }}</div>
      </div>
    </div>
    <div class="flex-column-container">
      <p id="my-score" class="score">{{ myScore }}</p>
      <img :src="myRPSImage">
      <p id="versus">vs</p>
      <img :src="computerRPSImage">
      <p id="computer-score" class="score">{{ computerScore }}</p>
      <!-- <div id="my-name" class="player-name">나</div>
      <div id="computer-name" class="player-name">컴퓨터</div>-->
    </div>
    <div id="rps-buttons-container">
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
#announcement-container {
  display: flex;

  justify-content: center;
  align-items: center;
}

#announcement-box {
  border: 2px solid;
  border-radius: 40px;
  color: white;

  font-size: 2.5em;
  font-family: "Nanum Gothic", sans-serif;

  margin: 0 auto 0.5em auto;
  padding: 4px 60px;
  text-align: center;
  align-self: center;
  justify-content: center;
}

@media screen and (max-width: 900px) {
  #announcement-box {
    font-size: 2em;
  }
}

@media screen and (max-width: 600px) {
  #announcement-box {
    font-size: 1.5em;
  }
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
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
}

#versus {
  font-family: "Times New Roman", Times, serif;
  font-size: 10vw;
  margin: 0.5em 0;
}

.flex-column-container > img {
  max-width: 100%;
  max-height: 100%;
}

.player-name {
  border: 2px solid;
  border-radius: 30px;

  color: white;

  text-align: center;
  align-self: center;
  justify-self: center;

  font-size: 1vw;
  padding: 0 20px;
}

#my-name {
  grid-column: 2;

  border-color: #228be6;
  background-color: #228be6;
}

#computer-name {
  grid-column: 1;
  border-color: #fa5252;
  background-color: #fa5252;
}

#rps-buttons-container {
  display: flex;
  height: 5em;

  margin: 0.75em 7vw 0 7vw;
}

.rps-button {
  opacity: 0.3;
  flex: 1;

  border: 2px solid black;
  border-radius: 20px;

  margin: 0 5px;

  cursor: pointer;
}

.rps-button:hover {
  opacity: 1;
}

.rps-button:focus {
  outline: none;
}

.rps-button:active {
}

@media screen and (orientation: portrait) {
  .flex-column-container {
    grid-template-columns: 2.5fr 1fr 2.5fr;
    font-size: 2em;

    margin-top: 0;
  }

  #versus {
    font-family: "Times New Roman", Times, serif;
    font-size: 13vw;
  }

  .score {
    grid-row: 2;
    margin-top: 0.1em;
  }

  #computer-score {
    grid-column: 3;
  }
}

#rock-button {
  background: url(../assets/rps-rock.png) no-repeat;
  background-size: contain;
  background-position: center;
}

#paper-button {
  background: url(../assets/rps-paper.png) no-repeat;
  background-size: contain;
  background-position: center;
}

#scissors-button {
  background: url(../assets/rps-scissors.png) no-repeat;
  background-size: contain;
  background-position: center;
}
</style>

