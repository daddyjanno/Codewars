"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExam = void 0;
function checkExam(array1, array2) {
    let result = 0;
    for (let index = 0; index < array1.length; index++) {
        if (array2[index] === '') {
            continue;
        }
        if (array1[index] === array2[index]) {
            result += 4;
        }
        else
            result += -1;
    }
    return result >= 0 ? result : 0;
}
exports.checkExam = checkExam;
