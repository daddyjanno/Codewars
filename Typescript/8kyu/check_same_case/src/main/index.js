"use strict";
// export function sameCase(a: string, b: string): number {
//     const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
Object.defineProperty(exports, "__esModule", { value: true });
exports.sameCase = void 0;
//     if (
//         !lowerLetters.includes(a.toLowerCase()) ||
//         !lowerLetters.includes(b.toLowerCase())
//     ) {
//         return -1
//     } else if (
//         (lowerLetters.includes(a) && lowerLetters.includes(b)) ||
//         (lowerLetters.toUpperCase().includes(a) &&
//             lowerLetters.toUpperCase().includes(b))
//     ) {
//         return 1
//     } else return 0
// }
function isLetter(c) {
    console.log(c, /^[a-z]{1}/gi.test(c));
    return /^[a-z]/i.test(c);
}
function isLowerCase(c) {
    return /^[a-z]/.test(c);
}
function sameCase(a, b) {
    return !isLetter(a) || !isLetter(b)
        ? -1
        : isLowerCase(a) === isLowerCase(b)
            ? 1
            : 0;
}
exports.sameCase = sameCase;
