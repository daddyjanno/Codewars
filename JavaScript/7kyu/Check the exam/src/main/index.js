function checkExam(array1, array2) {
    let result = 0
    for (let i = 0; i < array1.length; i++) {
        array2[i] === ''
            ? result
            : array1[i] === array2[i]
            ? (result += 4)
            : (result -= 1)
    }
    return result < 0 ? 0 : result
}

module.exports = checkExam
