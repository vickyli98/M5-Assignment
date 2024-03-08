let userChoice;
 do {
  userChoice = prompt('Choose rock, paper, or scissors');
  if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    alert('Please enter a valid move.')
  };
 } while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors');

 let computerChoice = Math.random();

if (computerChoice >= 0 && computerChoice <= 1/3) {
  computerChoice = 'rock';
} else if (computerChoice > 1/3 && computerChoice <= 2/3) {
  computerChoice = 'paper';
} else if (computerChoice > 2/3 && computerChoice <= 1) {
  computerChoice = 'scissors';
}

if (userChoice === computerChoice) {
  alert(`You picked ${userChoice}. Computer picked ${computerChoice}. Tie.`);
} else if (userChoice === 'rock' && computerChoice === 'scissors') {
  alert(`You picked ${userChoice}. Computer picked ${computerChoice}. You win!`);
} else if (userChoice === 'paper' && computerChoice === 'rock') {
  alert(`You picked ${userChoice}. Computer picked ${computerChoice}. You win!`);
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
  alert(`You picked ${userChoice}. Computer picked ${computerChoice}. You win!`);
} else {
  alert (`You picked ${userChoice}. Computer picked ${computerChoice}. Computer wins.`)
}