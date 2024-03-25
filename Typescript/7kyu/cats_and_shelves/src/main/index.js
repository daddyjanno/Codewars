"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(start, finish) {
    let diff = finish - start;
    return Math.floor(diff / 3) + (diff % 3);
}
exports.solution = solution;
