/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerScore, activePlayer;
var totalScores = [0, 0];

intializeTheGame();

function intializeTheGame() {
  playerScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(`.player-0-panel`).classList.add("active");
  document.querySelector(`.player-1-panel`).classList.remove("active");
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;

  document.getElementById(`score-0`).textContent = 0;
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById("input-field").value = 50;
}

document.querySelector(".btn-new").addEventListener("click", () => {
  intializeTheGame();
});

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (gamePlaying) {
    var diceValue = Math.floor(Math.random() * 6) + 1;

    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      playerScore += diceValue;
      document.getElementById(
        `score-${activePlayer}`
      ).textContent = playerScore;
    } else {
      document.getElementById(`score-${activePlayer}`).textContent = 0;
      goToNextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  totalScores[activePlayer] += playerScore;
  document.getElementById(`current-${activePlayer}`).textContent =
    totalScores[activePlayer];
  document.getElementById(`score-${activePlayer}`).textContent = 0;
  var targetValue = parseInt(document.getElementById("input-field").value);
  if (totalScores[activePlayer] >= targetValue) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    gamePlaying = false;
  }

  goToNextPlayer();
});

function goToNextPlayer() {
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.remove("active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.add("active");
  playerScore = 0;
  document.querySelector(".dice").style.display = "none";
}
