// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { whoWin } from '../utils.js';

const test = QUnit.test;

test('If i have rock and computer has paper', (expect) => {
    const expected = 'loss';
    const actual = whoWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('If i have rock and computer has rock, we should tie', (expect) => {
    const expected = 'tie';
    const actual = whoWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('If i have rock and computer has scissors, user should win', (expect) => {
    const expected = 'win';
    const actual = whoWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('If i have paper and computer has rock, user should win', (expect) => {
    const expected = 'win';
    const actual = whoWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('If i have paper and computer has paper, user should win', (expect) => {
    const expected = 'tie';
    const actual = whoWin('paper', 'paper');
    expect.equal(actual, expected);
});

test('If i have paper and computer has scissors, user should lose', (expect) => {
    const expected = 'loss';
    const actual = whoWin('paper', 'scissors');
    expect.equal(actual, expected);
});

