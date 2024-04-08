export function squarePi(digit: number): number {
    const PI: string =
        '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
    return Math.ceil(
        Math.sqrt(
            PI.slice(0, digit)
                .split('')
                .reduce((curr, acc) => curr + Math.pow(+acc, 2), 0)
        )
    )
}
// export function squarePi(digit: number): number {
//     const arrayOfPI =
//         '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split(
//             ''
//         )

//     let result = 0

//     for (let i = 0; i < digit; i++) {
//         result += Math.pow(+arrayOfPI[i], 2)
//     }

//     return Math.ceil(Math.sqrt(result))
// }
