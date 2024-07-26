const calculator = require('../calculator');

test('using the calculator to make some calculations', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.multiply(4, 3)).toBe(12);

    // wrong answers
    expect(calculator.add(1, 3)).toBe(5);
    expect(calculator.subtract(1, 3)).toBe(2);
});