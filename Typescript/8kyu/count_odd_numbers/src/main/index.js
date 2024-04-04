"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddCount = void 0;
function oddCount(n) {
    let count = 0;
    for (let i = n - 1; i > 0; i--) {
        i % 2 !== 0 ? (count += 1) : count;
    }
    return count;
}
exports.oddCount = oddCount;
