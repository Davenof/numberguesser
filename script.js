let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Random Int Function
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Compare Guesses Function
const compareGuesses = (humanGuess, computerGuess, secretTargetNum) => {
  // Checks guess closeness to secret target
  const humanGuessCloseness = Math.abs(secretTargetNum - humanGuess);
  const computerGuessCloseness = Math.abs(secretTargetNum - computerGuess);

  if (humanGuessCloseness <= computerGuessCloseness) {
    return true;
  } else {
    return false;
  }
};

// Score update function
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Next round function
const advanceRound = () => currentRoundNumber++;
