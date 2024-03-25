"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxIntChain = void 0;
function maxIntChain(n) {
    return n < 5 ? -1 : Math.floor(n / 2 + 1) * Math.ceil(n / 2 - 1);
}
exports.maxIntChain = maxIntChain;
