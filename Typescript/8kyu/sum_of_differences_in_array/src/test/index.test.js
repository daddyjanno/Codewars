const { sumOfDifferences } = require('../main/index.js')

describe('Sum of differences', () => {
    it('should return 0 if array is empty', () => {
        expect(sumOfDifferences([])).toBe(0)
    })
    it('should return 0 if array has only one element', () => {
        expect(sumOfDifferences([5])).toBe(0)
    })
    it('should return 9', () => {
        expect(sumOfDifferences([2, 1, 10])).toBe(9)
    })
    it('should return 2', () => {
        expect(sumOfDifferences([-3, -2, -1])).toBe(2)
    })
    it('should return 34', () => {
        expect(sumOfDifferences([17, -17])).toBe(34)
    })
    it('should return 25', () => {
        expect(
            sumOfDifferences([
                -10, 8, 11, -1, 8, 8, 9, -9, 0, -3, 2, 12, -5, -7, -12, -7, -13,
                -10, 11, -8, -8, -4, -4, 8, 11,
            ])
        ).toBe(25)
    })
})
