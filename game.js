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
    if (playerSelection == computerSelection) {
        return "tie";
    }
    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            return "opponent";
        } else if (computerSelection == "SCISSORS") {
            return "player";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            return "opponent";
        } else if (computerSelection == "ROCK") {
            return "player";
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            return "opponent";
        } else if (computerSelection == "PAPER") {
            return "player";
        }
    }
}

function updateComputerDisplay(comp) {
    switch (comp) {
        case 0: computerDisplay.textContent = "🪨"; break;
        case 1: computerDisplay.textContent = "📝"; break;
        case 2: computerDisplay.textContent = "✂️"; break;
    }
}

function updatePlayerDisplay(player) {
    switch (player) {
        case "ROCK": playerDisplay.textContent = "🪨"; break;
        case "PAPER": playerDisplay.textContent = "📝"; break;
        case "SCISSORS": playerDisplay.textContent = "✂️"; break;
    }
}

function updateScoreboard() {
    playerScore.textContent = `You: ${scorePlayer}`;
    computerScore.textContent = `Opponent: ${scoreComputer}`;
}

function handleClick(player) {
    updatePlayerDisplay(player);
    pointWinner = playRound(player, getComputerChoice());
    if (pointWinner == "player") {
        scorePlayer++;
    } else if (pointWinner == "opponent") {
        scoreComputer++;
    }
    whoGotPoint(pointWinner);
    updateScoreboard();
    if (scorePlayer >= 5 || scoreComputer >= 5) {
        gameOver();
    }
}

function whoGotPoint(pointWinner) {
    switch (pointWinner) {
        case "player": subtext.textContent = "You got a point!"; break;
        case "opponent": subtext.textContent = "Opponent got a point!"; break;
        case "tie": subtext.textContent = "It's a tie!"
    }
}

function gameOver() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnSci.disabled = true;
    if (scorePlayer == 5) {
        subtext.textContent = "You Win!";
    } else { subtext.textContent = "You Lose!" }
    btnReset.style.visibility = 'visible';
}

function resetGame() {
    subtext.textContent = "First to 5 wins!";
    playerDisplay.textContent = "?";
    computerDisplay.textContent = "?";
    scorePlayer = 0;
    scoreComputer = 0;
    updateScoreboard();
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnSci.disabled = false;
    btnReset.style.visibility = "hidden";
}

let scorePlayer = 0;
let scoreComputer = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnSci = document.querySelector(".scissors");
const playerDisplay = document.querySelector(".playerDisplay");
const playerScore = document.querySelector(".playerScore");
const computerDisplay = document.querySelector(".computerDisplay");
const computerScore = document.querySelector(".computerScore");
const subtext = document.querySelector(".subtext");
const btnReset = document.querySelector(".reset");

btnRock.addEventListener('click', () => handleClick("ROCK"));
btnPaper.addEventListener('click', () => handleClick("PAPER"));
btnSci.addEventListener('click', () => handleClick("SCISSORS"));
btnReset.addEventListener('click', () => resetGame());