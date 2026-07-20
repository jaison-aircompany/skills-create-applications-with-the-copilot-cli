#!/usr/bin/env node
// index.js
//
// CLI entry point for the Node.js calculator app.
// Usage: node src/index.js <number> <operation> <number>
//   operation can be: +, -, *, / (or add, subtract, multiply, divide)

const { add, subtract, multiply, divide } = require('./calculator');

// Map supported CLI symbols/aliases to their calculator functions.
const operations = {
  '+': add,
  add: add,
  '-': subtract,
  subtract: subtract,
  '*': multiply,
  x: multiply,
  multiply: multiply,
  '/': divide,
  divide: divide,
};

function printUsage() {
  console.log('Usage: node src/index.js <number> <operation> <number>');
  console.log('Operations: + (add), - (subtract), * (multiply), / (divide)');
}

function main() {
  const [, , rawA, op, rawB] = process.argv;

  if (rawA === undefined || op === undefined || rawB === undefined) {
    printUsage();
    process.exit(1);
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  const operation = operations[op];
  if (!operation) {
    console.error(`Error: Unsupported operation "${op}".`);
    printUsage();
    process.exit(1);
  }

  try {
    const result = operation(a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
