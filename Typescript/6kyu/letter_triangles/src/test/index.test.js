const { triangle } = require('../main/index.js')

describe('Letter Triangles tests', () => {
    it('should return B', () => {
        expect(triangle('B')).toBe('B')
    })
    it('should return T', () => {
        expect(triangle('ABCD')).toBe('T')
    })
    it('should return L', () => {
        expect(triangle('CODEWARS')).toBe('L')
    })
})
