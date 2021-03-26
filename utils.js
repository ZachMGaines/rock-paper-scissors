/*export function getComputersThrow() {
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
} */
export function jankan(someNumber) {
    if (someNumber === 1) return 'rock';
    if (someNumber === 2) return 'scissors';

    return 'paper';
}
export function whoWin(user, computer) {
    if (user === 'rock' && computer === 'rock') {
        return 'tie';
    } else if (user === 'paper' && computer === 'paper') {
        return 'tie';
    } else if (user === 'scissors' && computer === 'scissors') {
        return 'tie';
    } else if (user === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (user === 'paper' && computer === 'rock') {
        return 'win';
    } else if (user === 'scissors' && computer === 'paper') {
        return 'win';
    } else return 'loss';
}



