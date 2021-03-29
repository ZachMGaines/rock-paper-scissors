export function jankan() {
    const randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) return 'rock';
    if (randomNumber === 2) return 'scissors';
    if (randomNumber === 3) return 'paper';
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