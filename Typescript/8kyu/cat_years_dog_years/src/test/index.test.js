const { catYearsdogYears } = require('../main/index.js')

describe('Human years cat years dog years', () => {
    it('should return [1, 15,15] for 1', () => {
        expect(catYearsdogYears(1)).toStrictEqual([1, 15, 15])
    })
    it('should return [2, 24,24] for 2', () => {
        expect(catYearsdogYears(2)).toStrictEqual([2, 24, 24])
    })
    it('should return [10,56,64] for 10', () => {
        expect(catYearsdogYears(10)).toStrictEqual([10, 56, 64])
    })
})
