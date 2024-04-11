"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestPlanet = void 0;
const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];
function bestPlanet(solarSystem, maxSize) {
    let result = [];
    solarSystem.forEach((planet) => {
        if (REQUIRED_ELEMENTS.every((el) => planet.includes(el)))
            result.push(planet);
    });
    result.filter((el) => Number(el.split('_')[1]) >= maxSize);
    return String(result.sort().pop());
}
exports.bestPlanet = bestPlanet;
