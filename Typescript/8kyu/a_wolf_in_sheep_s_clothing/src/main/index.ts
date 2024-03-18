export function warnTheSheep(queue: string[]): string {
    if (queue.pop() === 'wolf') {
        return 'Pls go away and stop eating my sheep'
    } else {
        let index = queue.indexOf('wolf')
        return `Oi! Sheep number ${
            queue.length - index
        }! You are about to be eaten by a wolf!`
    }
}
