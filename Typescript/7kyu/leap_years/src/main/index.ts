export function isLeapYear(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
        ? true
        : false
}
// export function isLeapYear(year: number): boolean {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true
//             }
//             return false
//         }
//         return true
//     }
//     return false
// }
