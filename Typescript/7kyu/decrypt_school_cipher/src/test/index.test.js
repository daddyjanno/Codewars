const { decrypt } = require('../main/index.js')

describe('School cipher', () => {
    it('should return "Alice"', () => {
        expect(decrypt("'101''99''105''108''65'")).toBe('Alice')
    })
    it('should return "Bob"', () => {
        expect(decrypt("'98''111''66'")).toBe('Bob')
    })
    it('should return "30 71"', () => {
        expect(decrypt('30 71')).toBe('17 03')
    })
})
