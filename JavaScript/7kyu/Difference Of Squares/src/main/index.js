const differenceOfSquares = (n) => {
    let numbers = []
    for (let i = 1; i <= n; i++) {
        numbers.push(i)
    }
    const squareOfSums = numbers.reduce((cur, acc) => cur + acc, 0) ** 2
    const sumOfSquares = numbers.reduce((cur, acc) => cur + acc ** 2, 0)

    return squareOfSums - sumOfSquares
}

module.exports = differenceOfSquares
