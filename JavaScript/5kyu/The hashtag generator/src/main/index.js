function generateHashtag(string) {
    if (string === '' || string.trim() === '') return false

    let result = string
        .split(' ')
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))

    return result.join('').length >= 140 ? false : '#' + result.join('')
}

module.exports = generateHashtag
