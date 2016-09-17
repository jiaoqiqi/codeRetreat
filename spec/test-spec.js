"use strict";

const main = require('../src/number-off');

describe('numberOff', () => {

    it(' it can make one number multiple ', () => {
        const numbers = [1, 2, 3, 5, 7,30, 13, 23, 35,3, 5, 7, 15, 21, 35, 105];
        const expectOutputs = [1, 2, 'Fizz', 'Buzz', 'Whizz','Fizz','Fizz','Fizz','Fizz','Fizz', 'Buzz', 'Whizz', 'FizzBuzz', 'FizzWhizz', 'Fizz', 'FizzBuzzWhizz'];
        for (let i = 0; i < numbers.length; i++) {
            const output = main.judgeNumber(numbers[i]);
            expect(output).toEqual(expectOutputs[i]);
        }
    });
});