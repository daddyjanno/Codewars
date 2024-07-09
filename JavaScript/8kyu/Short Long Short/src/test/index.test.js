const shortLongShort = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(shortLongShort('45', '1')).toBe('1451')
        expect(shortLongShort('13', '200')).toBe('1320013')
        expect(shortLongShort('Soon', 'Me')).toBe('MeSoonMe')
        expect(shortLongShort('U', 'False')).toBe('UFalseU')
    })
})
