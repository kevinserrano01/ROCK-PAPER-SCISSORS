let computerScore = 0;
let playerScore = 0;
let ganadorRonda = "";

function playRound(playerSelection, computerSelection){ //DECIDE GANADOR
    if (playerSelection === computerSelection) {
        ganadorRonda = 'Empate'

    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK'))
        {
            playerScore++;
            ganadorRonda = 'You Win'

    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK'))
        {
            computerSelection++;
            ganadorRonda = 'You lose!'
    }
    updateScoreMessage(ganadorRonda, playerSelection, computerSelection)
}

function getRandomChoice(){ //obtener seleccion aleatoria
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function gameOver(){
    return playerScore === 5 || computerSelection === 5;
}

//consts
const puntuaciacion = document.getElementById('puntuacion');
const message = document.getElementById('message');
const playerScore1 = document.getElementById('playerScore');
const computerScore1 = document.getElementById('computerScore')
const playerSign = document.getElementById('perfilPlayer')
const computerSign = document.getElementById('perfilComputer')