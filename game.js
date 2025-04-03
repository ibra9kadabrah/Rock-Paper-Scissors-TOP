"use strict"
const DRAW = 2;
const PLAYER = 1;
const COMPUTER = 0;


let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", e => {
        playRound(e);
    });
});
const div_result = document.querySelectorAll(".result");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); 
    switch (choice) {
        case 0:
            choice = `rock`;
            break;
        case 1:
            choice = `paper`;
            break;
        default:
            choice = `scissors`;
            break;
    }
    return choice;
}

function playRound(choice) {
    let humanChoice = choice.target.textContent;
    let computerChoice = getComputerChoice();

    printPicks(humanChoice, PLAYER);
    printPicks(computerChoice, COMPUTER);

    if (humanChoice == computerChoice) {
        playGame(DRAW);
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        playGame(PLAYER);
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        playGame(PLAYER);
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        playGame(PLAYER);
    }
    else {
        playGame(COMPUTER);
    }
}

function playGame(winner) {
    updateResult(winner);
    switch (winner) {
        case 2:
            humanScore++
            computerScore++
            console.log("Draw");
            break;
        case 1:
            humanScore++;
            console.log("Player win");
            break;
        default:
            computerScore++
            console.log("Computer win");
            break;
    }
    roundCounter++;    
    if (roundCounter == 5) winnerGame();
}

function updateResult(winner) {
    if (winner === PLAYER) 
        div_result.forEach(e => {
        if(e.id === "human") e.textContent++;
    })
    else if (winner === COMPUTER)
        div_result.forEach(e => {
        if(e.id === "computer") e.textContent++; 
    })
    else div_result.forEach(e => e.textContent++);
    
}

function winnerGame() {
    if (humanScore > computerScore) {
        console.log(`-----------------\nYou win the game!`);
    } else {
        console.log(`-----------------\nYou lost the game!`);
    }
    roundCounter = 0;
    humanScore = 0;
    computerScore = 0;
    div_result.forEach(e => {
        e.textContent = 0;
    })

    console.log ("\n------------------------\n\n");
    console.log("Starting again!");
    console.log("\n-------------------------\n\n");
}


function printPicks(choice, caller) {
    switch (caller) {
        case COMPUTER:
            console.log(`Computer picked: ${choice}`);
            break;         
        default:
            console.log(`Player picked ${choice}`);
            break;
    }
}