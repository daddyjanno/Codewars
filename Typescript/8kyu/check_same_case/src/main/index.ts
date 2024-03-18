// export function sameCase(a: string, b: string): number {
//     const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'

//     if (
//         !lowerLetters.includes(a.toLowerCase()) ||
//         !lowerLetters.includes(b.toLowerCase())
//     ) {
//         return -1
//     } else if (
//         (lowerLetters.includes(a) && lowerLetters.includes(b)) ||
//         (lowerLetters.toUpperCase().includes(a) &&
//             lowerLetters.toUpperCase().includes(b))
//     ) {
//         return 1
//     } else return 0
// }

function isLetter(c: string): boolean {
    console.log(c, /^[a-z]{1}/gi.test(c))

    return /^[a-z]/i.test(c)
}
function isLowerCase(c: string): boolean {
    return /^[a-z]/.test(c)
}

export function sameCase(a: string, b: string): number {
    return !isLetter(a) || !isLetter(b)
        ? -1
        : isLowerCase(a) === isLowerCase(b)
        ? 1
        : 0
}
