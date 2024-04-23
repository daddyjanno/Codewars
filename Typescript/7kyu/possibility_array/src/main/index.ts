export function isAllPossibilities(x: number[]): boolean {
    let result: boolean[] = []
    for (let i = 0; i < x.length; i++) {
        result.push(x.includes(i))
    }
    return result.every((el) => el === true)
}
