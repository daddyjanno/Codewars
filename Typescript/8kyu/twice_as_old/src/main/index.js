"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twiceAsOld = void 0;
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let array = [];
    for (let i = 0; i <= dadYearsOld; i++) {
        array.push(i);
    }
    return Number(array
        .filter((num) => dadYearsOld + num === (sonYearsOld + num) * 2 ||
        dadYearsOld - num === (sonYearsOld - num) * 2)
        .join());
}
exports.twiceAsOld = twiceAsOld;
