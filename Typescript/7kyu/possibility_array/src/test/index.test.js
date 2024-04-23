const { isAllPossibilities } = require('../main/index.js')

describe('Tests if all possibilities', () => {
    it('should return true', () => {
        expect(isAllPossibilities([0, 1, 2, 3])).toBe(true)
    })
    it('should return false', () => {
        expect(isAllPossibilities([0, 2, 19, 4, 4])).toBe(false)
    })
    it('should return true', () => {
        expect(isAllPossibilities([3, 2, 1, 0])).toBe(true)
    })
    it('should return false', () => {
        expect(isAllPossibilities([1, 2, 3, 4])).toBe(false)
    })
    it('should return false', () => {
        expect(isAllPossibilities([0, 2, 3])).toBe(false)
    })
    it('should return true', () => {
        expect(isAllPossibilities([0])).toBe(true)
    })
    it('should return true', () => {
        expect(isAllPossibilities([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true)
    })
    it('should return false', () => {
        expect(isAllPossibilities([0, 1, 3, -2, 5, 4])).toBe(false)
    })
    it('should return false', () => {
        expect(isAllPossibilities([1, -1, 2, -2, 3, -3, 6])).toBe(false)
    })
})
