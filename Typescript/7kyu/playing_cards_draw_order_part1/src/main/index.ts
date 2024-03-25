export function draw(deck: string[]): string[] {
    let result: string[] | undefined = []
    while (deck.length) {
        result.push(deck[0])
        deck.shift()
        deck.push(deck[0])
        deck.shift()
    }
    return result
}
