const { isLeapYear } = require('../main/index.js')

describe(' Tests if is leap year', () => {
    it('should return true', () => {
        expect(isLeapYear(2000)).toBe(true)
    })
})
