export function feast(beast: string, dish: string): boolean {
    return (
        beast.split('').pop() === dish.split('').pop() &&
        beast.split('').shift() === dish.split('').shift()
    )
}
