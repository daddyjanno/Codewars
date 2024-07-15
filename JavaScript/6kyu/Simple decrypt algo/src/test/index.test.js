const decrypt = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(decrypt('$aaaa#bbb*ccfff!z')).toBe('43200300000000000000000001')
        expect(decrypt('z$aaa#ccc%eee123456789')).toBe(
            '30303000000000000000000001'
        )
    })
})
