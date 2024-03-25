export function draw(deck: string[]): string[] {
    let result: string[] | undefined = []
    while (deck.length) {
        result.push(deck.shift() as string)
        if (deck.length) {
            deck.push(deck.shift() as string)
        }
    }
    return result
}
