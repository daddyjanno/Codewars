const { sumArray } = require('../main/typescript')

describe('sum without highest and lowest number', () => {
    it('should return 16', () => {
        expect(sumArray([6, 2, 1, 8, 10])).toBe(16)
    })
    it('should return 17', () => {
        expect(sumArray([6, 0, 1, 10, 10])).toBe(17)
    })
})
