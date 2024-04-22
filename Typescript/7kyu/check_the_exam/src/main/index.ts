// export function checkExam(array1: string[], array2: string[]): number {
//     let result = 0
//     for (let index = 0; index < array1.length; index++) {
//         if (array2[index] === '') {
//             continue
//         }
//         if (array1[index] === array2[index]) {
//             result += 4
//         } else result += -1
//     }
//     return result >= 0 ? result : 0
// }

export function checkExam(array1: string[], array2: string[]): number {
    let result = 0

    array2.forEach((item, index) => {
        item === array1[index]
            ? (result += 4)
            : item === ''
            ? (result += 0)
            : (result -= 1)
    })

    return Math.max(result, 0)
}
