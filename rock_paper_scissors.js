let results = document.querySelector('#results');
let playerScoreELE = document.querySelector('#player-score');
let computerScoreELE = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector('#rock');
let scissorsButton = document.querySelector('#scissors');
let paperButton = document.querySelector('#paper');
let restartButton = document.querySelector('#restart');

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = (Math.floor(Math.random() * 3)) + 1;
    return choices[choice - 1];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Rock":
                results.innerText = `Tie! ${playerSelection} ties ${computerSelection}`;
                return 0;
            case "Scissors":
                results.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
                return 1;
            case "Paper":
                results.innerText = `You lose! ${playerSelection} loses to ${computerSelection}`;
                return -1;
            default:
                results.innerText = `Not a valid Player Selection: ${playerSelection}`;
                return 0;
        }
    } else if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Paper":
                results.innerText = `Tie! ${playerSelection} ties ${computerSelection}`;
                return 0;
            case "Rock":
                results.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
                return 1;
            case "Scissors":
                results.innerText = `You lose! ${playerSelection} loses to ${computerSelection}`;
                return -1;
            default:
                results.innerText = `Not a valid Player Selection: ${playerSelection}`;
                return 0;
        }
    } else if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Scissors":
                results.innerText = `Tie! ${playerSelection} ties ${computerSelection}`;
                return 0;
            case "Paper":
                results.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
                return 1;
            case "Rock":
                results.innerText = `You lose! ${playerSelection} loses to ${computerSelection}`;
                return -1;
            default:
                results.innerText = `Not a valid Player Selection: ${playerSelection}`;
                return 0;
        }
    } else {
        results.innerText = `Not a valid Player Selection: ${playerSelection}`;
        return 0;
    }
}

function disableButtons() {
    rockButton.removeEventListener('click', chooseRock);
    scissorsButton.removeEventListener('click', chooseScissors);
    paperButton.removeEventListener('click', choosePaper);
}

function enableButtons() {
    rockButton.addEventListener('click', chooseRock);
    scissorsButton.addEventListener('click', chooseScissors);
    paperButton.addEventListener('click', choosePaper);
}

function enableRestart() {
    restartButton.addEventListener('click', restartGame);
    restartButton.style.display = "inline";
}

function disableRestart() {
    restartButton.removeEventListener('click', restartGame);
    restartButton.style.display = "none";
}

function displayScores() {
    playerScoreELE.innerText = `${playerScore}`;
    computerScoreELE.innerText = `${computerScore}`;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    results.innerText = '';
}

function restartGame() {
    resetScores();
    displayScores();
    disableButtons();
    enableButtons();
    disableRestart();
    results.innerText = "Choose your weapon!";
}

function choose(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice());
    if (result > 0) {
        playerScore++;
        playerScoreELE.innerText = `${playerScore}`;
    } else if (result < 0) {
        computerScore++;
        computerScoreELE.innerText = `${computerScore}`;
    }

    if (playerScore === 5) {
        results.innerText = `Game over. Player wins!`;
        disableButtons();
        enableRestart();
    } else if (computerScore === 5) {
        results.innerText = `Game over. Computer wins!`;
        disableButtons();
        enableRestart();
    }
}

function chooseRock() {
    choose("Rock");
}

function chooseScissors() {
    choose("Scissors");
}

function choosePaper() {
    choose("Paper");
}

restartGame();