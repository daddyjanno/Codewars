function order(words) {
    if (!words) return ''
    let result = []
    const wordsArray = words.split(' ')
    for (let i = 0; i < wordsArray.length; i++) {
        result.push(wordsArray.find((el) => el.includes((i + 1).toString())))
    }

    return result.join(' ')
}

module.exports = order
