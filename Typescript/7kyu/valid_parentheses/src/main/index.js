"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validParentheses = void 0;
function validParentheses(str) {
    let newStr = str;
    if (str === '')
        return true;
    if (str.length % 2 !== 0) {
        return false;
    }
    else {
        for (let i = 1; i <= str.length; i++) {
            newStr = newStr.replace('()', '');
            if (!newStr.length) {
                return true;
            }
        }
        return newStr.length ? false : true;
    }
}
exports.validParentheses = validParentheses;
