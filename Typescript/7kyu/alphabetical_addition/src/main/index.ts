// let table = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
// ]
// export function addLetters(...letters: string[]): string {
//     if (!letters.length) {
//         return 'z'
//     }
//     let numbersArray = []

//     for (let i = 0; i < letters.length; i++) {
//         numbersArray.push(table.indexOf(letters[i]) + 1)
//     }

//     let result = numbersArray.reduce((curr, acc) => curr + acc, 0)
//     console.log(result, result % 26)

//     return result % 26 === 0 && result < 27
//         ? table[result - 1]
//         : result % 26 === 0
//         ? 'z'
//         : table[(result % 26) - 1]
// }
export function addLetters(...letters: string[]): string {
    return String.fromCharCode(
        (letters.reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0) % 26 ||
            26) + 96
    )
}
