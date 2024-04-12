"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
function triangle(row) {
    let letters = row.split('');
    let codes = letters.map((letter) => letter.charCodeAt(0) - 64);
    while (codes.length > 1) {
        for (let i = 0; i < codes.length; i++) {
            if (codes[i + 1] !== undefined) {
                codes[i] = codes[i] + codes[i + 1];
            }
        }
        codes.pop();
        console.log(codes);
    }
    return String.fromCharCode(codes[0] + 64);
}
exports.triangle = triangle;
