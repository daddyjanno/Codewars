const longShortLong = require('../main/index.js')

describe('Test', () => {
    it('should return "22" if passing "2", "2"', () => {
        expect(longShortLong('2', '2')).toBe('22')
    })
})
