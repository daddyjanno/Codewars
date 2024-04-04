const { oddCount } = require('../main/index.js')

describe('Odd Number test', () => {
    it('should return 3', () => {
        expect(oddCount(7)).toBe(3)
    })
    it('should return 7', () => {
        expect(oddCount(15)).toBe(7)
    })
})
