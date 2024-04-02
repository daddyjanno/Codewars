const { addLetters } = require('../main/index.js')

describe('Tests for alphabetical addition', () => {
    it('should return "z"', () => {
        expect(addLetters()).toBe('z')
    })
    it('should return "f"', () => {
        expect(addLetters('a', 'b', 'c')).toBe('f')
    })
    it('should return "z"', () => {
        expect(addLetters('z')).toBe('z')
    })
    it('should return "a"', () => {
        expect(addLetters('z', 'a')).toBe('a')
    })
})
