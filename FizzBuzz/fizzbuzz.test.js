const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {

  test('Debe imprimir 1 si recive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test('Debe imprimir "fizz" si recive 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test('Debe imprimir "fizz" si recive un multiplo de 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test('Debe imprimir "buzz" si recive 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test('Debe imprimir "buzz" si recive un multiplo de 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test('Debe imprimir "fizzbuzz" si recive un multiplo de 3 y 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });

  test('Debe imprimir un mensaje de Error si el argumento no es un numero.', () => {
    const expected = 'Error: el argumento debe ser un numero.';
    const result = fizzbuzz('15');
    expect(expected).toBe(result);
  });

});
