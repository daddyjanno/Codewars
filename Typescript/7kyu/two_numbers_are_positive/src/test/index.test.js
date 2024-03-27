const { twoArePositive } = require('../main/index.js')

describe('Two are positive ?', () => {
    it('should return true', () => {
        expect(twoArePositive(2, 4, -3)).toBe(true)
    })
    it('should return true', () => {
        expect(twoArePositive(-4, 6, 8)).toBe(true)
    })
    it('should return true', () => {
        expect(twoArePositive(4, -6, 9)).toBe(true)
    })
    it('should return false', () => {
        expect(twoArePositive(-4, 6, 0)).toBe(false)
    })
    it('should return false', () => {
        expect(twoArePositive(4, 6, 10)).toBe(false)
    })
    it('should return false', () => {
        expect(twoArePositive(-14, -3, -4)).toBe(false)
    })
})
