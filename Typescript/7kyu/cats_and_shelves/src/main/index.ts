export function solution(start: number, finish: number) {
    let diff = finish - start
    return Math.floor(diff / 3) + (diff % 3)
}
