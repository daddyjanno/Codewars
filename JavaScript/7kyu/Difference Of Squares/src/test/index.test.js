const differenceOfSquares = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(differenceOfSquares(5)).toBe(170)
        expect(differenceOfSquares(10)).toBe(2640)
        expect(differenceOfSquares(100)).toBe(25164150)
    })
})
