export function expressionsMatter(a: number, b: number, c: number): number {
    let result: number[] = []

    result.push(
        a + b + c,
        a * b * c,
        a + b * c,
        a * b + c,
        (a + b) * c,
        a * (b + c)
    )

    return Math.max(...result)
}
