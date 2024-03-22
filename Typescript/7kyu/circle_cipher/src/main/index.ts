export function encode(str: string): string {
    let arrStr = str.split('')
    let encodedStr = []
    for (let i = 1; i <= str.length; i++) {
        if (i % 2 !== 0) {
            encodedStr.push(arrStr.shift())
        } else {
            encodedStr.push(arrStr.pop())
        }
    }
    return encodedStr.join('')
}

export function decode(str: string): string {
    let arrStr = str.split('')
    let decodeStr = []
    for (let i = str.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            decodeStr.push(arrStr.pop())
        } else {
            decodeStr.unshift(arrStr.pop())
        }
    }

    return decodeStr.join('')
}
