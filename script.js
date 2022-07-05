let computerScore = 0
let playerScore = 0
let ganadorRonda = ''


function playRound(playerSelection, computerSelection){ //DECIDE GANADOR
    if (playerSelection === computerSelection) {
        ganadorRonda = 'tie'
    }

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        playerScore++
        ganadorRonda = 'player'
      }

    if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
    computerScore++
    ganadorRonda = 'computer'
    }
    updateScoreMessage(ganadorRonda, playerSelection, computerSelection)
}

function getRandomChoice(){ //obtener seleccion aleatoria
    let randomNum = Math.floor(Math.random() * 3); //probar otra menera !!
    switch (randomNum){
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function gameOver(){ //el juego termina cuando se llega a los 5 puntos.
    return playerScore === 5 || computerScore === 5
}

const puntuacion = document.getElementById('puntuacion');
const message = document.getElementById('message');
const playerScore1 = document.getElementById('playerScore');
const computerScore1 = document.getElementById('computerScore');
const playerSign = document.getElementById('perfilPlayer');
const computerSign = document.getElementById('perfilComputer');
const btnPiedra = document.getElementById('btnPiedra');
const btnPapel = document.getElementById('btnPapel');
const btnTijera = document.getElementById('btnTijera');

const endgameModal = document.getElementById('endgameModal') //container P
const endgameMsg = document.getElementById('endgameMsg') //parrafo
const overlay = document.getElementById('overlay') //container
const restartBtn = document.getElementById('restartBtn') //button restart

//events
btnPiedra.addEventListener('click', () => makeClick('ROCK'))
btnPapel.addEventListener('click', () => makeClick('PAPER'))
btnTijera.addEventListener('click', () => makeClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function makeClick(playerSelection){ //hacer Click - handleClick
    if (gameOver()) {
        openEndgameModal()
        return
    }
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (gameOver()) {
        openEndgameModal()
        setFinalMessage()
      }
}


function updateChoices(playerSelection, computerSelection){ //actualizacion de opciones
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊'
            break
        case 'PAPER':
            playerSign.textContent = '✋'
            break
        case 'SCISSORS':
            playerSign.textContent = '✌'
            break
    }
    switch (computerSelection) {
        case 'ROCK':
            computerSign.textContent = '✊'
            break
        case 'PAPER':
            computerSign.textContent = '✋'
            break
        case 'SCISSORS':
            computerSign.textContent = '✌'
            break
    }
}

function updateScore(){ //actualizar puntuacion
    if (ganadorRonda === 'tie') {
        puntuacion.textContent = "It's a tie!"
    } else if (ganadorRonda === 'player'){
        puntuacion.textContent = "You won!"
    } else if(ganadorRonda === 'computer'){
        puntuacion.textContent = "You lost!"
    }

    playerScore1.textContent = `Player: ${playerScore}`
    computerScore1.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(ganador, playerSelection, computerSelection){ //Muestra los ultimos objetos seleccionados de la ronda y con la primera en mayuscula
    if (ganador === 'player') {
        message.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`
        return
    }

    if (ganador === 'computer') {
        message.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`
        return
    }
    message.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string){ //recibe un arma para ponerla en mayúscula la primera Letra
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal(){
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal(){
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore 
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost...')
}

function restartGame(){
    playerScore = 0
    computerScore = 0
    puntuacion.textContent = 'Choose your weapon' //elije tu arma
    message.textContent = 'First to score 5 points wins the game' //El primero en anotar 5 puntos gana el juego.
    playerScore1.textContent = 'Player: 0'
    computerScore1.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}