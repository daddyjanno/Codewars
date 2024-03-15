"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
function sumArray(array) {
    return array
        ? array
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((acc, curr) => curr + acc, 0)
        : 0;
}
exports.sumArray = sumArray;
