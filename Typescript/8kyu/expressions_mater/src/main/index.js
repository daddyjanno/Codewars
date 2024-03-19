"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressionsMatter = void 0;
function expressionsMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, a + b * c, a * b + c, (a + b) * c, a * (b + c));
}
exports.expressionsMatter = expressionsMatter;
