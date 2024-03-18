export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
    // let array: number[] = []
    // for (let i = 0; i <= dadYearsOld; i++) {
    //     array.push(i)
    // }

    // return Number(
    //     array
    //         .filter(
    //             (num) =>
    //                 dadYearsOld + num === (sonYearsOld + num) * 2 ||
    //                 dadYearsOld - num === (sonYearsOld - num) * 2
    //         )
    //         .join()
    // )

    return Math.abs(dadYearsOld - sonYearsOld * 2)
}
