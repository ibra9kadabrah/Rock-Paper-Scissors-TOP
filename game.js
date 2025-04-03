"use strict"
const DRAW = 2;
const PLAYER_WIN = 1;
const COMPUTER_WIN = 0;


let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); 
    switch (choice) {
        case 0:
            choice = `rock`;
            console.log(`Computer picked: ${choice}`);
            break;
        case 1:
            choice = `paper`;
            console.log(`Computer picked: ${choice}`);
            break;
        default:
            choice = `scissors`;
            console.log(`Computer picked: ${choice}`);
            break;
    }
    return choice;
}

function playRound(choice) {
    let humanChoice = choice.target.textContent;
    let computerChoice = getComputerChoice();
    console.log(`function playRound ` + humanChoice);
    if (humanChoice == computerChoice) {
        playGame(DRAW);
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        playGame(PLAYER_WIN);
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        playGame(PLAYER_WIN);
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        playGame(PLAYER_WIN);
    }
    else {
        playGame(COMPUTER_WIN);
    }
};

function playGame(winner) {
    switch (winner) {
        case 2:
            humanScore++
            computerScore++
            break;
        case 1:
            humanScore++;
            break;
        default:
            computerScore++
            break;
    }
    roundCounter++;
    if (roundCounter == 5) winnerGame();
}
function winnerGame() {
    if (humanScore > computerScore) {
        console.log(`You win the game!`);
    } else {
        console.log(`You lost the game!`);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", e => {
        playRound(e);
    });
});