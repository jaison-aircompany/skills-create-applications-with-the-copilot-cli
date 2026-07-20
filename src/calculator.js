// calculator.js
//
// Core arithmetic logic for the Node.js CLI calculator.
// Supports the four basic math operations shown on the calculator image:
//   - Addition       (+)
//   - Subtraction     (-)
//   - Multiplication  (x)
//   - Division        (÷)
// Plus the following advanced operations:
//   - Modulo          (%)
//   - Exponentiation  (^)
//   - Square root

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Handles division-by-zero gracefully by throwing a descriptive error
 * instead of returning Infinity/NaN.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient of a and b.
 * @throws {Error} If b is 0.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Returns the remainder of dividing the first number by the second.
 * Handles division-by-zero gracefully by throwing a descriptive error.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The remainder of a divided by b.
 * @throws {Error} If b is 0.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

/**
 * Raises a base number to the given exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base to.
 * @returns {number} The result of base raised to exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Computes the square root of a number.
 * Handles negative input gracefully by throwing a descriptive error,
 * since the square root of a negative number is not a real number.
 * @param {number} n - The number to compute the square root of.
 * @returns {number} The square root of n.
 * @throws {Error} If n is negative.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not supported.');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
