const { isLeapYear } = require('../main/index.js')

describe(' Tests if is leap year', () => {
    it('2000 is a leap year', () => {
        expect(isLeapYear(2000)).toBe(true)
    })
    it('2020 is a leap year', () => {
        expect(isLeapYear(2020)).toBe(true)
    })
    it('2015 is NOT a leap year', () => {
        expect(isLeapYear(2015)).toBe(false)
    })
    it('2100 is NOT a leap year', () => {
        expect(isLeapYear(2100)).toBe(false)
    })
})
