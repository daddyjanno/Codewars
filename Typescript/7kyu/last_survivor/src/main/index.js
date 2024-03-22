"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastSurvivor = void 0;
function lastSurvivor(letters, coords) {
    let lettersLeft = letters.split('');
    for (let i = 0; i < coords.length; i++) {
        lettersLeft.splice(coords[i], 1).join();
    }
    return lettersLeft.join();
}
exports.lastSurvivor = lastSurvivor;
