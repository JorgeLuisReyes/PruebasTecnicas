function fizzbuzz(num) {

    const divisible = (divisor, num) => num % divisor === 0;

    if (typeof num !== 'number') {
        return 'Error: el argumento debe ser un numero.';
    }
    if (num === 0) {
        return 0;
    }
    if (divisible(3, num) && divisible(5, num)) {
        return 'fizzbuzz';
    }
    if (divisible(3, num)) {
        return 'fizz';
    }
    if (divisible(5, num)) {
        return 'buzz';
    }
    return num;
}

function print(num) {
    for (var i = 0; i < num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(50);

module.exports = fizzbuzz;