// import functions and grab DOM elements
import { whoWin, jankan } from '../utils.js';
// initialize state
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('you-win');
const loseEl = document.getElementById('you-lose');
const tie = document.getElementById('tie');

const radioInput = document.querySelector('input:checked');


let wins = 0;
let ties = 0;
let losses = 0;


// set event listeners to update state and DOMdsfds
buttonEl.addEventListener('click', () => {
    let randomNumber = Math.ceil(Math.random() * 3);
    let actualGuess = jankan(randomNumber);
    const whoWonDiv = document.querySelector('#you-win');
    const whoTieDiv = document.querySelector('#tie');
    const whoLoseDiv = document.querySelector('#you-lose');

    if (actualGuess) {
        return whoWonDiv.textContent = wins++;


        /*whoLoseDiv.textContent = losses++;
        whoTieDiv.textContent = ties++; */

        console.log(actualGuess);

    });