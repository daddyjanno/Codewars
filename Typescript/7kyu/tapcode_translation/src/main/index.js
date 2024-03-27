"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapCodeTranslation = void 0;
function tapCodeTranslation(text) {
    let lettersRow = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'J'],
        ['L', 'M', 'N', 'O', 'P'],
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z'],
    ];
    let result = '';
    const arr = [...text.toUpperCase()];
    console.log(arr);
    arr.map((el) => {
        if (el === 'K') {
            el = 'C';
        }
        for (let i = 0; i < lettersRow.length; i++) {
            for (let j = 0; j < lettersRow.length; j++) {
                if (lettersRow[i][j] === el) {
                    result += `${'.'.repeat(i + 1)} ${'.'.repeat(j + 1)} `;
                    break;
                }
            }
        }
        console.log(result);
    });
    return result.trim();
    // text.split('').forEach((letter) => {
    //     for (let i = 0; i < 5; i++) {
    //         if (letter.toUpperCase() === 'C' || letter.toUpperCase() === 'K') {
    //             return result.push('. ...')
    //         }
    //         if (lettersRow[i].includes(letter.toUpperCase())) {
    //             result.push('.'.repeat(i + 1))
    //         }
    //         lettersRow[i].forEach(function (col: string, index: number) {
    //             if (col === letter.toUpperCase()) {
    //                 result.push('.'.repeat(index + 1))
    //             }
    //         })
    //     }
    // })
    // return result.join(' ')
}
exports.tapCodeTranslation = tapCodeTranslation;
