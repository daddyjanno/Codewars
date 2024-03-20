"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
function centuryFromYear(year) {
    const yearsString = year.toString();
    let years = parseInt(yearsString.slice(-2));
    let century = parseInt(yearsString.replace(yearsString.slice(-2), ''));
    return years === 0 ? century : century + 1;
}
exports.centuryFromYear = centuryFromYear;
