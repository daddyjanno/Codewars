const { findTheSquare } = require('../main/index.js')

describe('Find the square', () => {
    it('should return 25-16', () => {
        expect(findTheSquare(9)).toBe('25-16')
    })
    it('should return 9-4', () => {
        expect(findTheSquare(5)).toBe('9-4')
    })
    it('should return 1681-1600', () => {
        expect(findTheSquare(81)).toBe('1681-1600')
    })
    it('should return 169-144', () => {
        expect(findTheSquare(25)).toBe('169-144')
    })
})
