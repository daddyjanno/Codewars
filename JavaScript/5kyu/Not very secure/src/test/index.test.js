const alphanumeric = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(alphanumeric('Mazinkaiser')).toBe(true)
        expect(alphanumeric('hello world_')).toBe(false)
        expect(alphanumeric('PassW0rd')).toBe(true)
        expect(alphanumeric('     ')).toBe(false)
    })
})
