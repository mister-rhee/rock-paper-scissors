const FIRST_TO = 5;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    updateComputerDisplay(choice);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
        if (computerSelection == PAPER) {
            cond = false;
            return 0;
        } else {
            cond = false;
            return 1;
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == SCISSORS) {
            cond = false;
            return 0;
        } else {
            cond = false;
            return 1;
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == ROCK) {
            cond = false;
            return 0;
        } else {
            cond = false;
            return 1;
        }
    }
}

function updateComputerDisplay(comp) {
    switch (comp) {
        case 0: computerDisplay.textContent = "ROCK"; break;
        case 1: computerDisplay.textContent = "PAPER"; break;
        case 2: computerDisplay.textContent = "SCISSORS"; break;
    }
    return;
}

function updatePlayerDisplay(player) {
    playerDisplay.textContent = player;
}

function handleClick(player) {
    if (scorePlayer < 5 && scoreComputer < 5) {
        updatePlayerDisplay(player);
        playRound(player, getComputerChoice());
    }
}

let scorePlayer = 0;
let scoreComputer = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnSci = document.querySelector(".scissors");
const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");

btnRock.addEventListener('click', () => handleClick("ROCK"));
btnPaper.addEventListener('click', () => handleClick("PAPER"));
btnSci.addEventListener('click', () => handleClick("SCISSORS"));