export function triangle(row: string): string {
    let result = ''

    if (row.length === 1) {
        return row[0]
    }

    let codes = row.split('').map((letter) => letter.charCodeAt(0) - 64)

    for (let i = 0; i < codes.length - 1; i++) {
        codes[i] = codes[i] + codes[i + 1]
        if (codes[i] > 26) {
            codes[i] -= 26
        }
    }
    codes.pop()

    if (codes.length > 1) {
        row = codes.map((code) => String.fromCharCode(code + 64)).join('')
        return triangle(row)
    } else {
        result = String.fromCharCode(codes[0] + 64)
    }

    return result
}
