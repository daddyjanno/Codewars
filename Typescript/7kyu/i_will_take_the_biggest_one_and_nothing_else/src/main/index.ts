export function maxIntChain(n: number): number {
    let result: number[] = []
    if (n < 5) {
        return -1
    }
    for (let i = 1; i < n / 2; i++) {
        if ((n - i) * i && n - i !== i) {
            result.push((n - i) * i)
        }
        console.log(result)
    }
    return result.sort((a: number, b: number) => b - a)[0]
}
