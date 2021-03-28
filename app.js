// import functions and grab DOM elements
import { whoWin, jankan } from '../utils.js';
// initialize state
const buttonEl = document.getElementById('guess-button');
const whoWonEl = document.getElementById('you-win');
const loseEl = document.getElementById('you-lose');
const tie = document.getElementById('tie');
const resetEl = document.getElementById('reset');
const resetCountEl = document.getElementById('reset-counter');
let wins = 0;
let ties = 0;
let losses = 0;
let reset = 0;

buttonEl.addEventListener('click', () => {
    const computerGuess = jankan();
    const radioInput = document.querySelector('input:checked');
    const userThrow = radioInput.value;
    const throwResults = whoWin(userThrow, computerGuess);

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
        loseEl.textContent = losses;
    }
});

resetEl.addEventListener('click', () => {
    reset++;
    ties = 0;
    losses = 0;
    wins = 0;
    whoWonEl.textContent = wins;
    tie.textContent = ties;
    loseEl.textContent = losses;
    resetCountEl.textContent = reset;
});
