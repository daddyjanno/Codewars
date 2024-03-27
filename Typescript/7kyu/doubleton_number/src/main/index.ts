export function doubleton(num: number): number {
    while (true) {
        num++

        if (new Set(String(num)).size === 2) {
            return num
        }
    }
}
