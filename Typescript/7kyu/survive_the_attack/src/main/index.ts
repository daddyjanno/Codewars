// export function hasSurvived(attackers: number[], defenders: number[]): boolean {
//     let att = {
//         survivors: 0,
//         power: attackers.length
//             ? attackers.reduce((curr, acc) => curr + acc)
//             : 0,
//     }
//     let def = {
//         survivors: 0,
//         power: defenders.length
//             ? defenders.reduce((curr, acc) => curr + acc)
//             : 0,
//     }
//     const length =
//         attackers.length > defenders.length
//             ? attackers.length
//             : defenders.length

//     for (let i = 0; i < length; i++) {
//         if (!attackers[i]) {
//             def.survivors = def.survivors + 1
//         } else if (!defenders[i]) {
//             att.survivors = att.survivors + 1
//         } else if (attackers[i] > defenders[i]) {
//             att.survivors = att.survivors + 1
//         } else if (attackers[i] < defenders[i]) {
//             def.survivors = def.survivors + 1à
//         }
//     }

//     if (att.survivors < def.survivors) {
//         return true
//     } else if (att.survivors > def.survivors) {
//         return false
//     } else if (att.power > def.power) {
//         return false
//     } else {
//         return true
//     }
// }

export function hasSurvived(attackers: number[], defenders: number[]): boolean {
    const attSurvivors = {
        survivors: attackers
            .map((el, i) => (defenders[i] ? el - defenders[i] : el))
            .filter((el) => el > 0),
        power: attackers.length
            ? attackers.reduce((curr, acc) => curr + acc)
            : 0,
    }

    const defSurvivors = {
        survivors: defenders
            .map((el, i) => (attackers[i] ? el - attackers[i] : el))
            .filter((el) => el > 0),
        power: defenders.length
            ? defenders.reduce((curr, acc) => curr + acc)
            : 0,
    }

    if (attSurvivors.survivors.length === defSurvivors.survivors.length) {
        return defSurvivors.power >= attSurvivors.power
    } else return defSurvivors.survivors.length >= attSurvivors.survivors.length
}
