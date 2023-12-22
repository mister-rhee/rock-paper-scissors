function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2: return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    let cond = true;
    while (cond) {
        if (playerSelection == computerSelection) { cond = true; }
        else if (playerSelection == "ROCK") {
            if (computerSelection == PAPER) {
                //return ("You Lose! Paper beats Rock")
                cond = false;
                return 0;
            } else {
                //return ("You Win! Rock beats Scissors")
                cond = false;
                return 1;
            }
        } else if (playerSelection == "PAPER") {
            if (computerSelection == SCISSORS) {
                //return ("You Lose! Scissors beats Paper")
                cond = false;
                return 0;
            } else {
                //return ("You Win! Paper beats Rock")
                cond = false;
                return 1;
            }
        } else if (playerSelection == "SCISSORS") {
            if (computerSelection == ROCK) {
                //return ("You Lose! Rock beats Scissors")
                cond = false;
                return 0;
            } else {
                //return ("You Win! Scissors beats Paper")
                cond = false;
                return 1;
            }
        }
    }
}

function handleClick(player) {
    playRound(player, getComputerChoice());
}

let scorePlayer = 0;
let scoreComputer = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnSci = document.querySelector(".scissors");

btnRock.addEventListener('click', () => handleClick("ROCK"));
btnPaper.addEventListener('click', () => handleClick("PAPER"));
btnSci.addEventListener('click', () => handleClick("SCISSORS"));