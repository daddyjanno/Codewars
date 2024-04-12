"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestPlanet = void 0;
const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];
function bestPlanet(solarSystem, maxSize) {
    var _a;
    // create object for each planet
    let arrayOfPlanets = solarSystem.map((p) => {
        const [elements, size] = p.split('_');
        return {
            display: p,
            elements: elements.split(/(?=[A-Z])/),
            size: Number(size),
        };
    });
    return ((_a = arrayOfPlanets
        // filter on planet size
        .filter((p) => p.size <= maxSize)
        //filter planets that had every elements
        .filter((p) => REQUIRED_ELEMENTS.filter((el) => !p.elements.includes(el))
        .length === 0)
        //sort by size desc
        .sort((a, b) => b.size - a.size)
        // return first element or ""
        .map((p) => p.display)[0]) !== null && _a !== void 0 ? _a : '');
}
exports.bestPlanet = bestPlanet;
