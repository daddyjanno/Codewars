"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validParentheses = void 0;
function validParentheses(str) {
    if (str === '')
        return true;
    if (str.length % 2 !== 0)
        return false;
}
exports.validParentheses = validParentheses;
