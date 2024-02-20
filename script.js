
//Get random number 1-3
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

//Function to return random choice from comp//
function compChoice() {
    let choice = "";

    switch (randomNumber(1, 3)) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissor";
            break;
    }
    return choice;
}

//Prompt the user for a choice//

//let userChoice = prompt("Rock, Paper or Scissor?");


//Function to play a single round, declare winner//
function singleRound(comp, user) {
    let declaration = "";

    if (comp === "rock" && user === "scissor") {
        declaration = "You lose! Rock beats Scissor";
    }
    else if (comp === "paper" && user === "rock") {
        declaration = "You lose! Paper beats Rock";
    }
    else if (comp === "scissor" && user === "paper") {
        declaration = "You lose! Scissor beats Paper";
    }
    else if (comp === "rock" && user === "paper") {
        declaration = "You win! Paper beats Rock";
    }
    else if (comp === "paper" && user === "scissor") {
        declaration = "You win! Scissor beats Paper";
    }
    else if (comp === "scissor" && user === "rock") {
        declaration = "You win! Rock beats Scissor";
    }
    else {
        declaration = "It's a tie!";
    }
    return declaration;
}


//Function to play previous function(single round) 5 times, declare winner//
function fullGame() {

    let wins = 0;
    let loses = 0;

    for (let i = 0; i < 5; i++) {

        let userChoice = prompt("Rock, Paper or Scissor?");
        let computerChoice = compChoice();

        let oneMatch = singleRound(computerChoice, userChoice.toLowerCase());

        if (oneMatch.slice(0,5) === "You w") {
            wins += 1;
        }
        else if (oneMatch.slice(0,5) === "You l") {
            loses += 1;
        }
    
        console.log(oneMatch);

    }
    if(wins > loses) {
        console.log("Congratulation! You've won the game");
        return wins;
    }
    else {
        console.log("You've lost the game, noob!");
        return loses;
    }
}

fullGame();