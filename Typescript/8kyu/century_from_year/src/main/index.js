"use strict";
// export function centuryFromYear(year: number): number {
//     const yearsString = year.toString()
//     let years = parseInt(yearsString.slice(-2))
//     let century = parseInt(yearsString.replace(yearsString.slice(-2), ''))
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
//     return years === 0 ? century : century + 1
// }
function centuryFromYear(years) {
    return Math.ceil(years / 100);
}
exports.centuryFromYear = centuryFromYear;
