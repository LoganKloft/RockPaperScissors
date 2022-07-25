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
                console.log(`Tie! ${playerSelection} ties ${computerSelection}`);
                return 0;
            case "Scissors":
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return 1;
            case "Paper":
                console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
                return -1;
            default:
                console.log(`Not a valid Player Selection: ${playerSelection}`);
                return 0;
        }
    } else if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Paper":
                console.log(`Tie! ${playerSelection} ties ${computerSelection}`);
                return 0;
            case "Rock":
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return 1;
            case "Scissors":
                console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
                return -1;
            default:
                console.log(`Not a valid Player Selection: ${playerSelection}`);
                return 0;
        }
    } else if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Scissors":
                console.log(`Tie! ${playerSelection} ties ${computerSelection}`);
                return 0;
            case "Paper":
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return 1;
            case "Rock":
                console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
                return -1;
            default:
                console.log(`Not a valid Player Selection: ${playerSelection}`);
                return 0;
        }
    } else {
        console.log(`Not a valid Player Selection: ${playerSelection}`);
        return 0;
    }
}

function game() {
    let playerSelection = null;
    let computerSelection = null;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, or Scissors?");

        const result = playRound(playerSelection, computerSelection);

        if (result == 1) {
            playerScore++;
        } else if (result == -1){
            computerScore++;
        }

        console.log(`Running score: (${playerScore}, ${computerScore})`);
    }

    console.log(`Final score: (${playerScore}, ${computerScore})`);
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("Tie!");
    }
}

game();