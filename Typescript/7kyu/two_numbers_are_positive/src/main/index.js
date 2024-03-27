"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoArePositive = void 0;
function twoArePositive(a, b, c) {
    let array = [a, b, c];
    let result = array.filter((el) => el > 0);
    return result.length === 2;
}
exports.twoArePositive = twoArePositive;
