"use strict"

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors").toLowerCase();
    console.log(`You picked: ${choice}`);
    return choice;
}

function playGame() {
    let result = () => {    
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice == computerChoice) {
            return 2;
        } else if (humanChoice == `rock` && computerChoice == `scissors`) {
            return 1;
        } else if (humanChoice == `paper` && computerChoice == `rock`) {
            return 1;
        } else if (humanChoice == `scissors` && computerChoice == `paper`) {
            return 1;
        }
        else {
            return 0;
        }
    };

    for (let counter = 0; counter < 5; counter++) {
        switch (result()) {
            case 2:
                console.log(`Its a tie`);
                humanScore++;
                computerScore++;
                break;
            case 1: 
                console.log(`You win!`);
                humanScore++;
                break;
            case 0:
                console.log(`You lose!`);
                computerScore++;
                break;
        }  
    }
    if (humanScore > computerScore) {
        console.log(`You win the game!`);
    } else {
        console.log(`You lost the game!`);
    }
}

playGame();