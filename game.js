function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2: return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sci = document.querySelector(".scissors");
const scoreBoard = document.querySelector(".result");

let scorePlayer = 0;
let scoreComputer = 0;

rock.addEventListener('click', () => {
    if (playRound("ROCK", getComputerChoice()) == 1) {
        scorePlayer++;
    } else { scoreComputer++; }
    updateScoreBoard();
});
paper.addEventListener('click', () => {
    if (playRound("PAPER", getComputerChoice()) == 1) {
        scorePlayer++;
    } else { scoreComputer++; }
    updateScoreBoard();
});
sci.addEventListener('click', () => {
    if (playRound("SCISSORS", getComputerChoice()) == 1) {
        scorePlayer++;
    } else { scoreComputer++; }
    updateScoreBoard();
});

function updateScoreBoard() {
    scoreBoard.textContent = `${scorePlayer} : ${scoreComputer}`;
}

updateScoreBoard();