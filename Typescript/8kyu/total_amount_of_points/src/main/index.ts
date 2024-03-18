// export function points(games: string[]): number {
//     const score: number[] = []
//     games.map((game) => {
//         Number(game.split(':')[0]) < Number(game.split(':')[1])
//             ? score.push(0)
//             : Number(game.split(':')[0]) > Number(game.split(':')[1])
//             ? score.push(3)
//             : score.push(1)
//     })
//     return score.reduce((acc, curr) => acc + curr, 0)
// }

export function points(games: string[]): number {
    return games.reduce((total, gamePoints) => {
        const [a, b] = gamePoints.split(':')

        return total + (a > b ? 3 : a === b ? 1 : 0)
    }, 0)
}
