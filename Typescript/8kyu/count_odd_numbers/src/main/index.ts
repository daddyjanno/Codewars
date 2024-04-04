export function oddCount(n: number): number {
    let count = 0
    for (let i = n - 1; i > 0; i--) {
        i % 2 !== 0 ? (count += 1) : count
    }
    return count
}
