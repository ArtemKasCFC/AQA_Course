'use strict';

function solveQuadraticEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) return 'The equation has no real roots';

  if (discriminant === 0) return `The equation has one real root - ${(-b + Math.sqrt(discriminant)) / (2 * a)}`;

  if (discriminant > 0)
    return `The equation has two real roots - ${(-b + Math.sqrt(discriminant)) / (2 * a)} and ${
      (-b - Math.sqrt(discriminant)) / (2 * a)
    }`;
}

console.log(solveQuadraticEquation(1, -6, 9));
console.log(solveQuadraticEquation(1, -4, -5));
