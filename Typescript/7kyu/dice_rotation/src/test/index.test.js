const { rotations } = require('../main/index.js')

describe('Rotations tests', () => {
    it('should return 2', () => {
        expect(rotations([1, 1, 6])).toBe(2)
    })
    it('should return 2', () => {
        expect(rotations([1, 2, 3])).toBe(2)
    })
    it('should return 0', () => {
        expect(rotations([3, 3, 3])).toBe(0)
    })
    it('should return 3', () => {
        expect(rotations([1, 6, 2, 3])).toBe(3)
    })
})
