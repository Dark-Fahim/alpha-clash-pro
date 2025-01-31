// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.remove('flex')
//     homeScreen.classList.add('hidden')
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }
const finalScoreBoard = document.getElementById('score-board')
document.addEventListener('keyup', function (event) {
    const alphabet = document.getElementById('screen').innerText.toLowerCase()
    const playerPressed = event.key.toLowerCase()
    console.log(playerPressed)
    if(playerPressed === 'escape'){
        gameOver()
    }
    // console.log('button pressed', playerPressed, alphabet)
    if (playerPressed === alphabet) {
        // const CurrentdisplayScore = document.getElementById('score')
        // const oldScore = parseInt(CurrentdisplayScore.innerText)
        const oldScore = getTextElelementById('score')
        const newScore = oldScore + 1
        setValueById('score', newScore)
        removeBGColor(alphabet)
        continueGame()
    }
    else {
        // const displayLife = document.getElementById('life')
        // const oldLife = parseInt(displayLife.innerText)
        const oldLife =  getTextElelementById('life')
        const newLife = oldLife - 1
        setValueById('life', newLife)
        if (newLife === 0) {
            gameOver()
            
        }
        
    }
})

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    const CurrentdisplayScore = document.getElementById('score')
    finalScoreBoard.innerText = CurrentdisplayScore.innerText
    const alphabet = getElemenTextById('screen').toLowerCase()
    removeBGColor(alphabet)
}


function continueGame() {
    // Step-1 generate a random alphabet
    const alphabet = getARandomAlphabet()
    const screen = document.getElementById('screen')
    screen.innerText = alphabet
    setBGColor(alphabet)
}

function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    // reset life and score
    setValueById('life', 5)
    setValueById('score', 0)
    continueGame()
}

function playAgain() {
    showElementById('home-screen')
    
}

