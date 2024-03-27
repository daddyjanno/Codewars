const { mergeStrings } = require('../main/index.js')

describe('Merge strings', () => {
    it('should return "abcdefgh"', () => {
        expect(mergeStrings('abcde', 'cdefgh')).toBe('abcdefgh')
    })
    it('should return "abaabab"', () => {
        expect(mergeStrings('abaab', 'aabab')).toBe('abaabab')
    })
})
