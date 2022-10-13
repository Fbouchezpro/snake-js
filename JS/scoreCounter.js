let playerScore = 0;

function updateScore() {
  const playerScorePara = document.getElementById("playerScore");
  playerScorePara.textContent = `Player: ${playerScore}`;
}
