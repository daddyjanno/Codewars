function getLargerNumbers(arr1, arr2) {
    return arr1.map((el, i) => Math.max(el, arr2[i]))
}
// function getLargerNumbers(arr1, arr2) {
//     const result = []
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] > arr2[i] ? arr1[i] : arr2[i])
//     }
//     return result
// }

module.exports = getLargerNumbers
