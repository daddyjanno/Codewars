export function gravityFlip(dir: string, arr: number[]): number[] {
    console.log(arr.sort((a: number, b: number) => a - b))

    return dir === 'R'
        ? arr.sort((a: number, b: number) => a - b)
        : arr.sort((a: number, b: number) => a - b).reverse()
}
