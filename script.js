let total1 = 0;
let total2 = 0;

function rollDice(player) {
  const dice = document.getElementById(`dice${player}`);
  const diceImg = document.getElementById(`diceImg${player}`);
  const numbersId = `numbers${player}`;
  const scoreBoxId = `scoreBox${player}`;

  let diceNumber = Math.floor(Math.random() * 6) + 1;
  let nums = Math.trunc(diceNumber);

  dice.style.transform = "rotate(360deg)";
  setTimeout(() => {
    diceImg.src = `dice-${diceNumber}.png`;
    document.getElementById(numbersId).innerText = nums;
    dice.style.transform = "rotate(0deg)";
  }, 100);

  if (player === 1) {
    total1 += diceNumber;
    document.getElementById(
      scoreBoxId
    ).innerText = `Player 1 total score is: ${total1}`;
  } else {
    total2 += diceNumber;
    document.getElementById(
      scoreBoxId
    ).innerText = `Player 2 total score is: ${total2}`;
  }

  if (total1 >= 100) {
    alert("Player 1 Won The Game");
    document.getElementById(scoreBoxId).innerHTML = "Game Over";
    resetGame();
  }

  if (total2 >= 100) {
    alert("Player 2 Won The Game");
    document.getElementById(scoreBoxId).innerHTML = "Game Over";
    resetGame();
  }
}

function resetGame() {
  total1 = 0;
  total2 = 0;

  document.getElementById("scoreBox1").innerText = "Player 1 total score is: 0";
  document.getElementById("scoreBox2").innerText = "Player 2 total score is: 0";
}