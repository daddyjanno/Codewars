// const differenceOfSquares = (n) => {
//     let numbers = []
//     for (let i = 1; i <= n; i++) {
//         numbers.push(i)
//     }
//     const squareOfSums = numbers.reduce((cur, acc) => cur + acc, 0) ** 2
//     const sumOfSquares = numbers.reduce((cur, acc) => cur + acc ** 2, 0)

//     return squareOfSums - sumOfSquares
// }
const differenceOfSquares = (n) => {
    let squareOfSums = 0
    let sumOfSquares = 0
    for (let i = 1; i <= n; i++) {
        squareOfSums += i
        sumOfSquares += i ** 2
    }

    return squareOfSums ** 2 - sumOfSquares
}

module.exports = differenceOfSquares
