const { nearestSquare } = require('../main/index.js')

describe('Find the nearest square', () => {
    it('should return 1', () => {
        expect(nearestSquare(1)).toBe(1)
    })
    it('should return 2', () => {
        expect(nearestSquare(2)).toBe(1)
    })
    it('should return 9', () => {
        expect(nearestSquare(10)).toBe(9)
    })
    it('should return 121', () => {
        expect(nearestSquare(111)).toBe(121)
    })
    it('should return 121', () => {
        expect(nearestSquare(121)).toBe(121)
    })
    it('should return 10000', () => {
        expect(nearestSquare(9999)).toBe(10000)
    })
})
