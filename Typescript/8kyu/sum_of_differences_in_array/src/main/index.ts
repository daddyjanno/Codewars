export function sumOfDifferences(arr: number[]): number {
    if (arr.length < 2) {
        return 0
    } else {
        let sum = 0
        arr.sort((a: number, b: number) => b - a)
        for (let i = 0; i < arr.length - 1; i++) {
            sum += arr[i] - arr[i + 1]
        }
        return sum
    }
}
