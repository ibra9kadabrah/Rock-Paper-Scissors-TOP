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

    if (humanChoice == `rock` && computerChoice == `scissors`)
}