// calculator.test.js
//
// Unit tests for the calculator's four basic arithmetic operations:
// addition, subtraction, multiplication, and division.
// Includes example-based tests (from calc-basic-operations.png) and
// edge cases such as division by zero, negatives, and decimals.

const { add, subtract, multiply, divide } = require('../calculator');

describe('add', () => {
  // Example from calc-basic-operations.png: 2 + 3
  test('adds two positive numbers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a negative and a positive number', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });

  test('adding zero returns the other operand', () => {
    expect(add(0, 7)).toBe(7);
  });
});

describe('subtract', () => {
  // Example from calc-basic-operations.png: 10 - 4
  test('subtracts two positive numbers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracting a larger number yields a negative result', () => {
    expect(subtract(4, 10)).toBe(-6);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the original number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

describe('multiply', () => {
  // Example from calc-basic-operations.png: 45 * 2
  test('multiplies two positive numbers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(8, 0)).toBe(0);
  });

  test('multiplies two negative numbers (result is positive)', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number (result is negative)', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3);
  });
});

describe('divide', () => {
  // Example from calc-basic-operations.png: 20 / 5
  test('divides two positive numbers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero must be handled gracefully.
  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
});
