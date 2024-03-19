"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfDifferences = void 0;
function sumOfDifferences(arr) {
    if (arr.length < 2) {
        return 0;
    }
    else {
        let sum = 0;
        let sorted = arr.sort((a, b) => b - a);
        for (let i = 0; i < sorted.length - 1; i++) {
            sum += sorted[i] - sorted[i + 1];
        }
        return sum;
    }
}
exports.sumOfDifferences = sumOfDifferences;
