// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.remove('flex')
//     homeScreen.classList.add('hidden')
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function continueGame(){
    // Step-1 generate a random alphabet
    const alphabet = getARandomAlphabet()
    const screen = document.getElementById('screen')
    screen.innerText = alphabet
    setBGColor(alphabet)
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

