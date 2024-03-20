// export function arrayPlusArray(arr1: number[], arr2: number[]): number {
//     return (
//         arr1.reduce((curr, acc) => curr + acc) +
//         arr2.reduce((curr, acc) => curr + acc)
//     )
// }

// export function arrayPlusArray(arr1: number[], arr2: number[]): number {
//     return [...arr1, ...arr2].reduce((curr, acc) => curr + acc)
// }

export function arrayPlusArray(arr1: number[], arr2: number[]): number {
    return arr1.concat(arr2).reduce((curr, acc) => curr + acc)
}
