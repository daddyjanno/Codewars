"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeStrings = void 0;
function mergeStrings(first, second) {
    if (first === second) {
        return first;
    }
    for (let i = first.length; i > 0; i--) {
        if (first.slice(-i) === second.slice(0, i)) {
            return first + second.slice(i);
        }
    }
    return first + second;
}
exports.mergeStrings = mergeStrings;
