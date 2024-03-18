"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = void 0;
// export function quarterOf(month: number): number {
//     return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
// }
function quarterOf(month) {
    return Math.ceil(month / 3);
}
exports.quarterOf = quarterOf;
