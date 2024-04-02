"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotations = void 0;
function rotations(diceArray) {
    let result = [0];
    for (let i = 0; i <= diceArray.length; i++) {
        result[i] = 0;
        diceArray.forEach((el) => {
            result[i] +=
                diceArray[i] === el ? 0 : diceArray[i] + el === 7 ? 2 : 1;
        });
    }
    return Math.min(...result);
}
exports.rotations = rotations;
