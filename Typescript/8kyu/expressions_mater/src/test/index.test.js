const { expressionsMatter } = require('../main/index.js')

describe('Expressions matter', () => {
    it('should return 6', () => {
        expect(expressionsMatter(2, 1, 2)).toBe(6)
    })
    it('should return 4', () => {
        expect(expressionsMatter(2, 1, 1)).toBe(4)
    })
    it('should return 3', () => {
        expect(expressionsMatter(1, 1, 1)).toBe(3)
    })
    it('should return 9', () => {
        expect(expressionsMatter(1, 2, 3)).toBe(9)
    })
    it('should return 5', () => {
        expect(expressionsMatter(1, 3, 1)).toBe(5)
    })
    it('should return 8', () => {
        expect(expressionsMatter(2, 2, 2)).toBe(8)
    })
})
