// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getComputersThrow } from '../utils.js';

const test = QUnit.test;

test('If i have rock that should equal 1', (expect) => {
    const expected = 'rock';


    const actual = getComputersThrow(1);


    expect.equal(actual, expected);
});
