const { hasSurvived } = require('../main/index.js')

describe('Has survived', () => {
    it('should return true', () => {
        expect(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])).toBe(true)
    })
    it('should return false', () => {
        expect(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])).toBe(false)
    })
    it('should return true', () => {
        expect(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])).toBe(true)
    })
    it('should return true', () => {
        expect(hasSurvived([], [1, 2, 3])).toBe(true)
    })
    it('should return false', () => {
        expect(hasSurvived([1, 2, 3], [])).toBe(false)
    })
    it('should return false', () => {
        expect(
            hasSurvived(
                [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
                [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]
            )
        ).toBe(false)
    })
})
