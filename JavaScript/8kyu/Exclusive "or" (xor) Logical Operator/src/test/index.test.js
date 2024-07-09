const xor = require('../main/index.js')

describe("Your 'xor' function/operator", () => {
    it('should work for the four basic cases described above', () => {
        expect(xor(false, false)).toBe(false)
        expect(xor(true, false)).toBe(true)
        expect(xor(false, true)).toBe(true)
        expect(xor(true, true)).toBe(false)
    })
})
