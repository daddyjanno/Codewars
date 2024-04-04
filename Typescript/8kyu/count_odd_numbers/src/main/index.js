"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddCount = void 0;
function oddCount(n) {
    return Math.floor(n / 2);
}
exports.oddCount = oddCount;
// export function oddCount(n: number): number {
//     let count = 0
//     for (let i = n - 1; i > 0; i--) {
//         i % 2 !== 0 ? (count += 1) : count
//     }
//     return count
// }
