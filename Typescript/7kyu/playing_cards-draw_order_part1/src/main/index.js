"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw = void 0;
function draw(deck) {
    let result = [];
    while (deck.length) {
        result.push(deck[0]);
        deck.shift();
        deck.push(deck[0]);
        deck.shift();
    }
    return result;
}
exports.draw = draw;
