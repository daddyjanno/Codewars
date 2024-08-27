function openOrSenior(data) {
    const result = []
    data.forEach((el) =>
        result.push(el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open')
    )
    return result
}

module.exports = openOrSenior
