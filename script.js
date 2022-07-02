function computerPlayque(){

    console.log( Math.random());
}

function playRound(playerSelection, computerSelection){
    console.log("you Lose! Paper beats Rock");
}

let user = prompt("")

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i=0; i<5; i++) {
        console.log(playRound());
    }
    
}