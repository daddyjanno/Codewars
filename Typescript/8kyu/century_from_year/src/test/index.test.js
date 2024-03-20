const { centuryFromYear } = require('../main/index.js')

describe('Return century from year', () => {
    it('should return 18 when input is 1705', () => {
        expect(centuryFromYear(1705)).toBe(18)
    })
    it('should return 19 when input is 1900', () => {
        expect(centuryFromYear(1900)).toBe(19)
    })
    it('should return 17 when input is 1601', () => {
        expect(centuryFromYear(1601)).toBe(17)
    })
    it('should return 20 when input is 2000', () => {
        expect(centuryFromYear(2000)).toBe(20)
    })
})
