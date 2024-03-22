export function findTheSquare(num: number): string {
    // find the smaller consecutive square
    const smallerSquare = Math.floor(num / 2)
    console.log(smallerSquare)

    // find the biggest square
    const biggerSquare = num - smallerSquare
    console.log(biggerSquare)

    return `${biggerSquare ** 2}-${smallerSquare ** 2}`
}
