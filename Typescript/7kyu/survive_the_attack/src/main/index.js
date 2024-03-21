"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSurvived = void 0;
function hasSurvived(attackers, defenders) {
    let att = {
        survivors: 0,
        power: attackers.length
            ? attackers.reduce((curr, acc) => curr + acc)
            : 0,
    };
    let def = {
        survivors: 0,
        power: defenders.length
            ? defenders.reduce((curr, acc) => curr + acc)
            : 0,
    };
    const length = attackers.length > defenders.length
        ? attackers.length
        : defenders.length;
    for (let i = 0; i < length; i++) {
        if (!attackers[i]) {
            def.survivors = def.survivors + 1;
        }
        else if (!defenders[i]) {
            att.survivors = att.survivors + 1;
        }
        else if (attackers[i] > defenders[i]) {
            att.survivors = att.survivors + 1;
        }
        else if (attackers[i] < defenders[i]) {
            def.survivors = def.survivors + 1;
        }
    }
    if (att.survivors < def.survivors) {
        return true;
    }
    else if (att.survivors > def.survivors) {
        return false;
    }
    else if (att.power > def.power) {
        return false;
    }
    else {
        return true;
    }
}
exports.hasSurvived = hasSurvived;
