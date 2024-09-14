
const choices              = ["rock","paper","scissors"];
const playerDisplay        = document.getElementById("playerDisplay");
const computerDisplay      = document.getElementById("computerDisplay");
const resultDisplay        = document.getElementById("resultDisplay");
const playerScoreDisplay   = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore            = 0;
let computerScore          = 0;


function playerChoice(choice){
    randomIndex    = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    let result         = "";

    if(computerChoice === choice){
        result = "It's a tie !";
    }
    else{
        switch(choice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You loose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You loose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You loose!";
                break;              
        }
    }

    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    playerDisplay.textContent   = `PLAYER: ${choice}`;
    resultDisplay.textContent   = `RESULT: ${result}`;

    switch(result){
        case "You win!":
            playerScore++;
            break;
        case "You loose!":
            computerScore++;
            break;
    }
    playerScoreDisplay.textContent   = `PLAYER SCORE: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
}