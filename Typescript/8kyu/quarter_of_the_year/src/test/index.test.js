const { quarterOf } = require('../main/index.js')
describe('Quarter of the year', () => {
    it('should return 1 for for 3(march)', () => {
        expect(quarterOf(3)).toBe(1)
    })
    it('should return 3 for for 8(august)', () => {
        expect(quarterOf(8)).toBe(3)
    })
    it('should return 4 for for 11(november)', () => {
        expect(quarterOf(11)).toBe(4)
    })
})
