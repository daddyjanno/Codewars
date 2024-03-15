export function sumArray(array: number[] | null): number {
    return array
        ? array
              .sort((a: number, b: number) => a - b)
              .slice(1, -1)
              .reduce((acc, curr) => curr + acc, 0)
        : 0
}
