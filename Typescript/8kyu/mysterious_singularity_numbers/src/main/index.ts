export function realNumbers(n: number): number {
    return Array.from({ length: n }, (n: number, i) => i + 1).filter(
        (el: number) => el % 2 !== 0 && el % 3 !== 0 && el % 5 !== 0
    ).length
}
