const { arrayPlusArray } = require('../main/index.js')

describe('Array plus array', () => {
    it('should return 21', () => {
        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
    })
    it('should return -21', () => {
        expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
    })
    it('should return 15', () => {
        expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
    })
    it('should return 2100', () => {
        expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
    })
    it('should return 0', () => {
        expect(arrayPlusArray([0, 0, 0], [0, 0, 0])).toBe(0)
    })
    it('should return 0', () => {
        expect(arrayPlusArray([-1, -2, -3, -4], [10])).toBe(0)
    })
    it('should return 178', () => {
        expect(
            arrayPlusArray([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50])
        ).toBe(178)
    })
})
