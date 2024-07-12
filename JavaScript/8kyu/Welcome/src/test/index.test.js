const greet = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(greet('english')).toBe('Welcome')
        expect(greet('dutch')).toBe('Welkom')
        expect(greet('IP_ADDRESS_INVALID')).toBe('Welcome')
    })
})
