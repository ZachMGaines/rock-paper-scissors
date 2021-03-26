export function getComputersThrow() {
    let randomNumber = Math.ceil(Math.random()) * 3;
    let handShape;

    if (randomNumber === 1) {
        handShape = 'rock';
    }
    if (randomNumber === 2) {
        handShape = 'paper';
    }
    if (randomNumber === 3) {
        handShape = 'scissors';

    }
    return handShape;
}

export function whoWin(user, computer) {
    if (user === 'rock' && computer === 'rock') {
        return 'Tie!';
    } else if (user === 'paper' && computer === 'paper') {
        return 'Tie!';
    } else if (user === 'scissors' && computer === 'scissors') {
        return 'Tie!';
    } else if (user === 'rock' && computer === 'scissors') {
        return 'You Win!';
    } else if (user === 'paper' && computer === 'rock') {
        return 'You Win!';
    } else if (user === 'scissors' && computer === 'paper') {
        return 'You Win!';
    } else return 'You Lose!';
}



