"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLetters = void 0;
let table = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
function addLetters(...letters) {
    if (!letters.length) {
        console.log('no args');
        return 'z';
    }
    let numbersArray = [];
    for (let i = 0; i < letters.length; i++) {
        numbersArray.push(table.indexOf(letters[i]) + 1);
    }
    let result = numbersArray.reduce((curr, acc) => curr + acc, 0);
    return result <= 26 ? table[result - 1] : table[(result % 26) - 1];
}
exports.addLetters = addLetters;
