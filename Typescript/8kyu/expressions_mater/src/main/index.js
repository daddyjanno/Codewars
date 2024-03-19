"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressionsMatter = void 0;
function expressionsMatter(a, b, c) {
    let result = [];
    result.push(a + b + c, a * b * c, a + b * c, a * b + c, (a + b) * c, a * (b + c));
    return Math.max(...result);
}
exports.expressionsMatter = expressionsMatter;
