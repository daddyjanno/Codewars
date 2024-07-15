// function decrypt(encryption) {
//     const alphabet = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8,
//         i: 9,
//         j: 10,
//         k: 11,
//         l: 12,
//         m: 13,
//         n: 14,
//         o: 15,
//         p: 16,
//         q: 17,
//         r: 18,
//         s: 19,
//         t: 20,
//         u: 21,
//         v: 22,
//         w: 23,
//         x: 24,
//         y: 25,
//         z: 26,
//     }
//     let result = []

//     for (const [key, value] of Object.entries(alphabet)) {
//         result.push(0)
//         for (let i = 0; i < encryption.length; i++) {
//             if (encryption[i] === key) result[value - 1] += 1
//         }
//     }
//     return result.join('')
// }

function decrypt(encryption) {
    const asciiLowercase = 'abcdefghijklmnopqrstuvwxyz'
    let res = ''

    for (let letter of asciiLowercase) {
        res += encryption.split(letter).length - 1
    }
    return res
}

module.exports = decrypt
