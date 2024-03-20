export function multiTable(number: number): string {
    let result = ''
    result += `1 * ${number} = ${1 * number}`
    for (let i = 2; i <= 10; i++) {
        result += `\n${i} * ${number} = ${i * number}`
    }
    return result
}
