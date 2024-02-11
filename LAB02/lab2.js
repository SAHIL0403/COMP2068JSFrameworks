const prompt = require('prompt');

prompt.start();

prompt.get(['userSelection'], function (err, result) {
  if (err) { return onErr(err); }
  const userSelection = result.userSelection.toUpperCase();
  const randomNumber = Math.random();
  let computerSelection;

  if (randomNumber <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNumber <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`User selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);

  if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins');
  } else if (
    (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
    (computerSelection === 'PAPER' && userSelection === 'ROCK') ||
    (computerSelection === 'SCISSORS' && userSelection === 'PAPER')
  ) {
    console.log('Computer Wins');
  } else {
    console.log("It's a tie");
  }
});

function onErr(err) {
  console.error(err);
  return 1;
}
