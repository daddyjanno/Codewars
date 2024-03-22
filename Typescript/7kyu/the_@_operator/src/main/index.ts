export function evaluate(equation: string): BigInt | null {
    if (!equation.includes('@')) return BigInt(equation)
    const numbers: number[] = equation.split('@').map(Number)
    let result: number = 0

    while (numbers.length > 1) {
        const [curr, acc] = numbers.splice(0, 2)
        if (!acc) return null
        result = curr + acc + (curr - acc) + curr * acc + (~~(curr / acc) || 0)
        numbers.unshift(result)
    }
    return BigInt(result)
}
// export function evaluate(equation: string): BigInt | null {
//     let stringArr = equation.split('@')
//     let arr: number[] = []
//     let result: number
//     stringArr.forEach((el) => arr.push(Number(el)))
//     console.log('arr :', arr)

//     function calc(a: number, b: number): number {
//         return Math.floor(a + b + (a - b) + a * b + a / b)
//     }

//     if (arr.length === 2 && (!arr[0] || !arr[1])) {
//         return null
//     } else {
//         result = arr.reduce(function (curr, acc) {
//             return calc(curr, acc)
//         })
//     }
//     console.log(result)
//     return BigInt(result)
// }
// export function evaluate(equation: string): number | null {
//     let arr = equation.split(' @ ')

//     let result = 0

//     for (let i = 0; i < arr.length - 1; i++) {
//         let a = result ? result : parseInt(arr[0], 10)
//         let b = parseInt(arr[1], 10)
//         if (!a || !b) {
//             return null
//         }
//         result = Math.floor(a + b + (a - b) + a * b + a / b)

//         if (arr.length > 2) {
//             arr.splice(0, 2, result.toString())
//             a = parseInt(arr[0])
//             b = parseInt(arr[1])

//             result = Math.floor(a + b + (a - b) + a * b + a / b)
//         }
//     }
//     return result
// }
