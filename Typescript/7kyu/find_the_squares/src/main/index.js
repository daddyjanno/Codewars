"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTheSquare = void 0;
function findTheSquare(num) {
    // find the smaller consecutive square
    const smallerSquare = Math.floor(num / 2);
    console.log(smallerSquare);
    // find the biggest square
    const biggerSquare = num - smallerSquare;
    console.log(biggerSquare);
    return `${biggerSquare ** 2}-${smallerSquare ** 2}`;
}
exports.findTheSquare = findTheSquare;
