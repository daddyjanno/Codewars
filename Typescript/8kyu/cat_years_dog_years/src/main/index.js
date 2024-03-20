"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catYearsdogYears = void 0;
function catYearsdogYears(years) {
    let catYears = 0;
    let dogYears = 0;
    if (years < 2) {
        catYears = 15;
        dogYears = 15;
    }
    else if (years < 3) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
    else {
        catYears = 15 + 9 + (years - 2) * 4;
        dogYears = 15 + 9 + (years - 2) * 5;
    }
    return [years, catYears, dogYears];
}
exports.catYearsdogYears = catYearsdogYears;
