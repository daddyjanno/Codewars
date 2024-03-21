"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realNumbers = void 0;
function realNumbers(n) {
    return Array.from({ length: n }, (n, i) => i + 1).filter((el) => el % 2 !== 0 && el % 3 !== 0 && el % 5 !== 0).length;
}
exports.realNumbers = realNumbers;
