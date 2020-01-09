const COMPUTER_WIN = "The computer won";
const PLAYER_WIN = "The player won";
function computerPlay() {
  let outcomes = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return outcomes[randomIndex].toUpperCase();
}
function theWinner(computerScore, playerScore) {
  console.log(playerScore, computerScore);
  if (computerScore === playerScore) {
    return TIE;
  } else {
    return computerScore > playerScore
      ? `${COMPUTER_WIN} with ${computerScore} wins`
      : `${PLAYER_WIN} with ${playerScore} wins`;
  }
}

const TIE = "It's a tie";
function oneGame(playerSelection, computerPlay) {
  if (playerSelection.toUpperCase() === computerPlay) return TIE;
  else {
    switch (playerSelection.toUpperCase()) {
      case "ROCK":
        return computerPlay === "SCISSORS" ? PLAYER_WIN : COMPUTER_WIN;
      case "SCISSORS":
        return computerPlay === "PAPER" ? PLAYER_WIN : COMPUTER_WIN;
      case "PAPER":
        return computerPlay === "ROCK" ? PLAYER_WIN : COMPUTER_WIN;
    }
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Input your choice!");
    let playGame = oneGame(playerSelection, computerPlay());
    playGame === TIE
      ? numberOfDraws++
      : playGame === PLAYER_WIN
      ? playerScore++
      : computerScore++;
  }
  console.log(theWinner(computerScore, playerScore));
}
game();
