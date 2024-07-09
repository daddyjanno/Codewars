const shortLongShort = (a, b) => {
    return a.length > b.length ? b + a + b : a + b + a
}

module.exports = shortLongShort
