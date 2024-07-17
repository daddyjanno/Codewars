function persistence(num) {
    let result = 0

    while (num.toString().length > 1) {
        num = num
            .toString()
            .split('')
            .reduce((cur, acc) => cur * acc)
        result++
    }
    return result
}
// function persistence(num) {
//     let result = 0
//     let numbersArray = num.toString().split('')
//     while (numbersArray.length > 1) {
//         numbersArray = numbersArray
//             .reduce((cur, acc) => cur * acc)
//             .toString()
//             .split('')
//         result++
//     }
//     return result
// }
module.exports = persistence
