"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feast = void 0;
function feast(beast, dish) {
    return (beast.split('').pop() === dish.split('').pop() &&
        beast.split('').shift() === dish.split('').shift());
}
exports.feast = feast;
