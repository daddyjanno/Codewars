"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllPossibilities = void 0;
function isAllPossibilities(x) {
    if (x.length === 0) {
        return false;
    }
    return x.sort((a, b) => a - b).every((el, index) => el === index);
}
exports.isAllPossibilities = isAllPossibilities;
// export function isAllPossibilities(x: number[]): boolean {
//     let result: boolean[] = []
//     for (let i = 0; i < x.length; i++) {
//         result.push(x.includes(i))
//     }
//     return result.every((el) => el === true)
// }
