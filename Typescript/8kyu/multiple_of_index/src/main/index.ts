export function multipleOfIndex(array: number[]): number[] {
    let result: number[] = []
    if (array[0] === 0) {
        result.push(array[0])
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            result.push(array[i])
        }
    }

    return result
}
