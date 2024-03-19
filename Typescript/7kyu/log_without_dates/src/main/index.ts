export function checkLogs(log: string[]): number {
    if (!log.length) return 0

    let count = 1
    for (let i = 0; i < log.length; i++) {
        if (log[i] >= log[i + 1]) {
            count += 1
        }
        // console.log(log[i], log[i + 1], log[i] >= log[i + 1], 'count :', count)
    }
    return count
}
