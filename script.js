/*
Object name: gameRules
Function: show the rules of "rock, paper or scissor" game.
The first key shows the play of the first player. The value of
this first key receives a new object that shows the play of the 
second player. The value of this second class will determine 
who is the winner!
Outcomes:
    _ -1: player 2 wins!
    _  0: the game draw!
    _  1: player 1 wins!
​
*/

const gameRules = {
    "paper": {
        "paper": 0,
        "scissors": -1,
        "rock": 1
    },
    "scissors": {
        "paper": 1,
        "scissors": 0,
        "rock": -1
    },
    "rock": {
        "paper": -1,
        "scissors": 1,
        "rock": 0
    }
}

function computerPlay() {
    const keys = Object.keys(gameRules)
    if (keys.length > 0) {
        const index = Math.floor(keys.length * Math.random())
        const key = keys[index]
        return key
    }
}

function playRound(playerSelection, computerSelection) {
    return gameRules[computerSelection][playerSelection]
}

function inputPlayerVerification() {
    const nameVerificator = ["rock", "paper", "scissors"]
    playerSelection = prompt("Rock, paper or scissors?").trim().toLowerCase()

    while(!nameVerificator.includes(playerSelection)) {
        alert(`Warning: You just can write ${nameVerificator}`)
        playerSelection = prompt("Rock, Paper or Scissors?").trim().toLowerCase()
    }
    return playerSelection
}

function countRoundScore(roundResult) {
    if (roundResult == -1) {
        playerScore++
        console.log(`Round ${roundCounter}: Player wons!`)
    }    
    else if (roundResult == 1) { 
        computerScore++
        console.log(`Round ${roundCounter}: Computer wons!`)
    }
    else console.log(`Round ${roundCounter}: Draw!`)
    roundCounter ++
} 

function totalScore(playerScore, computerScore){
    if(playerScore > computerScore) return "You won! :)"
    else if(playerScore < computerScore) return "You lost! :("
    else if(playerScore == computerScore) return "Draw! Try again." 
}

let playerScore = 0
let computerScore = 0
let roundCounter = 1
let gameCounter = 1

function game() {
    console.log(`
    ------------------------ GAME ${gameCounter} -------------------------
    `)
    for(let i = 0; i < 5; i++){
        const playerSelection = inputPlayerVerification()
        const computerSelection = computerPlay(gameRules)
        countRoundScore(playRound(playerSelection, computerSelection))
        console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`)
    }
    console.log(`
    ------- RESULT OF GAME ${gameCounter}: ${totalScore(playerScore, computerScore)} ------
    `)
    playerScore = 0
    computerScore = 0
    roundCounter = 1
}

while(confirm(`Let's play rock, paper and scissors!?`)){
    game()
    gameCounter++
}