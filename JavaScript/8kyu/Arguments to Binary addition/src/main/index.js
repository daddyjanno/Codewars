const arr2Bin = (arr) => {
    return arr
        .reduce((val, cur) => (typeof cur === 'number' ? cur + val : val), 0)
        .toString(2)
}

module.exports = arr2Bin
