function hideElementById (elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBGColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBGColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElelementById(id){
    const element = document.getElementById(id)
    const value = parseInt(element.innerText)
    return value
}
function setValueById(id, value){
    const element = document.getElementById(id)
    element.innerText = value
}

function getElemenTextById(id){
    const element = document.getElementById(id).innerText
    return element
    
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetSting = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSting.split('')

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index];
    return alphabet
}