export function between(a: number, b: number): number[] {
    let array = []
    let i = a
    do {
        array.push(i)
        i++
    } while (i <= b)
    return array
}
