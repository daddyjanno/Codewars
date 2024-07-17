const getDivisorsCnt = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(getDivisorsCnt(1)).toBe(1)
        expect(getDivisorsCnt(10)).toBe(4)
        expect(getDivisorsCnt(11)).toBe(2)
        expect(getDivisorsCnt(54)).toBe(8)
    })
})
