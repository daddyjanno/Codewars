export function centuryFromYear(year: number): number {
    const yearsString = year.toString()
    let years = parseInt(yearsString.slice(-2))
    let century = parseInt(yearsString.replace(yearsString.slice(-2), ''))

    return years === 0 ? century : century + 1
}
