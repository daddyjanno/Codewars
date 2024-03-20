// export function multiTable(number: number): string {
//     let result = ''
//     result += `1 * ${number} = ${1 * number}`
//     for (let i = 2; i <= 10; i++) {
//         result += `\n${i} * ${number} = ${i * number}`
//     }
//     return result
// }
export function multiTable(number: number): string {
    return Array.from(
        { length: 10 },
        (x, i) => `${i + 1} * ${number} = ${(i + 1) * number}`
    ).join('\n')
}
