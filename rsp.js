// Get computer choice
const choice = ['ROCK', 'PAPER', 'SISSORS'];
function computerPlay(choice){
    const computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

let win = 0;
let loss = 0;

// Check the winner
function playRound(playerSelection, computerSelection){
    if ((playerSelection == 'ROCK' && computerSelection == 'SISSORS') || (playerSelection == 'SISSORS' && computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'ROCK')) {
        win++;
        console.log(`'You won! ${playerSelection} beats ${computerSelection}!'`);
    } else if ((computerSelection == 'ROCK' && playerSelection == 'SISSORS') || (computerSelection == 'SISSORS' && playerSelection == 'PAPER') || (computerSelection == 'PAPER' && playerSelection == 'ROCK')) {
        loss++;
        console.log(`'You lost! ${computerSelection} beats ${playerSelection}!'`);
    } else {
        console.log('Tie! Try again!');
    }
}

function game(){
    for (let i = 0; i < 6; i++){
        if (i == 5) {
            if (win > loss){
                console.log('Congratulations! You won the game!');
            } else if (win < loss){
                console.log('Awww. You lost the game! Wanna play again?');
            } else {
                console.log('Draw!');
            } 
        } else {
          const playerSelection = prompt('What is your hand?').toUpperCase();
          const computerSelection = computerPlay(choice);
          playRound(playerSelection, computerSelection);
          console.log(win, ':', loss);
        } 
    }
}