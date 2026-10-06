// Storage for scores
let scores = [];

function guessGame() {
  const maxNumber = 100;
  const maxAttempts = 3;
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  let attempt = 0;

  console.log("Welcome to Ife Guessing Festival 👌");

  while (attempt < maxAttempts) {
    // for demo, simulating input
    const playerGuess = parseInt(prompt(`Guess 1-${maxNumber} (attempt ${attempt + 1}/${maxAttempts}):`));
    attempt++;

    if (playerGuess === secretNumber) {
      console.log(`You won bravo 🎇 in ${attempt} attempts!`);

      // === SPREAD + DESTRUCTURING ===
      const newScore = { name: "Ife",
         attempts: attempt, 
         score: (maxAttempts - attempt + 1) * 20
         }
      
      // spread to add new score without mutating
      scores = [...scores, newScore];
      
      // destructuring
      const { score, attempts } = newScore;
      console.log(`Score: ${score}, Attempts: ${attempts}`);
      console.log("Phil 4:13 - I can do all things");
      break;
    } else if (playerGuess < secretNumber) {
      console.log("Too low!");
    } else {
      console.log("Too high!");
    }

    if (attempt === maxAttempts) {
      console.log(`Game over! Number was ${secretNumber}`);
    }
  }

  showHighScores();
}

function showHighScores() {
  console.log("\n--- HIGH SCORES ---");

  // === FILTER: only show good scores (won in 2 attempts or less) ===
  const goodScores = scores.filter(s => s.attempts <= 2);

  // === MAP: format for display ===
  const formatted = goodScores.map((s, index) => {
    // === REST: get remaining props ===
    const { name, ...rest } = s;
    return `${index + 1}. ${name} - ${rest.score}pts in ${rest.attempts} tries`;
  });

  // === REST OPERATOR in function ===
  function printAll(...messages) {
    messages.forEach(m => console.log(m));
  }

  if (formatted.length === 0) {
    console.log("No pro scores yet. Keep playing!");
  } else {
    printAll(...formatted); // === SPREAD to pass array as args ===
  }
}

// Start
guessGame();