const choice = ['ROCK', 'PAPER', 'SISSORS'];
function computerPlay(choice){
    const computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

const playerSelection = 'paper'.toUpperCase();
const computerSelection = computerPlay(choice);

function playRound(playerSelection, computerSelection){
    if ((playerSelection == 'ROCK' && computerSelection == 'SISSORS') || (playerSelection == 'SISSORS' && computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'ROCK')) {
        return `'You won! ${playerSelection} beats ${computerSelection}!'`;
    } else if ((computerSelection == 'ROCK' && playerSelection == 'SISSORS') || (computerSelection == 'SISSORS' && playerSelection == 'PAPER') || (computerSelection == 'PAPER' && playerSelection == 'ROCK')) {
        return `'You lost! ${computerSelection} beats ${playerSelection}!'`;
    } else {
        return 'Tie! Try again!';
    }
}
