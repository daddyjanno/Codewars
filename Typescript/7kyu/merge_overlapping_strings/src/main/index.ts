export function mergeStrings(first: string, second: string): string {
    if (first === second) {
        return first
    }
    for (let i = first.length; i >= 0; i--) {
        if (first.endsWith(second.slice(0, i))) {
            return first + second.slice(i)
        }
    }
    return first + second
}
// export function mergeStrings(first: string, second: string): string {
//     if (first === second) {
//         return first
//     }
//     for (let i = first.length; i > 0; i--) {
//         if (first.slice(-i) === second.slice(0, i)) {
//             return first + second.slice(i)
//         }
//     }
//     return first + second
// }
