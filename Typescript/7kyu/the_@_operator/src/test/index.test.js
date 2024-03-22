const { evaluate } = require('../main/index.js')

describe('The @ operator', () => {
    it('should return 4n', () => {
        expect(evaluate('1 @ 1')).toBe(4n)
    })
    it('should return 13n', () => {
        expect(evaluate('3 @ 2')).toBe(13n)
    })
    it('should return 66n', () => {
        expect(evaluate('6 @ 9')).toBe(66n)
    })
    it('should return -9n', () => {
        expect(evaluate('4 @ -4')).toBe(-9n)
    })
    it('should return -9n', () => {
        expect(evaluate('1 @ 1 @ -4')).toBe(-9n)
    })
    it('should return 40n', () => {
        expect(evaluate('2 @ 2 @ 2')).toBe(40n)
    })
    it('should return null', () => {
        expect(evaluate('5 @ 0')).toBe(null)
    })
})
