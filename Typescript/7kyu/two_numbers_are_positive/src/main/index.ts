export function twoArePositive(a: number, b: number, c: number): boolean {
    let array = [a, b, c]
    let result = array.filter((el) => el > 0)
    return result.length === 2
}
