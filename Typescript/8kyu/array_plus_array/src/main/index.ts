export function arrayPlusArray(arr1: number[], arr2: number[]): number {
    return (
        arr1.reduce((curr, acc) => curr + acc) +
        arr2.reduce((curr, acc) => curr + acc)
    )
}
