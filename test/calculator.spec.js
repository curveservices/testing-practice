const calculator = require('../code/calculator')

test('should add 2 numbers together', () => {
    expect(calculator.add(2,2)).toBe(4);
})

test('should minus 2 numbers', () => {
    expect(calculator.minus(5,3)).toBe(2);
});

test('should divde 2 numbers', () => {
    expect(calculator.divde(10,2)).toBe(5);
});

test('should multiply 2 numbers', () => {
    expect(calculator.multiply(3,6)).toBe(18);
})






