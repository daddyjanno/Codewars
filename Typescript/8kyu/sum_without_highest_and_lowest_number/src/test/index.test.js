const { sumArray } = require('../main/typescript')

describe('sum without highest and lowest number', () => {
    it('should return 16', () => {
        expect(sumArray([6, 2, 1, 8, 10])).toBe(16)
    })
})
