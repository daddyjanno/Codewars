// export function multipleOfIndex(array: number[]): number[] {
//     let result: number[] = []
//     if (array[0] === 0) {
//         result.push(array[0])
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % i === 0) {
//             result.push(array[i])
//         }
//     }

//     return result
// }
// export function multipleOfIndex(array: number[]): number[] {
//     return array.filter(
//         (value: number, index: number) => value % index === 0 || !value
//     )
// }
export function multipleOfIndex(array: number[]): number[] {
    return array.filter((x: number, idx: number) => x % idx === 0 || x === idx)
}
