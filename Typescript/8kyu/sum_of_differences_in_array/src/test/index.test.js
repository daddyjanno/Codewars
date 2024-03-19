const { sumOfDifferences } = require('../main/index.js')

describe('Sum of differences', () => {
    it('should return 0 if array is empty', () => {
        expect(sumOfDifferences([])).toBe(0)
    })
    it('should return 0 if array has only one element', () => {
        expect(sumOfDifferences([5])).toBe(0)
    })
    // it('should return 9', () => {
    //     expect(sumOfDifferences([2, 1, 10])).toBe(9)
    // })
})
