"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxIntChain = void 0;
function maxIntChain(n) {
    let result = [];
    if (n < 5) {
        return -1;
    }
    for (let i = 1; i < n / 2; i++) {
        if ((n - i) * i && n - i !== i) {
            result.push((n - i) * i);
        }
        console.log(result);
    }
    return result.sort((a, b) => b - a)[0];
}
exports.maxIntChain = maxIntChain;
