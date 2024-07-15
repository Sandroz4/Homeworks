import { GOLDEN_RATIO, SQRT2 } from './mathConstants.js';

const goldenRectangle = (shorterSide) => {
    return shorterSide * GOLDEN_RATIO;
};

const diagonalOfSquare = (side) => {
    return side * SQRT2;
};

console.log(`Length of the longer side of a golden rectangle with shorter side 10: ${goldenRectangle(10)}`)
console.log(`Diagonal of a square with side length 4: ${diagonalOfSquare(4)}`)
