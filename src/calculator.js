// calculator.js
//
// Core arithmetic logic for the Node.js CLI calculator.
// Supports the four basic math operations shown on the calculator image:
//   - Addition       (+)
//   - Subtraction     (-)
//   - Multiplication  (x)
//   - Division        (÷)

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

module.exports = { add, subtract, multiply, divide };
