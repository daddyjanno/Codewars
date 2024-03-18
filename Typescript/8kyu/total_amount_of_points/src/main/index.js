"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.points = void 0;
function points(games) {
    const score = [];
    games.map((game) => {
        Number(game.split(':')[0]) < Number(game.split(':')[1])
            ? score.push(0)
            : Number(game.split(':')[0]) > Number(game.split(':')[1])
                ? score.push(3)
                : score.push(1);
    });
    return score.reduce((acc, curr) => acc + curr, 0);
}
exports.points = points;
