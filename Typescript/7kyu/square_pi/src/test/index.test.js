const { squarePi } = require('../main/index.js')

describe('Square Pi tests', () => {
    it('should return 3', () => {
        expect(squarePi(1)).toBe(3)
    })
    it('should return 6', () => {
        expect(squarePi(3)).toBe(6)
    })
    it('should return 8', () => {
        expect(squarePi(5)).toBe(8)
    })
    it('should return 15', () => {
        expect(squarePi(10)).toBe(15)
    })
})
