const { arrayPlusArray } = require('../main/index.js')

describe('Array plus array', () => {
    it('should return 21', () => {
        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
    })
})
