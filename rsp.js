const choice = ['ROCK', 'PAPER', 'SISSORS'];
function computerPlay(choice){
    const computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

function roundOne(playerSelection, computerSelection){
    if (playerSelection === 'ROCK' && computerSelection === 'SISSORS') || (playerSelection === 'SISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You won! ${playerSelection} beats ${computerSelection}!';
    } else if (playerSelection === computerSelection) {
        return 'Tie! Try again!';
    }
}
const playerSelection = prompt('What is your hand?');
return playerSelection.toUpperCase();
const computerSelection = computerPlay(choice);