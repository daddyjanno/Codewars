export function sumOfDifferences(arr: number[]): number {
    if (arr.length < 2) {
        return 0
    } else {
        let sum = 0
        let sorted = arr.sort((a: number, b: number) => b - a)
        for (let i = 0; i < sorted.length - 1; i++) {
            sum += sorted[i] - sorted[i + 1]
        }
        return sum
    }
}
