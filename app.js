// import functions and grab DOM elements
import { whoWin, jankan } from '../utils.js';
// initialize state
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('you-win');
const loseEl = document.getElementById('you-lose');
const tie = document.getElementById('tie');




let wins = 0;
let ties = 0;
let losses = 0;


// set event listeners to update state and DOMdsfds
buttonEl.addEventListener('click', () => {

    const computerGuess = jankan();
    const radioInput = document.querySelector('input:checked');
    const userThrow = radioInput.value;
    const throwResults = whoWin(userThrow, computerGuess);
    const reset = document.querySelector('#reset');

    if (throwResults === 'win') {
        wins++;
        //wins = wins + 1;
        //wins+=1 These are the same thing.
        whoWonEl.textContent = wins;

    }
    if (throwResults === 'tie') {
        ties++;
        tie.textContent = ties;
    }
    if (throwResults === 'loss') {
        losses++;
        losses = losses + 1;
        loseEl.textContent = losses;
    }


    reset.addEventListener('click', () => {
        ties = 0;
        losses = 0;
        wins = 0;
        whoWonEl.textContent = wins;
        tie.textContent = ties;
        loseEl.textContent = losses;
    });

    /*whoLoseDiv.textContent = losses++;
    whoTieDiv.textContent = ties++; */



});