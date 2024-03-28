"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
function* range(start = 0, stop, step = 1) {
    for (let i = start; stop == undefined || i < stop; i += step) {
        yield i;
    }
}
exports.range = range;
