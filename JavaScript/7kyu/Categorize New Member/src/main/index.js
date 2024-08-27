// function openOrSenior(data) {
//     const result = []
//     data.forEach((el) =>
//         result.push(el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open')
//     )
//     return result
// }
function openOrSenior(data) {
    return data.map(([age, handicap]) =>
        age > 54 && handicap > 7 ? 'Senior' : 'Open'
    )
}

module.exports = openOrSenior
