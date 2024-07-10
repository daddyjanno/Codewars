function sizeToNumber(size) {
    if (size === 's') return 36
    if (size === 'm') return 38
    if (size === 'l') return 40

    const x = size.match(/x/g)?.length

    if (/^x+s$/.test(size)) return 36 - x * 2
    if (/^x+l$/.test(size)) return 40 + x * 2

    return null
}
// function sizeToNumber(size) {
//     const baseSizes = {
//         s: 36,
//         m: 38,
//         l: 40,
//     }

//     if (typeof size !== 'string' || size === '') {
//         return null
//     }
//     const regex = /^(x*)([sml])$/
//     const match = size.match(regex)
//     if (!match) {
//         return null
//     }
//     const modifiers = match[1].length
//     const baseSize = match[2]

//     if (baseSize === 'm' && modifiers > 0) {
//         return null
//     }

//     let result = baseSizes[baseSize]
//     if (baseSize !== 'm') {
//         baseSize === 'l' ? (result += modifiers * 2) : (result -= modifiers * 2)
//     }

//     return result
// }

module.exports = sizeToNumber
