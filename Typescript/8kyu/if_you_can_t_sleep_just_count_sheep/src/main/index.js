"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = void 0;
function countSheep(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
exports.countSheep = countSheep;
