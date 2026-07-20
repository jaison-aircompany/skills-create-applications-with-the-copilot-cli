#!/usr/bin/env node
// index.js
//
// CLI entry point for the Node.js calculator app.
// Usage: node src/index.js <number> <operation> [<number>]
//   Binary operations (require two operands):
//     + (add), - (subtract), * (multiply), / (divide),
//     % (modulo), ^ (power / exponentiation)
//   Unary operations (require one operand):
//     sqrt (square root)

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require('./calculator');

// Map supported CLI symbols/aliases to their calculator functions.
const binaryOperations = {
  '+': add,
  add: add,
  '-': subtract,
  subtract: subtract,
  '*': multiply,
  x: multiply,
  multiply: multiply,
  '/': divide,
  divide: divide,
  '%': modulo,
  mod: modulo,
  modulo: modulo,
  '^': power,
  pow: power,
  power: power,
};

// Unary operations only need a single operand.
const unaryOperations = {
  sqrt: squareRoot,
  squareRoot: squareRoot,
};

function printUsage() {
  console.log('Usage: node src/index.js <number> <operation> [<number>]');
  console.log(
    'Binary operations: + (add), - (subtract), * (multiply), / (divide), % (modulo), ^ (power)'
  );
  console.log('Unary operations: sqrt (square root) — e.g. node src/index.js 9 sqrt');
}

function main() {
  const [, , rawA, op, rawB] = process.argv;

  if (rawA === undefined || op === undefined) {
    printUsage();
    process.exit(1);
  }

  const a = Number(rawA);

  if (Number.isNaN(a)) {
    console.error('Error: Operand must be a valid number.');
    process.exit(1);
  }

  const unaryOperation = unaryOperations[op];
  const binaryOperation = binaryOperations[op];

  try {
    if (unaryOperation) {
      const result = unaryOperation(a);
      console.log(result);
      return;
    }

    if (binaryOperation) {
      if (rawB === undefined) {
        console.error(`Error: Operation "${op}" requires two operands.`);
        printUsage();
        process.exit(1);
      }

      const b = Number(rawB);
      if (Number.isNaN(b)) {
        console.error('Error: Both operands must be valid numbers.');
        process.exit(1);
      }

      const result = binaryOperation(a, b);
      console.log(result);
      return;
    }

    console.error(`Error: Unsupported operation "${op}".`);
    printUsage();
    process.exit(1);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
