const mergeStrings = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(mergeStrings('abcde', 'cdefgh')).toBe('abcdefgh')
        expect(mergeStrings('abaab', 'aabab')).toBe('abaabab')
        expect(mergeStrings('abc', 'def')).toBe('abcdef')
        expect(mergeStrings('abc', 'abc')).toBe('abc')
    })
})
