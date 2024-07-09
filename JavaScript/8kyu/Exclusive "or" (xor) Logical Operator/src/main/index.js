const xor = (a, b) => {
    return a && b ? false : a || b ? true : false
}

module.exports = xor
