const coffee = (str) => {
    const regex = /coffee/gi
    return str.replaceAll(regex, 'COFFEE')
}

module.exports = coffee
