"use strict";
// export function arrayPlusArray(arr1: number[], arr2: number[]): number {
//     return (
//         arr1.reduce((curr, acc) => curr + acc) +
//         arr2.reduce((curr, acc) => curr + acc)
//     )
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPlusArray = void 0;
// export function arrayPlusArray(arr1: number[], arr2: number[]): number {
//     return [...arr1, ...arr2].reduce((curr, acc) => curr + acc)
// }
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((curr, acc) => curr + acc);
}
exports.arrayPlusArray = arrayPlusArray;
