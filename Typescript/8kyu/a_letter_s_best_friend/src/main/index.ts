// export function bestFriend(txt: string, a: string, b: string): boolean {
//     const array = txt.split('')
//     let result = []

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i], a, array[i + 1], b)

//         if (array[i] === a) {
//             if (array[i + 1] !== undefined) {
//                 if (array[i + 1] === b) {
//                     result.push('true')
//                 } else result.push('false')
//             } else result.push('false')
//         }
//     }
//     return result.every((el) => el === 'true')
// }
export function bestFriend(txt: string, a: string, b: string): boolean {
    return txt.split(a).length === txt.split(a + b).length ? true : false
}
