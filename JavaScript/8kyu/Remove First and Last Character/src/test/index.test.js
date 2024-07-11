const removeChar = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(removeChar('eloquent')).toBe('loquen')
        expect(removeChar('country')).toBe('ountr')
        expect(removeChar('person')).toBe('erso')
        expect(removeChar('place')).toBe('lac')
        expect(removeChar('ooopsss')).toBe('oopss')
    })
})
