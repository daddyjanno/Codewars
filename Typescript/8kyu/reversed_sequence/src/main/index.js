"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseSequence = void 0;
function reverseSequence(num) {
    let result = [];
    for (let i = num; i > 0; i--) {
        result.push(i);
    }
    return result;
}
exports.reverseSequence = reverseSequence;
