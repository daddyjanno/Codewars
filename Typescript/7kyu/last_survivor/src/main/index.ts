export function lastSurvivor(letters: string, coords: number[]): string {
    let lettersLeft = letters.split('')

    for (let i = 0; i < coords.length; i++) {
        lettersLeft.splice(coords[i], 1).join()
    }
    return lettersLeft.join()
}
