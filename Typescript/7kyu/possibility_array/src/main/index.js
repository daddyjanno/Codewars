"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllPossibilities = void 0;
function isAllPossibilities(x) {
    let result = [];
    for (let i = 0; i < x.length - 1; i++) {
        result.push(x.includes(i));
    }
    return result.every((el) => el === true);
}
exports.isAllPossibilities = isAllPossibilities;
