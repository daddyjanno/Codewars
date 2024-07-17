function getDivisorsCnt(n) {
    let result = 0
    if (n % Math.sqrt(n) === 0) {
        result++
    }
    for (let i = 0; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            result += 2
        }
    }
    return result
}

module.exports = getDivisorsCnt
