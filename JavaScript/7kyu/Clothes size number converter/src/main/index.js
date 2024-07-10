function sizeToNumber(size) {
    const baseSizes = {
        s: 36,
        m: 38,
        l: 40,
    }

    if (typeof size !== 'string' || size === '') {
        return null
    }
    const regex = /^(x*)([sml])$/
    const match = size.match(regex)
    if (!match) {
        return null
    }
    const modifiers = match[1].length
    const baseSize = match[2]

    if (baseSize === 'm' && modifiers > 0) {
        return null
    }

    let result = baseSizes[baseSize]
    if (baseSize !== 'm') {
        baseSize === 'l' ? (result += modifiers * 2) : (result -= modifiers * 2)
    }

    return result
}

module.exports = sizeToNumber
