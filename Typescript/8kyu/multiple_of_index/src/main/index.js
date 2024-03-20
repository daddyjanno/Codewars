"use strict";
// export function multipleOfIndex(array: number[]): number[] {
//     let result: number[] = []
//     if (array[0] === 0) {
//         result.push(array[0])
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % i === 0) {
//             result.push(array[i])
//         }
//     }
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleOfIndex = void 0;
//     return result
// }
// export function multipleOfIndex(array: number[]): number[] {
//     return array.filter(
//         (value: number, index: number) => value % index === 0 || !value
//     )
// }
function multipleOfIndex(array) {
    return array.filter((x, idx) => x % idx === 0 || x === idx);
}
exports.multipleOfIndex = multipleOfIndex;
