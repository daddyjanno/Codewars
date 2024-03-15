const { booleanToString } = require('../main/index.js')

describe('Convert a boolean to a string', () => {
    it('should return "true" when passing true', () => {
        expect(booleanToString(true)).toBe('true')
    })
    it('should return "false" when passing false', () => {
        expect(booleanToString(false)).toBe('false')
    })
})
