// export function warnTheSheep(queue: string[]): string {
//     if (queue.pop() === 'wolf') {
//         return 'Pls go away and stop eating my sheep'
//     } else {
//         let index = queue.indexOf('wolf')
//         return `Oi! Sheep number ${
//             queue.length - index
//         }! You are about to be eaten by a wolf!`
//     }
// }
export function warnTheSheep(queue: string[]): string {
    const position = queue.reverse().indexOf('wolf')
    return position
        ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
        : 'Pls go away and stop eating my sheep'
}
