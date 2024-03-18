export function countSheep(n: number): string {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += `${i} sheep...`
    }
    return result
}
