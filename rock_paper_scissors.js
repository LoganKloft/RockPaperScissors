function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = (Math.floor(Math.random() * 3)) + 1;
    return choices[choice - 1];
}

console.log(getComputerChoice());