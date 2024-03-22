const { validParentheses } = require('../main/index.js')

describe('Valid parentheses, tests that should be true', () => {
    it('should return true', () => {
        expect(validParentheses('()')).toBe(true)
    })
    it('should return true', () => {
        expect(validParentheses('((()))')).toBe(true)
    })
    it('should return true', () => {
        expect(validParentheses('()()()')).toBe(true)
    })
    it('should return true', () => {
        expect(validParentheses('(()())()')).toBe(true)
    })
    it('should return true', () => {
        expect(validParentheses('()(())((()))(())()')).toBe(true)
    })
})
describe('Invalid parentheses, tests that should be false', () => {
    it('should return false', () => {
        expect(validParentheses(')(')).toBe(false)
    })
    it('should return false', () => {
        expect(validParentheses('()()(')).toBe(false)
    })
    it('should return false', () => {
        expect(validParentheses('((())')).toBe(false)
    })
    it('should return false', () => {
        expect(validParentheses('())(()')).toBe(false)
    })
    it('should return false', () => {
        expect(validParentheses(')()')).toBe(false)
    })
    it('should return false', () => {
        expect(validParentheses(')')).toBe(false)
    })
})
describe('Should return true for empty strings', () => {
    it('should return true', () => {
        expect(validParentheses('')).toBe(true)
    })
})
