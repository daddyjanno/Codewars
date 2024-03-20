"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feast = void 0;
// export function feast(beast: string, dish: string): boolean {
//     return (
//         beast.split('').pop() === dish.split('').pop() &&
//         beast.split('').shift() === dish.split('').shift()
//     )
// }
function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}
exports.feast = feast;
