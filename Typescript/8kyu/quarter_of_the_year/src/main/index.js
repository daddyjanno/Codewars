"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = void 0;
function quarterOf(month) {
    return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}
exports.quarterOf = quarterOf;
