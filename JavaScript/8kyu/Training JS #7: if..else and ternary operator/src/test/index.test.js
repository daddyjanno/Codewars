const saleHotdogs = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(saleHotdogs(1)).toBe(100)
        expect(saleHotdogs(4)).toBe(400)
        expect(saleHotdogs(5)).toBe(475)
        expect(saleHotdogs(9)).toBe(855)
        expect(saleHotdogs(10)).toBe(900)
        expect(saleHotdogs(100)).toBe(9000)
    })
})
