"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = void 0;
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
        ? true
        : false;
}
exports.isLeapYear = isLeapYear;
// export function isLeapYear(year: number): boolean {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true
//             }
//             return false
//         }
//         return true
//     }
//     return false
// }
