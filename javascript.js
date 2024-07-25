function getComputerChoice() {
    // chooses a random number between 0 and 2
    const computerChoice = Math.floor(Math.random() * (MAXCHOICES - MINCHOICES + 1) + MINCHOICES);

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("choose: rock, paper, scissors");

    if (humanChoice !== null) {
        humanChoice = humanChoice.toLowerCase();
    }
    
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("choose: rock, paper, scissors");
        
        if (humanChoice !== null) {
            humanChoice = humanChoice.toLowerCase();
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    
    // human wins cases
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                return 1;
            } 
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                return 1;
            } 
            break;
        case 'scissors':
            if (computerChoice === 'paper') {
                return 1;
            } 
            break;
    }

    // else, human loses
    return -1;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= GAMEROUNDS; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result == 0) {
            console.log("round " + i + ": it's a tie! you and the computer both chose " + humanSelection + ".");
        } else if (result == 1) {
            console.log("round " + i + ": you win! " + humanSelection + " beats " + computerSelection + ".");
            humanScore++;
        } else {
            console.log("round " + i + ": you lose! " + computerSelection + " beats " + humanSelection + ".");
            computerScore++;
        }
        console.log("you: " + humanScore + " | pc: " + computerScore);
    }
}
  
const MINCHOICES = 0;
const MAXCHOICES = 2;
const GAMEROUNDS = 5;

playGame();