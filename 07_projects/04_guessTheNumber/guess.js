let randomNumber = parseInt(Math.random()*100 +1)
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParse')

const p1 = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guessValue = parseInt(userInput.value)
        validateGuess(guessValue)
    })
}

function validateGuess(guessValue){
    if(isNaN(guessValue)){
        alert('Enter valid number!')
    }else if(guessValue < 0){
        alert('Enter valid natural number!')
    }else if(guessValue > 100){
        alert('Enter valid number less than 100!')
    }else{
        prevGuess.push(guessValue)
        if(numGuess === 10){
            displayGuess(guessValue)
            displayMessage(`Game Over! , ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guessValue)
            checkGuess(guessValue)
        }
    }
}

function checkGuess(guessValue){
    if(guessValue === randomNumber){
        displayMessage(`You guessed it , ${randomNumber}`)
        endGame()
    }else if(guessValue < randomNumber){
        displayMessage(`Number too low, try again`)
    }else if(guessValue > randomNumber){
        displayMessage('Number too high, try again')
    }
}

function displayGuess(guessValue){
    userInput.value = ''
    guessSlot.innerHTML += `${guessValue} `
    numGuess++
    remaining.innerHTML = `${11- numGuess}`

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random()*100 +1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = '10'
        userInput.removeAttribute('disabled')
        startOver.removeChild(p1)
        lowOrHigh.innerHTML = ''
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p1.classList.add('button');
    p1.innerHTML = `<h2 id='newGame'>Start new game</h2>`
    startOver.appendChild(p1)
    playGame = false
    newGame()
}