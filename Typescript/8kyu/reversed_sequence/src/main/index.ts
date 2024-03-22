export function reverseSequence(num: number): number[] {
    let result: number[] = []
    for (let i = num; i > 0; i--) {
        result.push(i)
    }
    return result
}
