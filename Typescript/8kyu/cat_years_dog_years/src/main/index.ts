// export function catYearsdogYears(years: number): number[] {
//     let catYears: number = 0
//     let dogYears: number = 0
//     if (years < 2) {
//         catYears = 15
//         dogYears = 15
//     } else if (years < 3) {
//         catYears = 15 + 9
//         dogYears = 15 + 9
//     } else {
//         catYears = 15 + 9 + (years - 2) * 4
//         dogYears = 15 + 9 + (years - 2) * 5
//     }
//     return [years, catYears, dogYears]
// }
export function catYearsdogYears(years: number): number[] {
    return [
        years,
        years === 1 ? 15 : 15 + 9 + (years - 2) * 4,
        years === 1 ? 15 : 15 + 9 + (years - 2) * 5,
    ]
}
