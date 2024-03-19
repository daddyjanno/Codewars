"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravityFlip = void 0;
function gravityFlip(dir, arr) {
    console.log(arr.sort((a, b) => a - b));
    return dir === 'R'
        ? arr.sort((a, b) => a - b)
        : arr.sort((a, b) => a - b).reverse();
}
exports.gravityFlip = gravityFlip;
