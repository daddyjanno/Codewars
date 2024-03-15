"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.between = void 0;
function between(a, b) {
    let array = [];
    let i = a;
    do {
        array.push(i);
        i++;
    } while (i <= b);
    return array;
}
exports.between = between;
