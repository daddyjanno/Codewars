"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = exports.min = void 0;
function min(list) {
    return list.length > 1 ? list.sort()[0] : list[0];
}
exports.min = min;
function max(list) {
    return list.length > 1
        ? list.sort((a, b) => b - a)[0]
        : list[0];
}
exports.max = max;
