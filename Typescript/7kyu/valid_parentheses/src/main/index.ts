export function validParentheses(str: string): boolean {
    if (str === '') return true
    if (str.length % 2 !== 0) return false
}
