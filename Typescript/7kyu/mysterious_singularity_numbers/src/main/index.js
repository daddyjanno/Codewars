"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realNumbers = void 0;
function realNumbers(n) {
    return (n -
        (Math.floor(n / 2) +
            Math.floor(n / 3) +
            Math.floor(n / 5) -
            Math.floor(n / 6) -
            Math.floor(n / 10) -
            Math.floor(n / 15) +
            Math.floor(n / 30)));
}
exports.realNumbers = realNumbers;
