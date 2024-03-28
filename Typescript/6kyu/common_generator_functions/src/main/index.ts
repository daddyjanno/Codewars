export function* range(start = 0, stop?: number, step = 1): Generator<number> {
    for (let i = start; stop == undefined || i < stop; i += step) {
        yield i
    }
}
