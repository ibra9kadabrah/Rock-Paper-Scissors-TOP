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
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors").toLowerCase();
    console.log(`You picked: ${choice}`);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`Its a tie`);
        return 2;
    }
    if (humanChoice == `rock` && computerChoice == `scissors`) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return 0;
    }
}

function playGame(play) {
    for (let i = 0; i < 5; i++) {
        play();
    }
}