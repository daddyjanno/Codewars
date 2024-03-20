"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiTable = void 0;
function multiTable(number) {
    let result = '';
    result += `1 * ${number} = ${1 * number}`;
    for (let i = 2; i <= 10; i++) {
        result += `\n${i} * ${number} = ${i * number}`;
    }
    return result;
}
exports.multiTable = multiTable;
