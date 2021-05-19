
function playtoString(val) { // returns string
    // val should ONLY be a number 0, 1, or 2
    switch(val) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default: // shouldnt get here but y'know its possible i guess
            return "OOPSIES";
            //break;
    }
}

function computerPlay() {
    let generatedPlay = Math.floor(Math.random() * 3);
    return generatedPlay;
}

function userPlay() {
    let generatedPlay = prompt().toUpperCase();
    switch(generatedPlay) {
        case "ROCK":
            return 0;
        case "PAPER":
            return 1;
        case "SCISSORS":
            return 2;
        default:
            console.log("not a valid input. please input \"rock\", \"paper\", or \"scissors\". (case insensitive)")
            return userPlay();
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tied";
    }
    if (playerSelection == (computerSelection - 1) % 3 || (computerSelection == 0 && playerSelection == 2)) {
        computerWins++;
        return "Computer wins because " + playtoString(computerSelection) + " beats " + playtoString(playerSelection);
    }
    playerWins++;
    return "Player wins because " + playtoString(playerSelection) + " beats " + playtoString(computerSelection);

}

function game() {
    for(i = 0; i < 5; i++) {
        playerSelection = userPlay();
        computerSelection = computerPlay();

        console.log("Computer: " + playtoString(computerSelection) + "\n" +
                "Player: " + playtoString(playerSelection) + "\n" +
                playRound(playerSelection, computerSelection) + "\n" +
                "Current Score: Player: " + playerWins + " Computer: " + computerWins);
    }
    if (playerWins > computerWins) {
        return "PLAYER WINS";
    }
    else if (playerWins < computerWins) {
        return "COMPUTER WINS";
    }
    return "TIE";
}

let playerWins = 0;
let computerWins = 0;
console.log(game());