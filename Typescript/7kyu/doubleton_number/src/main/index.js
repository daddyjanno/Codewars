"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleton = void 0;
function doubleton(num) {
    while (true) {
        num++;
        if (new Set(String(num)).size === 2) {
            return num;
        }
    }
}
exports.doubleton = doubleton;
