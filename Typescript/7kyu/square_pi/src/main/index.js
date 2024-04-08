"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squarePi = void 0;
function squarePi(digit) {
    const arrayOfPI = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('');
    let result = 0;
    for (let i = 0; i < digit; i++) {
        result += Math.pow(+arrayOfPI[i], 2);
    }
    return Math.ceil(Math.sqrt(result));
}
exports.squarePi = squarePi;
