function judgeNumber(number) {
    const numbers = number.toString().split('');
    const includeFirstNumber = numbers.find(n => n === '3');
    if (includeFirstNumber) {
        return 'Fizz';
    }
    let result = '';
    if (number % 3 === 0) {
        result += 'Fizz';
    }
    if (number % 5 === 0) {
        result += 'Buzz';
    }
    if (number % 7 === 0) {
        result += 'Whizz';
    }
    if (result === '') {
        result = number;
    }
    return result;
}

module.exports = {
    judgeNumber
};