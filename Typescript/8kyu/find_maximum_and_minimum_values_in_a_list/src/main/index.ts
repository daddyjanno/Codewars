export function min(list: number[]): number {
    return list.length > 1 ? list.sort()[0] : list[0]
}
export function max(list: number[]): number {
    return list.length > 1
        ? list.sort((a: number, b: number) => b - a)[0]
        : list[0]
}
