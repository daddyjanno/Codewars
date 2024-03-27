export function tapCodeTranslation(text: string): string {
    let lettersRow = [
        ['A', 'B', 'C/K', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'J'],
        ['L', 'M', 'N', 'O', 'P'],
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z'],
    ]

    let result: string[] = []

    text.split('').forEach((letter) => {
        for (let i = 0; i < 5; i++) {
            if (letter.toUpperCase() === 'C' || letter.toUpperCase() === 'K') {
                return result.push('. ...')
            }
            if (lettersRow[i].includes(letter.toUpperCase())) {
                result.push('.'.repeat(i + 1))
            }
            lettersRow[i].forEach(function (col: string, index: number) {
                if (col === letter.toUpperCase()) {
                    result.push('.'.repeat(index + 1))
                }
            })
        }
    })

    return result.join(' ')
}
